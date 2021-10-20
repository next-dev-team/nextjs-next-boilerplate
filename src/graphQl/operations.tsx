import * as Types from './schemas';

export type PostQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type PostQuery = {
  __typename?: 'Query';
  post?:
    | {
        __typename?: 'Post';
        id?: string | null | undefined;
        title?: string | null | undefined;
        body?: string | null | undefined;
      }
    | null
    | undefined;
};
