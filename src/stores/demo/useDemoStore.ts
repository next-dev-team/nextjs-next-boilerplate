import { usePostQuery } from '@/graphQl/hooks';
import { PostQuery, PostQueryVariables } from '@/graphQl/operations';
import { getGlobalStore, useGlobalStore, wrapGlobalStore } from '@/hooks';
import { createState } from '@hookstate/core';
import { useCreation, useRequest } from 'ahooks';
import { AxiosResponse } from 'axios';
import { getAsyncNameGraph, getAsyncNameService } from './service';

const initStore = {
  itemFields: Array.from(Array(3000).keys()).map((i) => `Field #${i + 1} value`),
  variablesPosts: { id: 1 },
  asyncNameAxios: [] as PostQuery['post'][],
  loadingAsyncNameAxios: false,
  counter: 0,
  info: {
    a: 0,
    b: 1,
  },
};

type IStore = typeof initStore;
type IStoreKey = keyof IStore;

const store = createState(initStore);

const wrapStore = wrapGlobalStore<IStoreKey, IStore>({
  key: 'useDemoStore',
  store,
  whitelist: ['counter', 'variablesPosts'],
});

export function useDemoStore(props?: { forceReload?: boolean }) {
  const { forceReload } = props || {};

  const { state } = useGlobalStore({ ...wrapStore, forceReload });

  /**
   * with ahooks useRequest cache
   */
  const {
    data: asyncName,
    loading: loadingAsyncName,
    refresh: refetchAsyncName,
    mutate: clearAsyncName,
  } = useRequest(getAsyncNameService, { cacheKey: 'cache-demo' });

  /**
   * with GraphQl useQuery
   */
  const {
    data: postData,
    loading: loadingPostData,
    refetch: refetchPostData,
  } = usePostQuery({
    variables: { ...state.variablesPosts.value } as unknown as PostQueryVariables,
  });

  return {
    /**
     * hookstate part
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
    setVariablesPosts: () => {
      state.variablesPosts.set(({ id }) => ({ id: id + 1 }));
    },
    get variablesPosts() {
      return state.variablesPosts.get();
    },

    /**
     * with axios
     */
    getAsyncNameAxios: async (p: PostQueryVariables) => {
      state.loadingAsyncNameAxios.set(true);
      const asyncNameRes: AxiosResponse<PostQuery> = await getAsyncNameGraph(p);

      state.asyncNameAxios.set([asyncNameRes?.data?.post]);
      state.loadingAsyncNameAxios.set(false);
    },
    get asyncNameAxios() {
      return state.asyncNameAxios.get();
    },
    get loadingAsyncNameAxios() {
      return state.loadingAsyncNameAxios.get();
    },
    clearAsyncNameAxios: () => {
      state.asyncNameAxios.set([] as any);
      state.variablesPosts.set(initStore.variablesPosts);
    },
    /**
     * useRequest part
     */
    asyncName: useCreation(() => asyncName, [asyncName]),
    loadingAsyncName: !asyncName && loadingAsyncName,
    refetchAsyncName,
    clearAsyncName: () => clearAsyncName(''),
    /**
     * apollo part
     */
    loadingPostData: useCreation(() => loadingPostData, [loadingPostData]),
    postData: useCreation(() => postData?.post, [postData]),
    refetchPostData,
  } as const;
}

// get store outSide react
export const demoStore = getGlobalStore(wrapStore);
