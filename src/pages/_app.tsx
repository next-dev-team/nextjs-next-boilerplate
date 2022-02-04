import '@/assets/css/nprogress.css';
import { NarBar } from '@/components/module';
import useDarkMode from '@/hooks/useDarkMode';
import { isBrowser } from '@/utils';
import withApollo from '@/utils/withApollo';
import '@hookstate/devtools';
import { useNetwork } from 'ahooks';
import { NetworkState } from 'ahooks/lib/useNetwork';
import { FormProvider, notifications } from 'components-next';
import 'components-next/lib/assets/styles.css';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import React, { useEffect } from 'react';
import '../styles/global.css';
import('../locales');

NProgress.configure({ showSpinner: true });
Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
function MyApp({ Component, pageProps, router }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { online } = isBrowser ? useNetwork() : (false as NetworkState);

  useDarkMode();

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
    <FormProvider>
      <NarBar {...router} />
      <Component {...pageProps} />
    </FormProvider>
  );
}

export default withApollo({ ssr: true })(MyApp as any);
