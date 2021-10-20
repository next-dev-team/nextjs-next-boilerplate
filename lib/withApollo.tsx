import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
  split,
} from "@apollo/client";
import React from "react";
import { getMainDefinition } from "@apollo/client/utilities";
import nextWithApollo from "next-with-apollo";
import { WebSocketLink } from "@apollo/client/link/ws";
import { nanoid } from "nanoid";

const withApollo = nextWithApollo(
  ({ initialState, headers, ...rest }) => {
    const httpLink = new HttpLink({
      uri: "https://graphqlzero.almansi.me/api",
      headers: {
        ...headers,
      },
      credentials: "include",
    });

    return new ApolloClient({
      ssrMode: true,
      link: httpLink,
      cache: new InMemoryCache().restore(initialState || {}),
      // A hack to get ctx oin the page's props on the initial render
      // @ts-ignore
      connectToDevTools: true,
      //@ts-ignore
      defaultOptions: { ...rest },
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} {...props.apollo.defaultOptions.ctx} />
        </ApolloProvider>
      );
    },
  }
);

export const withApolloWithSubscriptions = nextWithApollo(
  ({ initialState, headers, ...rest }) => {
    const clientId = nanoid();

    const wsLink = true
      ? new WebSocketLink({
          uri: "",
          options: {
            reconnect: true,
            connectionParams: {
              clientId,
            },
          },
        })
      : null;

    const httpLink = new HttpLink({
      uri: "https://graphqlzero.almansi.me/api",
      headers: {
        ...headers,
      },
      credentials: "include",
    });

    /*
     * Only create a split link on the browser
     * The server can not use websockets and is therefore
     * always a http link
     */
    const splitLink = true
      ? split(
          ({ query }) => {
            const definition = getMainDefinition(query);
            return (
              definition.kind === "OperationDefinition" &&
              definition.operation === "subscription"
            );
          },
          wsLink,
          httpLink
        )
      : httpLink;

    return new ApolloClient({
      ssrMode: true,
      link: splitLink,
      cache: new InMemoryCache().restore(initialState || {}),
      // A hack to get ctx oin the page's props on the initial render
      // @ts-ignore
      defaultOptions: { ...rest, clientId },
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page
            {...props}
            {...props.apollo.defaultOptions.ctx}
            clientId={props.apollo.defaultOptions.clientId}
          />
        </ApolloProvider>
      );
    },
  }
);

export default withApollo;
