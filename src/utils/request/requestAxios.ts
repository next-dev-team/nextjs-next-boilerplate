import { AxiosRequestConfig } from 'axios';
import { ASTNode, print } from 'graphql';
import { Required } from 'utility-types';
import { axiosInstance } from './axiosInstance';

type IConfig<T> =
  | Partial<
      {
        formData: any;
        isDebug: boolean;
        /**
         * get from graphql document
         */
        gqlDocument: ASTNode;
        /**
         * variables for graphql query
         */
        variables: Record<string, any>;
      } & AxiosRequestConfig<T>
    >
  | undefined;

/**
 * custom requestAxios function with built-in try catch and other feature of axios
 * @param url
 * @param config: default is Method = 'GET'
 * @param isDebug: default is false
 * @param formData: for POST request only usage the same as axios post data (formData , graphql query, etc)
 * @returns
 */
export async function requestAxios<T>(url = '', config?: IConfig<T>) {
  const axiosConfig = {
    method: 'GET',
    ...config,
  } as IConfig<T>;

  try {
    /**
     * Method POST
     */
    if (axiosConfig?.method === 'post' || axiosConfig?.method === 'POST') {
      const resPost = await axiosInstance?.post<T>(url, axiosConfig?.formData, axiosConfig);
      if (axiosConfig?.isDebug) {
        console.log('request success', resPost);
      }
      return resPost;
    }

    /**
     * default is Method GET
     */
    delete axiosConfig?.formData;
    const resGet = await axiosInstance?.get<T>(url, axiosConfig);
    if (axiosConfig?.isDebug) {
      console.log('request success', resGet?.data);
    }
    return resGet;
  } catch (error) {
    console.info('request error', error.response);
    return error as undefined;
  }
}

// ===================== Request Method =====================
/**
 * requestPost: request axios with Method POST
 * @param config
 * @returns
 */
export function requestPost<T>(config?: IConfig<T>) {
  return requestAxios<T>('', { method: 'POST', ...config });
}

/**
 * requestGraphql: request axios with graphql
 * @param config
 * @returns
 */

export function requestGraphql<T>(config: Required<IConfig<T>, 'gqlDocument'>) {
  return requestAxios<T>('', {
    method: 'POST',
    formData: {
      query: print(config?.gqlDocument),
      variables: config?.variables || {},
    },
    ...config,
  });
}
