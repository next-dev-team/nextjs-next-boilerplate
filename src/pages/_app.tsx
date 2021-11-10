import '@/assets/css/nprogress.css';
import { NarBar } from '@/components/module';
import withApollo from '@/utils/withApollo';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import React from 'react';
import 'tailwindcss/tailwind.css';
import('../locales');

function MyApp({ Component, pageProps, router }) {
  NProgress.configure({ showSpinner: true });
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());
  return (
    <>
      <NarBar {...router} />
      <Component {...pageProps} />
    </>
  );
}

export default withApollo(MyApp, { getDataFromTree });
