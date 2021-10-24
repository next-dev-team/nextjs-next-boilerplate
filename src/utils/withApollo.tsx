import { CREDENTIAL } from '@/constants';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import nextWithApollo from 'next-with-apollo';
import { Router } from 'next/router';

const withApollo = nextWithApollo(
  ({ initialState, headers }) => {
    return new ApolloClient({
      ssrMode: typeof window === 'undefined',
      link: new HttpLink({
        uri: CREDENTIAL.GRAPHQL_API_ENDPOINT,
      }),
      headers: {
        ...(headers as Record<string, string>),
      },
      cache: new InMemoryCache().restore(initialState || {}),
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} {...Router} />
        </ApolloProvider>
      );
    },
  },
);

export default withApollo;
