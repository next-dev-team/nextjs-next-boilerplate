import dynamic from 'next/dynamic';
import React from 'react';
const Layout = dynamic(() => import('../components/module/Layout'));
const IndexPageTemplate = dynamic(() => import('@/components/template/home'));

const IndexPage = () => {
  return (
    <Layout
      description="this is my homepage description"
      title="Home | Next.js + TypeScript Example"
      className="px-20 py-6"
    >
      <IndexPageTemplate />
    </Layout>
  );
};

export default IndexPage;
