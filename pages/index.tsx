import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { usePostLazyQuery, usePostQuery } from "../graphQl/hooks";
import withApollo from "../lib/withApollo";
import { getDataFromTree } from '@apollo/client/react/ssr';

const IndexPage = () => {
  const {data} = usePostQuery({
    variables: { id: "1" },
  });



  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default withApollo(IndexPage, { getDataFromTree });
