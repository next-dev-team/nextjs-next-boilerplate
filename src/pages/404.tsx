import * as React from 'react';
import withApollo from '@/utils/withApollo';
import useTranslation from '@/locales/useTranslation';

function Custom404() {
  const { t } = useTranslation();

  return <h1>{t('siteTitle')}</h1>;
}
export default withApollo(Custom404);
