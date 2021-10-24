# How to use axios with graph document

```tsx
import { print } from 'graphql';
import { PostDocument } from '@/graphQl/hooks';

const getPost = async () => {
  const res = requestAxios.post('', {
    query: print(PostDocument),
    variables: { id: '1' },
  });
  return res;
};
```
