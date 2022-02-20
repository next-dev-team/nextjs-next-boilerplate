// credit https://github.com/peter-olom/hookstate-persist/blob/main/src/index.ts

import { getItem, setItem } from '@/utils';
import { Plugin, State, StateValueAtRoot } from '@hookstate/core';

const PluginID = Symbol('LocalPersistence');

/**
 *
 * @param localStorageKey unique store key
 * @param whiteList obj key want to persist
 * @param blacklist obj key want to not persist
 * @returns
 */
export function persistence(
  localStorageKey: string,
  whitelist?: any[],
  blacklist?: any[],
): () => Plugin {
  const key = localStorageKey;
  return () => ({
    id: PluginID,
    init: (s: State<StateValueAtRoot>) => {
      const engineResponse = getItem(key);
      // hydrateTime the state from async storage
      Promise.resolve(engineResponse).then((res) => {
        if (res) {
          const store = JSON.parse(res);
          s.merge(store);
        }
        s.merge({ hydrateTime: Date.now() });
      });

      return {
        onSet: (data: any) => {
          // copy data.state and operate on it
          const state = { ...data.state };
          if (typeof state == 'object') {
            if (blacklist) {
              // delete said keys before peristing only if object
              blacklist.forEach((item) => {
                delete state[item];
              });
            } else if (whitelist) {
              // create a blacklist and delete them
              const manualBlacklist = Object.keys(state).filter(
                (item) => whitelist.indexOf(item) < 0,
              );
              manualBlacklist.forEach((item) => {
                delete state[item];
              });
            }
            delete state.hydateTime;
          }
          setItem(key, JSON.stringify(state));
        },
      };
    },
  });
}
