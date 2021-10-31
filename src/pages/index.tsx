/* eslint-disable @next/next/no-img-element */
import { Layout } from '@/components/module';
import { CREDENTIAL } from '@/constants';
import { usePostQuery } from '@/graphQl/hooks';
import { t } from '@/locales';
import withApollo from '@/utils/withApollo';
import { getDataFromTree } from '@apollo/client/react/ssr';
import React from 'react';

const IndexPage = () => {
  /**
   *
   * get post using graphQl
   */
  const { data } = usePostQuery({
    variables: { id: '1' },
  });

  // /**
  //  *
  //  * get post using axios
  //  */
  // const getPost = async () => {
  //   const res = requestAxios.post('', {
  //     query: print(PostDocument),
  //     variables: { id: '1' },
  //   });
  //   return res;
  // };

  // useEffect(() => {
  //   getPost();
  // }, []);

  return (
    <Layout pageTitle="Home | Next.js + TypeScript Example">
      <div className="max-w-lg mx-auto mt-20">
        <h1 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl text-center mb-6 mt-6 leading-10">
          {t('example.helloUser', { name: ': Sila' })}
        </h1>
        <h2 className="font-extrabold text-black dark:text-white text-3xl text-center mb-6 mt-6">
          Testing GraphQl Api with {CREDENTIAL.GRAPHQL_API_ENDPOINT}
        </h2>

        <div className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4 mt-16">
          <p className="text-gray-600 dark:text-white">
            <span className="font-bold text-indigo-500 text-lg">“</span>
            {data?.post?.body}
            <span className="font-bold text-indigo-500 text-lg">”</span>
          </p>
          <div className="flex items-center mt-4">
            <a href="#" className="block relative">
              <img
                alt="profil"
                src="https://www.tailwind-kit.com/images/person/1.jpg"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div className="flex flex-col ml-2 justify-between">
              <span className="font-semibold text-indigo-500 text-sm">Jean Miguel</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withApollo(IndexPage, { getDataFromTree });
