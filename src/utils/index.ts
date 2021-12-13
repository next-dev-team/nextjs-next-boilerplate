export * from 'components-next/lib/utils';
export * from './localStorage';

export const isBrowser = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);
