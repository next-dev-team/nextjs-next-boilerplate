import clsx from 'classnames';
import { overrideTailwindClasses } from 'tailwind-override';
import { _isEmpty, _pickBy } from './lodash';
/**
 * override class using clsx
 * @param rest
 * @returns
 */

export const clx = (...rest) => {
  return overrideTailwindClasses(clsx(rest));
};
export const clxx = (...rest) => {
  return overrideTailwindClasses(clsx(rest));
}; //  the class tw suggestion only one time per file so I need to create it n time

export const clx1 = clx;
export const clx2 = clx;
export const clx3 = clx;
export const cls = (...rest) => {
  return clsx(rest);
};
export const cl = (...rest) => {
  return clsx(rest);
};
/**
 * get suggestion tw class in vs-code setting.json
 * @param v
 * @returns
 */

export const tw = v => {
  return v;
};
export const tw1 = tw;
export const tw2 = tw;
export const tw3 = tw;
export function getStringVal(v) {
  return _isEmpty(v) ? null : v;
}
export function getNotNullVal(values) {
  // @ts-ignore
  return _pickBy(values || {}, v => v !== null && v !== undefined && v !== ' ' && v !== 'null' && v !== '');
}