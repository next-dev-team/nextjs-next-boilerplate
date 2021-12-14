import { FormProps, useForm } from 'rc-field-form';
import React from 'react';
export declare type IInput = FormProps & {
    /**
     * container clx
     */
    className?: string;
    /**
     * ReactNode
     */
    children: any;
    hasSubmitBtn?: boolean;
};
declare const _default: ((props: IInput) => JSX.Element) & {
    List: React.FunctionComponent<import("rc-field-form/es/List").ListProps>;
    useForm: typeof useForm;
};
export default _default;
