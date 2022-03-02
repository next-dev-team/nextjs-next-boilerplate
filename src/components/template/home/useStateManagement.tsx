import { demoStore, useDemoStore } from '@/stores';
import { Button } from 'components-next/lib';
import { isEmpty } from 'lodash';
import { useEffect } from 'react';

export const useStateManagement = () => {
  const {
    counter,
    inc,
    dec,
    variablesPosts,
    loadingAsyncName,
    asyncName,
    refetchAsyncName,
    clearAsyncName,
    asyncNameAxios,
    getAsyncNameAxios,
    setVariablesPosts,
    clearAsyncNameAxios,
    loadingAsyncNameAxios,
    runAsyncName,
  } = useDemoStore();

  useEffect(() => {
    runAsyncName();
  }, [runAsyncName]);

  return {
    title: 'state management',
    content: (
      <div className="flex justify-center gap-10 text-center flex-wrap">
        {/* Dark mode */}
        <div className="border p-4 flex flex-col rounded-md justify-center items-center">
          <h4>Access store variablesPosts without using hook we also can use it every where</h4>
          <div className="flex items-center gap-4 mt-3">
            <Button color={'success'} onClick={() => inc()}>
              {demoStore.variablesPosts.id.get()}
            </Button>
          </div>
        </div>

        {/* counter with persist state */}
        <div className="border p-4 rounded-md">
          <h4>Counter with persist state</h4>
          <div className="flex items-center gap-4 mt-3">
            <Button onClick={() => dec(1)}>-</Button>
            <p>{counter}</p>
            <Button color="success" onClick={() => inc()}>
              +
            </Button>
          </div>
        </div>

        <div className="border p-4 rounded-md">
          <h4 className="font-bold">Async Data with ahooks cache (client side only)</h4>
          <p>
            data will cache with default scale time we can notice we not see the loading again in
            second request
          </p>
          <div className="flex-col items-center mt-6">
            <p>{loadingAsyncName ? 'Loading...' : asyncName || 'No Data'}</p>
            <div className="flex gap-4 justify-center mt-4">
              <Button color="success" onClick={refetchAsyncName} className="mt-2">
                Refetch Async Name
              </Button>
              <Button color="primary" onClick={clearAsyncName} className="mt-2">
                Clear Data
              </Button>
            </div>
          </div>
        </div>
        <div className="border p-4 rounded-md">
          <h4 className="font-bold">Async Data with axios with graphDoc</h4>
          <p>it is SSG only if we want get SSR call it it NextJs SSR method</p>
          <div className="flex-col items-center mt-6">
            <p>
              {loadingAsyncNameAxios
                ? 'Loading...'
                : isEmpty(asyncNameAxios)
                ? 'No Data'
                : asyncNameAxios?.map?.((i = {}) => {
                    return (
                      <p key={i.id}>
                        <span className="font-bold">{i.id}</span>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {i.body}
                      </p>
                    );
                  })}
            </p>
            <div className="flex gap-4 justify-center mt-4">
              <Button
                color="success"
                onClick={() => getAsyncNameAxios(variablesPosts as any)}
                className="mt-2"
              >
                Refetch Axios
              </Button>
              <button
                className="bg-green-400 p-2 mt-4 rounded-md"
                onClick={() => {
                  setVariablesPosts();
                  getAsyncNameAxios(variablesPosts as any);
                }}
              >
                page {variablesPosts.id}
              </button>
              <Button color="primary" onClick={clearAsyncNameAxios} className="mt-2">
                Clear Data
              </Button>
            </div>
          </div>
        </div>
      </div>
    ),
  };
};
