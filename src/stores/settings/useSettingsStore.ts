import i18n, { I18nKey, resources, StringMap, TOptionsBase } from '@/locales';
import { Persistence } from '@/plugins';
import { createState, useState } from '@hookstate/core';
import { TFuncKey, useTranslation } from 'react-i18next';

type IInitStore = {
  colorScheme: 'dark' | 'light' | 'system';
};

const initStore = {
  colorScheme: 'light' as IInitStore['colorScheme'],
  i18nItem: Object.keys(resources).map((i) => i),
  currentLocale: 'en' as I18nKey,
};

const store = createState(initStore);

export function useSettingsStore() {
  /**
   * with hookstate
   */
  const state = useState(store);

  const setColorScheme = (colorScheme: IInitStore['colorScheme'] = 'light') => {
    const theme = {
      dark: 'dark',
      light: 'light',
      system: 'system',
    } as Record<IInitStore['colorScheme'], IInitStore['colorScheme']>;
    return state.colorScheme.set(theme?.[colorScheme]);
  };

  const { t: tr } = useTranslation();

  const t = (key: TFuncKey, options?: TOptionsBase & StringMap) => {
    return tr(key, options);
  };

  function changeI18n(key: I18nKey) {
    i18n.changeLanguage(key);
  }

  /**
   * persist
   */
  state.attach(Persistence('useSettingsStore', ['colorScheme'], state.value));

  return {
    /**
     * hookstate part
     */
    get colorScheme() {
      return state.colorScheme.get();
    },
    get currentLocale() {
      return state.currentLocale.get();
    },
    get i18nItem() {
      return state.i18nItem.get();
    },
    setColorScheme,
    useTranslation,
    t,
    changeI18n,
  } as const;
}
