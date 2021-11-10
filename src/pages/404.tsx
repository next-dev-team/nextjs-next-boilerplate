import * as React from 'react';
import { useTranslation } from 'react-i18next';

function Custom404() {
  const { t } = useTranslation();
  return <h1>{t('actions.continue')}</h1>;
}
export default Custom404;
