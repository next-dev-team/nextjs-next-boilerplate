import i18n, { StringMap, TOptionsBase } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, TFuncKey } from 'react-i18next';
import * as resources from './resources';

type I18nKey = keyof typeof resources;

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    resources: {
      ...Object.entries(resources).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: {
            translation: value,
          },
        }),
        {},
      ),
    },
    debug: false,
    fallbackLng: 'en',
    // have a common namespace used around the full app
    interpolation: {
      escapeValue: false,
    },
    defaultNS: 'translation',
    ns: ['translation'],
  });

export { resources };
export type { StringMap, TOptionsBase, TFuncKey, I18nKey };

export default i18n;
