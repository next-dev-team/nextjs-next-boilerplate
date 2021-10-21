import withApollo from '@/utils/withApollo';
import NextErrorComponent from 'next/error';

const Error = ({ statusCode, hasGetInitialPropsRun, err }) => {
  if (!hasGetInitialPropsRun && err) {
    // getInitialProps is not called in case of
    // https://github.com/vercel/next.js/issues/8592. As a workaround, we pass
    // err via _app.js so it can be captured
  }

  return <NextErrorComponent statusCode={statusCode} />;
};

Error.getInitialProps = async ({ res, err,  }) => {
  //@ts-ignore
  const errorInitialProps = await NextErrorComponent.getInitialProps({
    res,
    err,
  });

  return errorInitialProps;
};

export default withApollo(Error as any);
