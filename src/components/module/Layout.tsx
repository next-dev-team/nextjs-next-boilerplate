import Head from 'next/head';
import type { ReactNode } from 'react';
import React from 'react';

type Props = {
  children?: ReactNode;
  pageTitle?: string;
};

export const Layout = ({ children, pageTitle = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{pageTitle}</title>
      <meta charSet="utf-8" />
    </Head>
    {children}
  </div>
);
