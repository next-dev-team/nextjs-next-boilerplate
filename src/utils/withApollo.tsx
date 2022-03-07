import { CREDENTIAL } from '@/constants';
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { isBrowser, isDev, notifications } from 'components-next';
import { withApollo } from 'next-apollo';

export const cache: InMemoryCache = new InMemoryCache({ addTypename: false });

const httpLink = new HttpLink({
  uri: CREDENTIAL.GRAPHQL_API_ENDPOINT,
  headers: {
    // Authorization: `Bearer qq`,
  },
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      // 'x-api-key': 'ss',
      // Authorization: `Bearer sss`,
    },
  };
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    // eslint-disable-next-line consistent-return
    onError(({ graphQLErrors, networkError }) => {
      const err =
        graphQLErrors &&
        (graphQLErrors?.[0]?.extensions
          ?.response as unknown as typeof graphQLErrors[0]['extensions'] & {
          message: string;
          error: string;
          statusCode: number;
        });

      if (isBrowser) {
        notifications.error({
          message: err?.error,
          description: err?.message,
        });
      }

      if (networkError) {
        return console.log(`[Network error]: ${networkError}`);
      }
    }),
    authLink.concat(httpLink),
  ]),
  connectToDevTools: isDev,
  defaultOptions: {
    mutate: { errorPolicy: 'all' },
    watchQuery: { errorPolicy: 'all' },
  },
});

export default withApollo(client);
