import React from 'react';
import withGA from 'next-ga';
import NProgress from 'nprogress';
import Router from 'next/router';
require('../styles/global.less');
 require('../locales');

const GA_ID = '';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}

export default withGA(GA_ID, Router)(MyApp);
