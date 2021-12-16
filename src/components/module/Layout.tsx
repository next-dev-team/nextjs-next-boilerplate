import { clx } from '@/utils';
import Head from 'next/head';
import type { ReactNode } from 'react';
import React from 'react';

export type ILayout = {
  children?: ReactNode;
  pageTitle?: string;
  className?: string;
  childrenOnly?: boolean;
};

const Layout = ({ children, pageTitle = '', className, childrenOnly }: ILayout) => {
  if (childrenOnly) {
    return <span className={className}>{children}</span>;
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div
        className={clx('bg-blue-100 dark:bg-gray-600 sm:pt-82px pt-76px min-h-[88.2vh]', className)}
      >
        {children}
      </div>
    </>
  );
};
export default Layout;
