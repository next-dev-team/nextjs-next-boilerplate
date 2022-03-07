import '@/assets/css/nprogress.css';
import { NarBar } from '@/components/module';
import { useOfflineNotification } from '@/hooks';
import useDarkMode from '@/hooks/useDarkMode';
import withApollo from '@/utils/withApollo';
import { FormProvider, isDev } from 'components-next/lib';
import 'components-next/lib/assets/styles.css';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import React from 'react';
import type { InspectParams } from 'react-dev-inspector';
import { Inspector } from 'react-dev-inspector';
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
    <Inspector
      disableLaunchEditor={!isDev}
      keys={['control', 'shift', 'c']}
      onClickElement={(inspect: InspectParams) => {
        console.debug(inspect);
        if (isDev || !inspect.codeInfo?.relativePath) {
          return null;
        }
        return null;
      }}
    >
      <FormProvider>
        <NarBar {...router} />
        <Component {...pageProps} />
      </FormProvider>
    </Inspector>
  );
}

export default withApollo({ ssr: true })(MyApp as any);
