import { NoticeContent as RCNoticeContent, NotificationInstance as RCNotificationInstance } from 'rc-notification/lib/Notification';
import { ArgsProps, NotificationInstance } from './notification1';
export default function createUseNotification(getNotificationInstance: (args: ArgsProps, callback: (info: {
    prefixCls: string;
    instance: RCNotificationInstance;
}) => void) => void, getRCNoticeProps: (args: ArgsProps, prefixCls: string) => RCNoticeContent): () => [NotificationInstance];
