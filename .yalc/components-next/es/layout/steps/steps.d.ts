import { FormInstance } from 'rc-field-form';
import { ReactNode } from 'react';
import { IButton } from '../../display/button/button';
declare type IStepsData = {
    title: string;
    content: ReactNode;
};
export declare type IStep = {
    onSubmitForm?: (value: any) => Promise<any>;
    confirmContent: IStepsData;
    stepsData: IStepsData[];
    /**
     * get data load from server
     * return true to make it work
     */
    getLoading?: () => Promise<boolean>;
    resetAfterSubmit?: boolean;
    onNext?: (v?: any) => void;
    form?: FormInstance<any>;
    submitBtnProps?: IButton;
};
declare const Steps: (props: IStep) => JSX.Element;
export default Steps;
