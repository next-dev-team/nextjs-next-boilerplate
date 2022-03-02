import { useTranslation } from 'react-i18next';

export default function useI18n() {
  const { t } = useTranslation();

  return { t };
}
