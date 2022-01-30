import { createStore, usePersistStore } from '@/hooks';
import i18n, { I18nKey, resources } from '@/locales';
import { useTranslation } from 'react-i18next';

type IInitStore = {
  colorScheme: 'dark' | 'light' | 'system';
};

const initStore = {
  colorScheme: 'light',
  i18nItem: Object.keys(resources).map((i) => i),
  currentLocale: 'en',
};

type IStore = IInitStore & typeof initStore;
type IStoreKey = keyof IStore;

const store = createStore(initStore);

export function useSettingsStore() {
  const { state } = usePersistStore<IStoreKey, IStore>({
    key: 'useSettingsStore',
    store,
    whitelist: ['colorScheme', 'currentLocale'],
  });

  const setColorScheme = (colorScheme: IInitStore['colorScheme'] = 'light') => {
    const theme = {
      dark: 'dark',
      light: 'light',
      system: 'system',
    } as Record<IInitStore['colorScheme'], IInitStore['colorScheme']>;

    state.colorScheme.set(theme?.[colorScheme]);
  };

  const changeI18n = (key: I18nKey) => {
    state.currentLocale.set(key);
    i18n.changeLanguage(key);
  };

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
    t: useTranslation().t,
    changeI18n,
  } as const;
}

export type ISettingStore = Partial<ReturnType<typeof useSettingsStore>>;
