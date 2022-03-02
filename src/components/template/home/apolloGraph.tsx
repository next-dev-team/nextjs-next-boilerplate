import { CREDENTIAL } from '@/constants';
import { useDemoStore } from '@/stores';
import { Button } from 'components-next/lib';
import { omit } from 'lodash';

export const useApolloGraph = () => {
  const demoStore = useDemoStore();

  const renderObj = Object.keys(omit(demoStore.postData, '__typename')).map((i, k) => {
    const objVal = Object.values(omit(demoStore.postData, '__typename'))[k];
    return (
      <p key={i}>
        <span className="font-bold">{i}</span>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{objVal}
      </p>
    );
  });

  return {
    title: 'Apollo GraphQl',
    content: (
      <div className="max-w-lg mx-auto mt-20 gap-2">
        <h2 className="font-extrabold text-black dark:text-white text-3xl text-center mb-6 mt-6">
          Testing GraphQl Api with {CREDENTIAL.GRAPHQL_API_ENDPOINT}
        </h2>
        {demoStore.loadingPostData ? <p>Loading...</p> : renderObj}
        <div className="flex gap-3 justify-end">
          <Button color="success" className="mt-3" onClick={demoStore.setVariablesPosts}>
            page {demoStore.variablesPosts.id}
          </Button>
          <Button className="mt-3" onClick={() => demoStore.refetchPostData()}>
            Refetch Data
          </Button>
        </div>
      </div>
    ),
  };
};
