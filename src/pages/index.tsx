import { Layout, Section } from '@/components/module';
import { CREDENTIAL } from '@/constants';
import { Exact } from '@/graphQl/schemas';
import { t } from '@/locales';
import { useDemoStore } from '@/stores';
import { useReactive } from 'ahooks';
import { Button, Collapse, Panel } from 'components-next';
import { omit } from 'lodash';
import React from 'react';

const IndexPage = () => {
  const state = useReactive<{ variables: Exact<{ id: string }> }>({
    variables: {
      id: '1',
    },
  });

  const demoStore = useDemoStore();

  const renderObj = Object.keys(omit(demoStore.postData, '__typename')).map((i, k) => {
    const objVal = Object.values(omit(demoStore.postData, '__typename'))[k];
    return (
      <p key={i}>
        <span className="font-bold">{i}</span>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{objVal}
      </p>
    );
  });

  const demoData: { title?: any; content?: any }[] = [
    {
      title: 'Locale with i18nNext',
      content: (
        <div className="max-w-lg mx-auto mt-20">
          <h1 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl text-center mb-6 mt-6 leading-10">
            {t('example.helloUser', { name: ': Sila Love' })}
          </h1>
        </div>
      ),
    },
    {
      title: 'Apollo GraphQl',
      content: (
        <div className="max-w-lg mx-auto mt-20">
          <h2 className="font-extrabold text-black dark:text-white text-3xl text-center mb-6 mt-6">
            Testing GraphQl Api with {CREDENTIAL.GRAPHQL_API_ENDPOINT}
          </h2>
          {demoStore.loadingPostData ? <p>Loading...</p> : renderObj}
          <button
            className="bg-green-400 p-2 mt-4 rounded-md"
            onClick={() => {
              state.variables.id += 1;
            }}
          >
            page {state.variables.id}
          </button>
        </div>
      ),
    },
    {
      title: 'state management',
      content: (
        <div className="flex justify-center gap-20 text-center">
          <div className="border p-4 rounded-md">
            <h4>Counter</h4>
            <div className="flex items-center gap-4 mt-3">
              <Button onClick={() => demoStore.dec(1)}>-</Button>
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
        </div>
      ),
    },
    {
      title: 'Test Store Performance',
      content: (
        <div className="flex justify-center gap-20 text-center">
          <div className="border p-4 rounded-md">
            <h4>Test Performance with {demoStore.totalItemFields} records</h4>
            {demoStore.itemFields.map((i) => {
              return <p key={i}>{i}</p>;
            })}
          </div>
        </div>
      ),
    },
  ];

  return (
    <Layout pageTitle="Home | Next.js + TypeScript Example">
      <Section>
        <Collapse accordion destroyInactivePanel>
          {demoData.map((i) => {
            return (
              <Panel header={i.title} panelKey={i.title} key={i.title}>
                {i.content}
              </Panel>
            );
          })}
        </Collapse>

        <div className="mt-32">{demoData[3].content}</div>
      </Section>
    </Layout>
  );
};

export default IndexPage;
