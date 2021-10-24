import withGA from 'next-ga';
import Router from 'next/router';
import NProgress from 'nprogress';
import React from 'react';
import 'tailwindcss/tailwind.css';
import '/css/nprogress.css';

require('../locales');

const GA_ID = '';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withGA(GA_ID, Router)(MyApp);
