import type { TranKey } from '@/locales/useTranslation';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: TranKey;
  }
}
