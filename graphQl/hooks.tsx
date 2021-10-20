import type * as Types from './operations';

import gql from 'graphql-tag';
import type * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export const PostDocument = gql`
    query post($id: ID!) {
  post(id: $id) {
    id
    title
    body
  }
}
    `;
export function usePostQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.PostQuery, Types.PostQueryVariables>) {
        return ApolloReactHooks.useQuery<Types.PostQuery, Types.PostQueryVariables>(PostDocument, baseOptions);
      }
export function usePostLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.PostQuery, Types.PostQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Types.PostQuery, Types.PostQueryVariables>(PostDocument, baseOptions);
        }
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export type PostQueryResult = ApolloReactCommon.QueryResult<Types.PostQuery, Types.PostQueryVariables>;