import { t } from '@/locales';
import withApollo from '@/utils/withApollo';
import * as React from 'react';

function Custom404() {
  return <h1>{t('siteTitle')}</h1>;
}
export default withApollo(Custom404);
