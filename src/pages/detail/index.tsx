import { Section } from '@/components/module';
import Layout from '@/components/module/Layout';
import { useApolloGraph } from '@/components/template/home/apolloGraph';
import { useDemoStore } from '@/stores';
import { Button } from 'components-next/lib';
import React from 'react';

const IndexPage = () => {
  const demoStore = useDemoStore();
  const { content } = useApolloGraph();

  return (
    <Layout title={demoStore?.postData?.title}>
      <Section hasMt>
        <div className="flex justify-center gap-20 text-center">
          <div className="border p-4 rounded-md">
            <h4>Counter</h4>
            <div className="flex items-center gap-4 mt-3">
              <Button
                onClick={() => {
                  demoStore.dec();
                }}
              >
                -
              </Button>
              <p>{demoStore.counter}</p>
              <Button color="success" onClick={() => demoStore.inc()}>
                +
              </Button>
            </div>
          </div>

          <div className="border p-4 rounded-md">
            <h4>Async Data with ahooks cache</h4>
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
          {content}
        </div>
      </Section>
    </Layout>
  );
};

export default IndexPage;
