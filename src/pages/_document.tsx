import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
