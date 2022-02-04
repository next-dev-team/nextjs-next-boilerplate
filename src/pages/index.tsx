import { useDemoStore } from '@/stores';
import dynamic from 'next/dynamic';
import React from 'react';
const Layout = dynamic(() => import('../components/module/Layout'));
const IndexPageTemplate = dynamic(() => import('@/components/template/home'));

const IndexPage = () => {
  const { counter } = useDemoStore();
  return (
    <Layout pageTitle="Home | Next.js + TypeScript Example" className="px-20 py-6">
      {/* <IndexPageTemplate /> */}
      <h1>dssss</h1>
    </Layout>
  );
};

export default IndexPage;
