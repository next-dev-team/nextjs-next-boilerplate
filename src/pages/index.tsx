import React from 'react';
import Layout from '@/components/atoms/Layout';
import { usePostQuery } from '@/graphQl/hooks';
import withApollo from '@/utils/withApollo';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { Button } from 'antd';

const IndexPage = () => {
  const { data, loading } = usePostQuery({
    variables: { id: '1' },
  });

  console.log('data', data);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>{loading? "Loading...":'Hello Next.js 👋'}</h1>
      <Button type="primary"> {data?.post.title}</Button>
    </Layout>
  );
};

export default withApollo(IndexPage, { getDataFromTree });
