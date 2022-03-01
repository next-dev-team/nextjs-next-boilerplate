// credit https://github.com/peter-olom/hookstate-persist/blob/main/src/index.ts

import { Plugin, PluginCallbacks, State, StateValueAtRoot } from '@hookstate/core';
import isEqual from 'react-fast-compare';

const PluginID = Symbol('storeLifeCycle');

export type IStoreLifeCycle = {
  onInit?: (state: State<StateValueAtRoot>) => void;
  onSet?: PluginCallbacks['onSet'];
  onStoreChange?: PluginCallbacks['onSet'];
} & Partial<ReturnType<Plugin['init']>>;

export function storeLifeCycle({
  onInit,
  onSet,
  onStoreChange,
  ...rest
}: IStoreLifeCycle): () => Plugin {
  return () => ({
    id: PluginID,
    init: (s: State<StateValueAtRoot>) => {
      onInit?.(s);
      return {
        ...rest,
        onSet: (data) => {
          const isStateEqual = isEqual(data.value, s.get());
          onSet?.(data);
          if (!isStateEqual) {
            onStoreChange?.(data);
          }
        },
      };
    },
  });
}
