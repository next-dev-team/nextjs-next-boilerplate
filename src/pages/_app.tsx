import '@/assets/css/nprogress.css';
import { NarBar } from '@/components/module';
import { isBrowser } from '@/utils';
import withApollo from '@/utils/withApollo';
import '@hookstate/devtools';
import { useNetwork } from 'ahooks';
import { NetworkState } from 'ahooks/lib/useNetwork';
import 'components-next/es/assets/styles.css';
import { notifications } from 'components-next/lib';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import React, { useEffect } from 'react';
import '../styles/global.css';
import('../locales');
function MyApp({ Component, pageProps, router }) {
  const { online } = isBrowser ? useNetwork() : (false as NetworkState);
  NProgress.configure({ showSpinner: true });
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());

  useEffect(() => {
    if (!online) {
      notifications.error({
        key: 'offline',
        message: 'Your are offline!',
        duration: 10000,
      });
    } else {
      notifications.close('offline');
    }
  }, [!online]);

  return (
    <>
      <NarBar {...router} />
      <Component {...pageProps} />
    </>
  );
}

export default withApollo({ ssr: true })(MyApp as any);
