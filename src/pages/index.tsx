import { Section } from '@/components/module';
import dynamic from 'next/dynamic';
import React from 'react';
const Layout = dynamic(() => import('../components/module/Layout'));
const IndexPageTemplate = dynamic(() => import('@/components/template/home'));

const IndexPage = () => {
  return (
    <Layout pageTitle="Home | Next.js + TypeScript Example">
      <Section>
        <IndexPageTemplate />
      </Section>
    </Layout>
  );
};

export default IndexPage;
