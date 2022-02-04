import { persistence } from '@/plugins';
import { removeItem } from '@/utils';
import { createState, useHookstate } from '@hookstate/core';
import { useUpdateEffect } from 'ahooks';
import { isDev } from 'components-next/lib';
import { isEmpty } from 'lodash';

type IPersistStore<E> = {
  store: any;
  key: string;
  /**
   *  if we want to get new init value plz remove whitelist key want to change then add it again to make
   */
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
  const isDebugMode = isDebug && isDev;
  const state = useHookstate(store as S);

  //if whitelist or blacklist will use persist func
  if ((!isEmpty(whitelist) || !isEmpty(blacklist)) && key) {
    state.attach(persistence(key, whitelist, blacklist));
  } else {
    removeItem(key);
    if (isDebugMode) {
      console.log('removeItem ===> ' + key);
    }
  }

  //logger store
  useUpdateEffect(() => {
    if (isDebugMode) {
      console.log('store' + key, state);
    }
  }, [isDebug, state]);

  return {
    state,
  };
};
export { createState as createStore };
