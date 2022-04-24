import useRoutes from '@/hooks/useRoutes';
import { clx, getNotNullVal, isBrowser } from '@/utils';
import React, { ReactNode } from 'react';
import NarBar from './NarBar';
import NextHeadSeo from './NextHeadSeo';

export type ILayout = {
  children?: ReactNode;
  className?: string;
  childrenOnly?: boolean;
  path?: string;
  title?: string;
  description?: string;
  ogImagePath?: string;
  noindex?: boolean;
  noTitleTemplate?: boolean;
  hasGradientBg?: boolean;
};

const Layout = ({
  children,
  title = '',
  className = '',
  childrenOnly,
  noTitleTemplate,
  path = '',
  description,
  noindex,
  ogImagePath,
  hasGradientBg,
}: ILayout) => {
  const { pathname } = useRoutes();
  const newPageTitle = title || pathname.replace('/', '');
  const APP_ROOT_URL = isBrowser ? window.location.origin : '';

  // Absolute page url
  const pageUrl = APP_ROOT_URL + path || pathname.replace('/', '') || '';
  // Absolute og image url
  const ogImageUrl = ogImagePath ? APP_ROOT_URL + ogImagePath : '';

  const head = (
    <NextHeadSeo
      title={noTitleTemplate ? newPageTitle : `${newPageTitle} - Nextjs`}
      canonical={pageUrl}
      description={description}
      robots={noindex ? 'noindex, nofollow' : undefined}
      og={getNotNullVal({
        title,
        description,
        url: pageUrl,
        image: ogImageUrl,
        type: 'article',
        siteName: 'Nextjs',
      })}
      twitter={{
        card: 'summary_large_image',
      }}
    />
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
      <NarBar />

      <div
        className={clx(
          'bg-white dark:bg-gray-600 sm:pt-[72px] pt-[60px] min-h-[100vh]',
          className,
          hasGradientBg &&
            !className.includes('bg-') &&
            'bg-gradient-to-r from-primary-100  to-secondary-50 dark:from-gray-600 dark:to-gray-800',
        )}
      >
        {children}
      </div>
    </>
  );
};
export default Layout;
