import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

function MyDocument() {
  return (
    <Html lang="en" prefix="og:http://ogp.me/ns#">
      <title>Nextjs Next Boilerplate</title>
      <Head>
        <meta property="og:type" content="website" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
