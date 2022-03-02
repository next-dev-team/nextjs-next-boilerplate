import { PostDocument } from '@/graphQl/hooks';
import { PostQuery, PostQueryVariables } from '@/graphQl/operations';
import { requestGet, requestGraphql } from '@/utils';

const resourcePath = 'https://raw.githubusercontent.com/avkonst/hookstate/master/CNAME';

export const getAsyncNameService = async () => {
  const re = await requestGet<string>(resourcePath);
  return re?.data;
};

export const getAsyncNameGraph = async (variables: PostQueryVariables) => {
  const res = await requestGraphql<PostQuery>({
    gqlDocument: PostDocument,
    variables,
  });
  return res?.data;
};
