import '@/assets/css/nprogress.css';
import { NarBar } from '@/components/module';
import { useOfflineNotification } from '@/hooks';
import useDarkMode from '@/hooks/useDarkMode';
import withApollo from '@/utils/withApollo';
import { FormProvider } from 'components-next';
import 'components-next/lib/assets/styles.css';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import React from 'react';
import '../styles/global.css';
import('../locales');

NProgress.configure({ showSpinner: true });
Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
function MyApp({ Component, pageProps, router }) {
  useDarkMode();
  useOfflineNotification();

  return (
    <FormProvider>
      <NarBar {...router} />
      <Component {...pageProps} />
    </FormProvider>
  );
}

export default withApollo({ ssr: true })(MyApp as any);
