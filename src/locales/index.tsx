import i18n, { StringMap, TOptionsBase } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, TFuncKey, useTranslation } from 'react-i18next';
import * as resources from './resources';

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

/**
 * translate i18n
 * @param key
 * @param options
 * @returns
 */
export const t = (key: TFuncKey, options?: TOptionsBase & StringMap) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t: tr } = useTranslation();
  return tr(key, options);
};

export function changeI18n(key: keyof typeof resources) {
  i18n.changeLanguage(key);
}
export default i18n;
