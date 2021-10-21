import React from 'react';
import Layout from '@/components/atoms/Layout';
import { usePostQuery } from '@/graphQl/hooks';
import withApollo from '@/utils/withApollo';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { Button, Space } from 'antd';
import { changeI18n } from '@/locales';
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
      
      <Space>
        <Button type="primary" onClick={() => changeI18n('en')}>
          Change I18n En
        </Button>
        <Button danger onClick={() => changeI18n('km')}>
          Change I18n Km
        </Button>
      </Space>
    </Layout>
  );
};

export default withApollo(IndexPage, { getDataFromTree });
