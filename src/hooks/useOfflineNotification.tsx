import { useNetwork } from 'ahooks';
import { isBrowser, notifications } from 'components-next/lib';
import { useEffect } from 'react';

export default function useOfflineNotification() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { online } = isBrowser ? useNetwork() : ({} as undefined);

  useEffect(() => {
    if (!online) {
      notifications.error({
        key: 'offline',
        message: 'Your are offline!',
        duration: 10000,
      });
    } else {
      notifications.close('offline');
    }
  }, [online]);
  console.log('online', online);

  return {};
}
