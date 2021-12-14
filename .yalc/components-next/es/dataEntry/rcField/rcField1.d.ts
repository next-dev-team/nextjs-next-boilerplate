import { FieldProps } from 'rc-field-form/lib/Field';
import { HTMLInputTypeAttribute } from 'react';
import { IInput } from '..';
import { ISelect } from '../select/select1';
import { SwitchProps } from '../switch/switch';
import { ITextArea } from '../textArea/textArea';
declare type IVarious = 'input' | 'select' | 'textArea' | 'switch';
export declare type IField = {
    /**
     * container clx
     */
    className?: string;
    various?: IVarious;
    label?: string;
    themeColor?: IInput['theme'];
    name?: any;
    type?: HTMLInputTypeAttribute;
    errText?: string;
    requiredSign?: boolean;
    placeholder?: string;
    selectProps?: ISelect;
    textAreaProps?: ITextArea;
    /**
     * select option
     */
    options?: ISelect['options'];
    inputProps?: React.HTMLProps<HTMLInputElement>;
    switchProps?: SwitchProps;
    uploadValue?: any;
} & FieldProps;
declare const RcField: (props: IField) => JSX.Element;
export default RcField;
