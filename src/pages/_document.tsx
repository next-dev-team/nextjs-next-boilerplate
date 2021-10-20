import React from 'react';
import Document, { Head, Main, NextScript, Html } from 'next/document';

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

MyDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <style dangerouslySetInnerHTML={{ __html: null }} />
      </>
    ),
  };
};


export default MyDocument;
