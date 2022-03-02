import { useSettingsStore } from '@/stores';
import { Button } from 'components-next/lib';
import { upperCase } from 'lodash';

export const useI18nDemo = () => {
  const { currentLocale, changeI18n, t } = useSettingsStore();

  return {
    title: 'Locale with i18nNext',
    content: (
      <div className="mt-20 text-center flex flex-col justify-center items-center">
        <h1 className="text-3xl font-extrabold text-black  sm:text-4xl text-center mb-6 mt-6 leading-10">
          {t('settings.currentLanguage', { locale: upperCase(currentLocale) })}
        </h1>
        <h1 className="text-3xl font-extrabold text-black  sm:text-4xl text-center mb-6 mt-6 leading-10">
          {t('example.helloUser')}
        </h1>
        <div className="flex items-center gap-4 mt-3">
          <Button
            variant={currentLocale === 'en' ? 'primary' : 'outline'}
            onClick={() => changeI18n('en')}
          >
            En
          </Button>
          <Button
            variant={currentLocale === 'km' ? 'primary' : 'outline'}
            onClick={() => changeI18n('km')}
          >
            Km
          </Button>
        </div>
      </div>
    ),
  };
};
