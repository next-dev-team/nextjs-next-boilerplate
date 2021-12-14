/// <reference types="react" />
import { InputNumberProps } from 'rc-input-number';
declare type ITheme = 'warning' | 'success' | 'error' | 'default';
export declare type IInput = {
    /**
     * container clx
     */
    className?: string;
    theme?: ITheme;
    label?: string;
    name?: string;
    errText?: string;
    requiredSign?: boolean;
    placeholder?: string;
    type?: InputNumberProps['type'];
} & InputNumberProps & React.HTMLProps<HTMLInputElement>;
declare const Input: (props: IInput) => JSX.Element;
export default Input;
