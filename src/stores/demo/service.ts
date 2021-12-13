import { PostDocument } from '@/graphQl/hooks';
import { PostQueryVariables } from '@/graphQl/operations';
import { requestAxios } from '@/utils/requestAxios';
import { print } from 'graphql';

const resourcePath = 'https://raw.githubusercontent.com/avkonst/hookstate/master/CNAME';

export const getAsyncNameService = async () => {
  const re = await requestAxios.get(resourcePath);
  return re.data as string;
};

export const getAsyncNameGraph = async (variables: PostQueryVariables) => {
  try {
    return (
      await requestAxios.post('', {
        query: print(PostDocument),
        variables,
      })
    )?.data;
  } catch (error) {
    console.error('getAsyncNameGraph', getAsyncNameGraph);
  }
};
