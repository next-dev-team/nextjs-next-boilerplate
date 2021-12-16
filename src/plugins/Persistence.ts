import { getItem, isBrowser, removeItem, setItem } from '@/utils';
import { Plugin, PluginCallbacks, State, StateValueAtRoot } from '@hookstate/core';
import { isEmpty } from 'lodash';

const PluginID = Symbol('LocalPersistence');

/**
 *
 * @param localStorageKey unique store key
 * @param whiteList obj key want to persist
 * @param prevState init store
 * @returns
 */
export function Persistence(
  localStorageKey: string,
  whiteList: any[],
  prevState: StateValueAtRoot,
): () => Plugin {
  const newKey = localStorageKey;
  return () =>
    isBrowser
      ? {
          id: PluginID,
          init: (state: State<StateValueAtRoot>) => {
            const persisted = getItem(newKey);
            if (persisted !== null) {
              const result = JSON.parse(persisted);
              state.merge(() => ({ ...prevState.value, ...result }));
            } else if (!state.promised && !!!state.error) {
              setItem(newKey, JSON.stringify(state.value));
            }
            return {
              onSet: (p) => {
                if ('state' in p) {
                  let newState = {
                    ...prevState.value,
                  };
                  whiteList.forEach((i) => {
                    newState[i] = p.state[i];
                  }),
                    // console.log('in p', newState);

                    isEmpty(p.state) ? '' : setItem(newKey, JSON.stringify(newState));
                } else {
                  removeItem(newKey);
                }
              },
            } as PluginCallbacks;
          },
        }
      : ({} as Plugin);
}
