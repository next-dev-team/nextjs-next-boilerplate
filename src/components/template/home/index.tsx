import { CREDENTIAL } from '@/constants';
import { useDemoStore, useSettingsStore } from '@/stores';
import { Button, Collapse, Panel } from 'components-next';
import { isEmpty, omit } from 'lodash';
import React from 'react';
import { useI18nDemo } from './i18nNext';

const IndexPageTemplate = () => {
  const demoStore = useDemoStore();
  const settingsStore = useSettingsStore();
  const { t, changeI18n, activeLocale, currentLocale } = settingsStore;

  console.log('settingsStore', settingsStore);

  const renderObj = Object.keys(omit(demoStore.postData, '__typename')).map((i, k) => {
    const objVal = Object.values(omit(demoStore.postData, '__typename'))[k];
    return (
      <p key={i}>
        <span className="font-bold">{i}</span>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{objVal}
      </p>
    );
  });

  const i18nState = useI18nDemo({ t, changeI18n, currentLocale, activeLocale });

  const demoData: { title?: any; content?: any }[] = [
    i18nState,
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
            onClick={demoStore.setVariablesPosts}
          >
            page {demoStore.variablesPosts.id}
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
            <h4 className="font-bold">Async Data with ahooks cache (ssg)</h4>
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
    {
      title: 'Tailwind Component & Dark Mode',
      content: (
        <div className="max-w-lg mx-auto mt-20">
          <h2 className="font-extrabold text-black dark:text-white text-3xl text-center mb-6 mt-6">
            Testing GraphQl Api with {CREDENTIAL.GRAPHQL_API_ENDPOINT}
          </h2>
          {demoStore.loadingPostData ? <p>Loading...</p> : renderObj}
          <button
            className="bg-green-400 p-2 mt-4 rounded-md"
            onClick={demoStore.setVariablesPosts}
          >
            page {demoStore.variablesPosts.id}
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <Collapse accordion destroyInactivePanel>
        {demoData.map((i) => {
          return (
            <Panel header={i.title} panelKey={i.title} key={i.title}>
              {i.content}
            </Panel>
          );
        })}
      </Collapse>

      {/* <div className="mt-32">{demoData[0].content}</div> */}
    </>
  );
};

export default IndexPageTemplate;
