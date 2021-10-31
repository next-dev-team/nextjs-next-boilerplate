import { en } from '../locales/resources';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: { translation: typeof en };
  }
}
