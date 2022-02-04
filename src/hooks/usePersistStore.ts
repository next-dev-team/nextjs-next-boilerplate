import { persistence } from '@/plugins';
import { createState, useHookstate } from '@hookstate/core';
import { useUpdateEffect } from 'ahooks';
import { isDev } from 'components-next/lib';

type IPersistStore<E> = {
  store: any;
  key: string;
  whitelist?: E[];
  blacklist?: E[];
  isDebug?: boolean;
};

/**
 *  persistStore
 *  @usage - before render
 *  persistStore({ key: 'useSettingsStore', state, whitelist: ['counter'] });
 */

export const useGlobalStore = <E, S>({
  store,
  key,
  whitelist,
  blacklist,
  isDebug,
}: IPersistStore<E>) => {
  const state = useHookstate(store as S);

  state.attach(persistence(key, whitelist, blacklist));

  useUpdateEffect(() => {
    if (isDebug && isDev) {
      console.log('state', state);
    }
  }, [isDebug, state]);

  return {
    state,
  };
};
export { createState as createStore };
