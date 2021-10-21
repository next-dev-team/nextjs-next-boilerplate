import React from 'react';
import  { Head, Main, NextScript, Html } from 'next/document';

function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" type="text/css" href="/css/nprogress.css" />
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
