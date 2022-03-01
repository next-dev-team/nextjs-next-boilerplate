import { IStoreLifeCycle, persistence, storeLifeCycle } from '@/plugins';
import { removeItem } from '@/utils';
import { createState, State, useHookstate } from '@hookstate/core';
import { useUpdate, useUpdateEffect } from 'ahooks';
import { isDev } from 'components-next/lib';
import { isEmpty } from 'lodash';

type IPersistStore<E, S> = {
  store: State<S>;
  key: string;
  /**
   *  if we want to get new init value plz remove whitelist key want to change then add it again to make
   */
  whitelist?: E[];
  blacklist?: E[];
  isDebug?: boolean;
  forceReload?: boolean;
  lifeCycleEvent?: () => Partial<IStoreLifeCycle>;
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
  forceReload,
  lifeCycleEvent = () => ({}),
}: IPersistStore<E, S>) => {
  const isDebugMode = isDebug && isDev;
  const state = useHookstate(store);

  const reload = useUpdate();

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

  state.attach(
    storeLifeCycle({
      // when use store outside react it will not re-render so we use forceReload={true} to force update when state change
      onStoreChange: () => {
        if (forceReload) {
          reload();
        }
      },
      ...lifeCycleEvent(),
    }),
  );

  return {
    state,
  };
};

export const wrapGlobalStore = <E, S>({
  store,
  key,
  whitelist,
  blacklist,
  isDebug,
}: IPersistStore<E, S>) => {
  return {
    store,
    key,
    whitelist,
    blacklist,
    isDebug,
  };
};

/**
 * get access only from store not from custom hook
 * @param param0
 * @returns
 */
const getGlobalStore = <E, S>({
  store,
  key,
  whitelist,
  blacklist,
  isDebug,
}: IPersistStore<E, S>) => {
  const isDebugMode = isDebug && isDev;

  if ((!isEmpty(whitelist) || !isEmpty(blacklist)) && key && store) {
    store.attach(persistence(key, whitelist, blacklist));
  } else {
    removeItem(key);
    if (isDebugMode) {
      console.log('removeItem ===> ' + key);
    }
  }

  return store;
};

export { createState as createStore, getGlobalStore };
