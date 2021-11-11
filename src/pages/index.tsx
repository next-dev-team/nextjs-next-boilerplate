import { Layout } from '@/components/module';
import { CREDENTIAL } from '@/constants';
import { usePostQuery } from '@/graphQl/hooks';
import { t } from '@/locales';
import { Pricing2 } from 'components-next';
import React from 'react';

const IndexPage = () => {
  /**
   *
   * get post using graphQl
   */
  const { data } = usePostQuery({
    variables: { id: '1' },
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
      </div>

      <div className="flex justify-center mt-10">
        <div className="max-w-md">
          <Pricing2 />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
