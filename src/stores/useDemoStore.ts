import { usePostQuery } from '@/graphQl/hooks';
import { createState, useState } from '@hookstate/core';
import { clearCache, useCreation, useRequest } from 'ahooks';
import axios from 'axios';

const demoStore = createState({
  counter: 1,
  itemFields: Array.from(Array(5000).keys()).map((i) => `Field #${i + 1} value`),
});

const resourcePath = 'https://raw.githubusercontent.com/avkonst/hookstate/master/CNAME';

const getName = async () => {
  const re = await axios.get(resourcePath);
  return re.data as string;
};

export function useDemoStore() {
  /**
   * with hookstate
   */
  const state = useState(demoStore);

  /**
   * with ahooks useRequest cache
   */
  const getNameKey = 'cache-demo';
  const {
    data: asyncName,
    loading: loadingAsyncName,
    refresh: refetchAsyncName,
    mutate: clearAsyncName,
  } = useRequest(getName, { cacheKey: getNameKey, staleTime: 1000 });

  /**
   * with GraphQl useQuery
   */
  const { data: postData, loading: loadingPostData } = usePostQuery({
    variables: { id: '1' },
  });

  return {
    /**
     * hookstate
     */
    get counter() {
      return state.counter.get();
    },
    get itemFields() {
      return state.itemFields.get();
    },
    get totalItemFields() {
      return state.itemFields.get().length;
    },
    inc: (by = 1) => {
      state.counter.set((p) => p + by);
    },
    dec: (by = 1) => {
      state.counter.set((p) => p - by);
    },
    /**
     * custom
     */
    asyncName: useCreation(() => asyncName, [asyncName]),
    loadingAsyncName: !asyncName && loadingAsyncName,
    refetchAsyncName,
    clearAsyncName: () => {
      clearAsyncName('');
      clearCache(getNameKey);
    },
    loadingPostData: useCreation(() => loadingPostData, [loadingPostData]),
    postData: useCreation(() => postData?.post, [postData]),
  };
}
