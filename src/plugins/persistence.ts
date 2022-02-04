// credit https://github.com/peter-olom/hookstate-persist/blob/main/src/index.ts

import { getItem, isBrowser, setItem } from '@/utils';
import { Plugin, PluginCallbacks, State, StateValueAtRoot } from '@hookstate/core';

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
  const newKey = localStorageKey;
  return () =>
    isBrowser
      ? {
          id: PluginID,
          init: (s: State<StateValueAtRoot>) => {
            console.log('start');

            const state = { ...s.value };
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
            }

            const persisted = getItem(newKey);
            const result = !!persisted && JSON.parse(persisted);
            if (typeof result == 'object') {
              if (blacklist) {
                // delete said keys before peristing only if object
                blacklist.forEach((item) => {
                  delete result[item];
                });
              } else if (whitelist) {
                // create a blacklist and delete them
                const manualBlacklist = Object.keys(result).filter(
                  (item) => whitelist.indexOf(item) < 0,
                );
                manualBlacklist.forEach((item) => {
                  delete result[item];
                });
              }
            }
            const mergeResult = { ...state, ...result };
            setItem(newKey, JSON.stringify(mergeResult));

            if (result) {
              s.merge(result);
            }

            return {
              onSet: (data: any) => {
                // eslint-disable-next-line @typescript-eslint/no-shadow
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
                }
                setItem(newKey, JSON.stringify(state));
              },
            } as PluginCallbacks;
          },
        }
      : ({} as Plugin);
}
