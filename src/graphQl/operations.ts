import type * as Types from './schemas';

export type PostQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type PostQuery = { post: Types.Maybe<Pick<Types.Post, 'id' | 'title' | 'body'>> };
