import { Persistence } from '@/plugins';
import { createState, useState } from '@hookstate/core';
import { useMount } from 'ahooks';

type IPersistStore<E> = {
  store: any;
  key: string;
  whiteList: E[];
};

/**
 *  persistStore
 *  @usage - before render
 *  persistStore({ key: 'useSettingsStore', state, whitelist: ['counter'] });
 */
export const usePersistStore = <E, S>({ store, key, whiteList }: IPersistStore<E>) => {
  const state = useState(store as S);

  useMount(() => {
    state.attach(Persistence(key, whiteList, store));
  });

  return {
    state,
  };
};
export { createState as createStore };
