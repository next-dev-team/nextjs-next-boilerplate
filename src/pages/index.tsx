import Layout from '@/components/atoms/Layout';
import { usePostQuery } from '@/graphQl/hooks';
import { changeI18n } from '@/locales';
import withApollo from '@/utils/withApollo';
import { getDataFromTree } from '@apollo/client/react/ssr';
import React from 'react';
import { useTranslation } from 'react-i18next';

const IndexPage = () => {
  const { data } = usePostQuery({
    variables: { id: '1' },
  });

  const { t } = useTranslation();

  console.log('data', data);

  return (
    <Layout pageTitle="Home | Next.js + TypeScript Example">
      <h1>{t('siteTitle') + `👋`}</h1>

      <button onClick={() => changeI18n('en')}>Change I18n En</button>
      <button onClick={() => changeI18n('km')}>Change I18n Km</button>
    </Layout>
  );
};

export default withApollo(IndexPage, { getDataFromTree });
