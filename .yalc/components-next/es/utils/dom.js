import { isBrowser } from './';
export const goToTop = () => {
  const body = document.querySelector('#root');

  if (isBrowser) {
    body === null || body === void 0 ? void 0 : body.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};