import { CREDENTIAL } from '@/constants';
import axios from 'axios';

/**
 *
 */
const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: CREDENTIAL.GRAPHQL_API_ENDPOINT,
  method: 'POST',
});

instance.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
      // Authorization: `Bearer ${apiUrl.token}`,
    };

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // console.log('response', response);

    // refresh token for graphQl
    // if (
    //   response?.status === 200 &&
    //   response?.data?.errors?.[0]?.extensions?.response?.statusCode === 401
    // ) {
    //   return getAuthTokenApi().then((token) => {
    //     if (response?.config?.headers && token?.data?.authToken) {
    //       response.config.headers['x-api-key'] = token?.data?.authToken;
    //     }
    //     return axios.request(response.config);
    //   });
    // }

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    // refresh token for rest
    // if (
    //   error?.status === 200 &&
    //   error?.data?.errors?.[0]?.extensions?.response?.statusCode === 401
    // ) {
    //   return getAuthTokenApi().then((token) => {
    //     if (error?.config?.headers && token?.data?.authToken) {
    //       error.config.headers['x-api-key'] = token?.data?.authToken;
    //     }
    //     return axios.request(error.config);
    //   });
    // }
    return Promise.reject(error);
  },
);

export { instance as requestAxios };
