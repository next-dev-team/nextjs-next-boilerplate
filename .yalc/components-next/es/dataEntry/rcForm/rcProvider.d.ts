import { FormProps } from 'rc-field-form';
import { ReactNode } from 'react';
export declare type IRcFormProvider = FormProps & {
    /**
     * container clx
     */
    className?: string;
    children: ReactNode;
    isDebug?: boolean;
};
declare const _default: (props: IRcFormProvider) => JSX.Element;
export default _default;
