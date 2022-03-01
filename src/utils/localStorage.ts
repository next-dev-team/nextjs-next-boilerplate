import { isBrowser } from 'components-next';

/**
 * usage: localStorageSsr?.getItem?.(key);
 */
export const localStorageSsr = isBrowser ? localStorage : ((() => {}) as undefined);

export const getItem = <T extends string>(key: T, isParseValue?: boolean) => {
  const getLs = localStorageSsr?.getItem?.(key);
  const result = getLs ? JSON.parse(getLs) : null;

  return isParseValue ? JSON.parse(result) : result;
};

export const removeItem = (key: string) => localStorageSsr?.removeItem?.(key);

export const setItem = (key: string, value: any) =>
  localStorageSsr?.setItem?.(key, JSON.stringify(value));
