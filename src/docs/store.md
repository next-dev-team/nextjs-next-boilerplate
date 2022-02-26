# State Management

usage of store with hookstate with custom plugin

```tsx
import { createStore, useGlobalStore } from '@/hooks';

/**
 * this is sample of usage hookstate with persist plugin
 * @link https://hookstate.js.org/docs/global-state
 */

/**
 * init interface
 */
type IInitStore = {
  colorScheme: 'dark' | 'light';
};

//init store value with interface it will use own value as interface
const initWithOwnType = {
  counter: 0,
};

// init store value with interface it will use IInitStore for typing
const initWithType: IInitStore = {
  colorScheme: 'light',
};

// combine init type & own type together
const initStore = {
  ...initWithOwnType,
  ...initWithType,
};

// get combine type for store interface
type IStore = IInitStore & typeof initStore;

// get combine store key interface for whitelist typing
type IStoreKey = keyof IStore;

// create hook store
const store = createStore(initStore);

/**
 *  this one is normal custom hook we can return other state too
 *  but make sure following the rule of custom hook
 */
export default function useSampleStore() {
  /**
   * useGlobalStore is a custom hook base on hookstate
   * provide persistence with whitelist or blacklist
   */
  const { state } = useGlobalStore<IStoreKey, IStore>({
    key: 'useSampleStore',
    store,
    whitelist: ['counter'],
  });

  // usage of update state with arg
  const setCounterDecBy = (by = 1) => {
    state.counter.set((p) => p - by);
  };

  return {
    /**
     * usage of get state it will render only state.counter change due to it use proxy base
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
     */
    get counter() {
      return state.counter.get();
    },
    //return func as normal custom hook
    setCounterDecBy,
  } as const;
}

export type ISettingStore = Partial<ReturnType<typeof useSampleStore>>;
```
