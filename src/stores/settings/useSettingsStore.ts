import { getRouteName, OPTIONS, ROUTE } from '@/constants';
import { createStore, useGlobalStore } from '@/hooks';
import i18n, { I18nKey, resources } from '@/locales';
import { useMemoizedFn } from 'ahooks';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

type IInitStore = {
  colorScheme: 'dark' | 'light' | 'system';
};

const initStore = {
  colorScheme: 'light',
  i18nItem: Object.keys(resources).map((i) => i),
  currentLocale: 'en',
  i18nOption: OPTIONS.i18nOption,
};

type IStore = IInitStore & typeof initStore;
type IStoreKey = keyof IStore;

const store = createStore(initStore);

export function useSettingsStore() {
  const { state } = useGlobalStore<IStoreKey, IStore>({
    key: 'useSettingsStore',
    store,
    whitelist: ['colorScheme', 'currentLocale', 'i18nOption'],
  });
  const t = useTranslation().t;
  const isDarkMode = state.colorScheme.get() === 'dark';
  const isLightMode = state.colorScheme.get() === 'light';

  const setColorScheme = (colorScheme: IInitStore['colorScheme'] = 'light') => {
    const theme = {
      dark: 'dark',
      light: 'light',
      system: 'system',
    } as Record<IInitStore['colorScheme'], IInitStore['colorScheme']>;

    state.colorScheme.set(theme?.[colorScheme]);
  };
  const toggleDark = useMemoizedFn(() => {
    state.colorScheme.set(isDarkMode ? 'light' : 'dark');
  });

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
        name: getRouteName('about'),
        path: ROUTE.about,
      },
    ],
    [t],
  );

  const setI18nOption = (key: string) => {
    const findUpdateInd = state.i18nOption.findIndex((lc) => lc.value.value === key);
    const getToggleVal = state.i18nOption.get().map((i, k) => {
      return { ...i, isActive: k === findUpdateInd };
    });
    state.i18nOption.set(getToggleVal);
  };

  return {
    toggleDark,
    isDarkMode,
    isLightMode,
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
