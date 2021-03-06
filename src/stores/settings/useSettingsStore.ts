import { getRouteName, OPTIONS, ROUTE } from '@/constants';
import { useGlobalStore, useI18n, wrapGlobalStore } from '@/hooks';
import i18n, { I18nKey, resources } from '@/locales';
import { createState } from '@hookstate/core';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

type IInitStore = {
  colorScheme: 'dark' | 'light' | 'system';
  appState: 'offline' | 'online';
  currentLocale: I18nKey;
};

const initWithoutType = {
  i18nItem: Object.keys(resources),
  i18nOption: OPTIONS.i18nOption,
};

const initWithType: IInitStore = {
  colorScheme: 'light',
  currentLocale: 'en',
  appState: 'online',
};

const initStore = {
  ...initWithoutType,
  ...initWithType,
};

type IStore = IInitStore & typeof initStore;
type IStoreKey = keyof IStore;

const store = createState(initStore as IStore);

const wrapStore = wrapGlobalStore<IStoreKey, IStore>({
  key: 'useSettingsStore',
  store,
  whitelist: ['colorScheme', 'currentLocale', 'i18nOption'],
});

export function useSettingsStore() {
  const { state } = useGlobalStore(wrapStore);
  const { t } = useI18n();

  const setColorScheme = (colorScheme: IInitStore['colorScheme'] = 'light') => {
    const theme = {
      dark: 'dark',
      light: 'light',
      system: 'system',
    } as Record<IInitStore['colorScheme'], IInitStore['colorScheme']>;

    state.colorScheme.set(theme?.[colorScheme]);
  };
  const toggleDark = () => {
    state.colorScheme.set((p) => (p === 'dark' ? 'light' : 'dark'));
  };

  const changeI18n = (key: I18nKey) => {
    state.currentLocale.set(key);
    i18n.changeLanguage(key);
  };

  const menu = useMemo(
    () => [
      {
        name: t('menu.home'),
        path: ROUTE.home,
      },
      {
        name: getRouteName('detail'),
        path: ROUTE.detail,
      },
    ],
    [t],
  );

  const setI18nOption = (key: I18nKey) => {
    const findUpdateInd = state.i18nOption.findIndex((lc) => lc.value.value === key);
    const getToggleVal = state.i18nOption.get().map((i, k) => {
      return { ...i, isActive: k === findUpdateInd };
    });
    state.i18nOption.set(getToggleVal);
  };

  return {
    toggleDark,

    get isDarkMode() {
      return state.colorScheme.get() === 'dark';
    },
    get isLightMode() {
      return state.colorScheme.get() === 'dark';
    },
    setI18nOption,
    menu,
    /**
     * hookstate part
     */
    get colorScheme() {
      return state.colorScheme.get();
    },
    get currentLocale() {
      return state.currentLocale.get();
    },
    get i18nOption() {
      return state.i18nOption.get();
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

export type ISettingStore = Partial<ReturnType<typeof useSettingsStore>>;
