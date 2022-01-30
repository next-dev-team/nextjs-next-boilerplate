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
            const persisted = getItem(newKey);
            if (persisted !== null) {
              const result = JSON.parse(persisted);
              s.merge(result);
            } else if (!s.promised && !!!s.error) {
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
              setItem(newKey, JSON.stringify(state));
            }
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
                }
                setItem(newKey, JSON.stringify(state));
              },
            } as PluginCallbacks;
          },
        }
      : ({} as Plugin);
}
