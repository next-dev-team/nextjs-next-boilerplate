import React from 'react';
import withGA from 'next-ga';
import NProgress from 'nprogress';
import { get } from 'lodash';
import Router from 'next/router';
require("../styles/global.less");

const GA_ID =''


NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const ua = get(ctx, 'req.headers[user-agent]', '');
 
  const initialProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  const pageProps = {
    query: get(ctx, 'query', null),
    userContext: null,
    ua,
    ...initialProps,
  };

  return { pageProps };
};

export default withGA(GA_ID, Router)(MyApp);
