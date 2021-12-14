import { useDemoStore } from '@/stores';
import { Button } from 'components-next/lib';
import { isEmpty } from 'lodash';

export const useStateManagement = () => {
  const demoStore = useDemoStore();

  return {
    title: 'state management',
    content: (
      <div className="flex justify-center gap-20 text-center">
        <div className="border p-4 rounded-md">
          <h4>Counter with persist state</h4>
          <div className="flex items-center gap-4 mt-3">
            <Button onClick={() => demoStore.dec(1)}>-</Button>
            <p>{demoStore.counter}</p>
            <Button color="success" onClick={() => demoStore.inc()}>
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
            <p>{demoStore.loadingAsyncName ? 'Loading...' : demoStore.asyncName || 'No Data'}</p>
            <div className="flex gap-4 justify-center mt-4">
              <Button color="success" onClick={demoStore.refetchAsyncName} className="mt-2">
                Refetch Async Name
              </Button>
              <Button color="primary" onClick={demoStore.clearAsyncName} className="mt-2">
                Clear Data
              </Button>
            </div>
          </div>
        </div>
        <div className="border p-4 rounded-md">
          <h4 className="font-bold">Async Data with axios with graphDoc</h4>
          <p>it's SSG only if we want get SSR call it it NextJs SSR method</p>
          <div className="flex-col items-center mt-6">
            <p>
              {demoStore.loadingAsyncNameAxios
                ? 'Loading...'
                : isEmpty(demoStore?.asyncNameAxios)
                ? 'No Data'
                : demoStore?.asyncNameAxios?.map?.((i = {}) => {
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
                onClick={() => demoStore.getAsyncNameAxios(demoStore.variablesPosts as any)}
                className="mt-2"
              >
                Refetch Axios
              </Button>
              <button
                className="bg-green-400 p-2 mt-4 rounded-md"
                onClick={() => {
                  demoStore.setVariablesPosts();
                  demoStore.getAsyncNameAxios(demoStore.variablesPosts as any);
                }}
              >
                page {demoStore.variablesPosts.id}
              </button>
              <Button color="primary" onClick={demoStore.clearAsyncNameAxios} className="mt-2">
                Clear Data
              </Button>
            </div>
          </div>
        </div>
      </div>
    ),
  };
};
