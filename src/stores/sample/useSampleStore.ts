import { createStore, useGlobalStore } from '@/hooks';

type IInitStore = {
  colorScheme: 'dark' | 'light';
};

const initWithOwnType = {
  counter: 0,
};

const initWithType: IInitStore = {
  colorScheme: 'light',
};

const initStore = {
  ...initWithOwnType,
  ...initWithType,
};

type IStore = IInitStore & typeof initStore;

type IStoreKey = keyof IStore;

const store = createStore(initStore);

export default function useSampleStore() {
  const { state } = useGlobalStore<IStoreKey, IStore>({
    key: 'useSampleStore',
    store,
    whitelist: ['counter'],
  });

  const setCounterDecBy = (by = 1) => {
    state.counter.set((p) => p - by);
  };

  return {
    get counter() {
      return state.counter.get();
    },
    setCounterDecBy,
  } as const;
}

export type ISettingStore = Partial<ReturnType<typeof useSampleStore>>;
