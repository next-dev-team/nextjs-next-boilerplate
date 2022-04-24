import { Section } from '@/components/module';
import Layout from '@/components/module/Layout';
import { usePostQuery } from '@/graphQl/hooks';
import { useRouter } from 'next/router';
import React from 'react';

const IndexPage = () => {
  // const demoStore = useDemoStore();
  const router = useRouter();

  const { data: postData, loading: loadingPostData } = usePostQuery({
    variables: { id: router?.query?.id },
  });

  console.log('postData', postData);

  return (
    <Layout title={postData?.post?.title} description={postData?.post?.body}>
      <Section loading={loadingPostData} hasMt title={postData?.post?.body} />
    </Layout>
  );
};

export default IndexPage;
