import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import en from './en/translation.json';
import km from './km/translation.json';

export const resources = {
  en: {
    translation: en,
  },
  km: {
    translation: km,
  },
} as const;

i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    resources,
    debug: false,
    fallbackLng: 'en',
    // have a common namespace used around the full app
    ns: ['translation'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
    react: { useSuspense: false }, //this line
  });

export type TranKey = typeof en;
type CustomTypeOptions = {
  resources: TranKey;
};

export function t(key: keyof CustomTypeOptions['resources']) {
  return i18n.t(key);
}
export function changeI18n(key: keyof typeof resources) {
  i18n.changeLanguage(key);
}

export default i18n;
