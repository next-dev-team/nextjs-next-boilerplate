import { persistence } from '@/plugins';
import { createState, useState } from '@hookstate/core';

type IPersistStore<E> = {
  store: any;
  key: string;
  whitelist?: E[];
  blacklist?: E[];
};

/**
 *  persistStore
 *  @usage - before render
 *  persistStore({ key: 'useSettingsStore', state, whitelist: ['counter'] });
 */
export const usePersistStore = <E, S>({ store, key, whitelist, blacklist }: IPersistStore<E>) => {
  const state = useState(store as S);

  state.attach(persistence(key, whitelist, blacklist));

  return {
    state,
  };
};
export { createState as createStore };
