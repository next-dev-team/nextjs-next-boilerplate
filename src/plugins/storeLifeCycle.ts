import { Plugin, PluginCallbacks, State, StateValueAtRoot } from '@hookstate/core';
import { isDev } from 'components-next/lib';
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

            if (isDev) {
              console.log(
                `%c [store]: '${data.path.join('/')}':`,
                'background: #222; color:orange',
                data?.previous,
                '=>',
                data.value,
              );
            }
          }
        },
      };
    },
  });
}
