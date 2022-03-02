/**
 * warning: the same file directory don't import from this file it will not work properly
 * ex: file a.ts
 * import { request } from './b' not import { request } from 'index.ts'
 */

export { axiosInstance } from './axiosInstance';
export { requestAxios as requestGet, requestGraphql, requestPost } from './requestAxios';
