import type { resources } from '@/locales';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: typeof resources["en"];
  }
}
