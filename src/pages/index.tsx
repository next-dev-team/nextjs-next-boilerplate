import { Layout } from '@/components/module';
import { CREDENTIAL } from '@/constants';
import { usePostQuery } from '@/graphQl/hooks';
import { t } from '@/locales';
import { useReactive } from 'ahooks';
import { omit } from 'lodash';
import React from 'react';

const IndexPage = () => {
  const state = useReactive({
    variables: {
      id: 1,
    },
  });

  /**
   *
   * get post using graphQl
   */
  const { data, loading } = usePostQuery({
    variables: { ...(state.variables as any) },
  });

  console.log('data', data);

  const renderObj = Object.keys(omit(data?.post, '__typename')).map((i, k) => {
    const objVal = Object.values(omit(data?.post, '__typename'))[k];
    return (
      <p key={i}>
        <span className="font-bold">{i}</span>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{objVal}
      </p>
    );
  });

  return (
    <Layout pageTitle="Home | Next.js + TypeScript Example">
      <div className="max-w-lg mx-auto mt-20">
        <h1 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl text-center mb-6 mt-6 leading-10">
          {t('example.helloUser', { name: ': Sila Love' })}
        </h1>
        <h2 className="font-extrabold text-black dark:text-white text-3xl text-center mb-6 mt-6">
          Testing GraphQl Api with {CREDENTIAL.GRAPHQL_API_ENDPOINT}
        </h2>
        {loading ? <p>Loading...</p> : renderObj}
        <button
          className="bg-green-400 p-2 mt-4 rounded-md"
          onClick={() => {
            state.variables.id += 1;
          }}
        >
          page {state.variables.id}
        </button>
      </div>
    </Layout>
  );
};

export default IndexPage;
