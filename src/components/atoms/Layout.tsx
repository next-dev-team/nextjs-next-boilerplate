import type { ReactNode } from 'react';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  pageTitle?: string;
};

const Layout = ({ children, pageTitle = 'This is the default title' }: Props) => (
  <div
    style={{
      maxWidth: 1140,
      flex: 1,
      margin:'auto',
      padding: '4rem'
    }}
  >
    <Head>
      <title>{pageTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
