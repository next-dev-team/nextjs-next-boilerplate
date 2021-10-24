import '@/assets/css/nprogress.css';
import { NarBar } from '@/components/module';
import withGA from 'next-ga';
import Router from 'next/router';
import NProgress from 'nprogress';
import React from 'react';
import 'tailwindcss/tailwind.css';
import('@/locales');

const GA_ID = '';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <NarBar {...router} />
      <Component {...pageProps} />
    </>
  );
}

export default withGA(GA_ID, Router)(MyApp);
