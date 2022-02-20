import { I18nKey } from '@/locales';

export const OPTIONS = {
  i18nOption: [
    { label: 'ខ្មែរ', value: 'km', isActive: false },
    { label: 'English', value: 'en', isActive: true },
  ] as { label: string; value: I18nKey; isActive: boolean }[],
};
