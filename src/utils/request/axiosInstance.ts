import { CREDENTIAL } from '@/constants';
import axios from 'axios';

/**
 *
 */
export const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: CREDENTIAL.GRAPHQL_API_ENDPOINT,
  method: 'POST',
});

axiosInstance.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
      //todo: add token and other header
      // 'x-api-key': getToken()?.refreshToken as string,
      // Authorization: `Bearer ${getToken()?.token}`,
    };

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // console.log('response', response);

    //todo: refresh token
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

    return Promise.reject(error);
  },
);
