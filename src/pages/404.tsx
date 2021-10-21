import * as React from 'react';
import withApollo from '@/utils/withApollo';
import { useTranslation } from 'react-i18next';

function Custom404() {
  const { t } = useTranslation();

  return <h1>{t('')}</h1>;
}
export default withApollo(Custom404);
