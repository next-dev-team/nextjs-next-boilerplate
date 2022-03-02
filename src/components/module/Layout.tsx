import useRoutes from '@/hooks/useRoutes';
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
  const { pathname } = useRoutes();
  const newPageTitle = pathname.replace('/', '') || pageTitle;

  const head = (
    <Head>
      <title>
        soon {newPageTitle && '|'} {newPageTitle}
      </title>
    </Head>
  );

  if (childrenOnly) {
    return (
      <span className={className}>
        {head}
        {children}
      </span>
    );
  }

  return (
    <>
      {head}
      <div
        className={clx(
          'bg-white dark:bg-gray-600 sm:pt-[72px] pt-[60px] min-h-[88.2vh]',
          className,
        )}
      >
        {children}
      </div>
    </>
  );
};
export default Layout;
