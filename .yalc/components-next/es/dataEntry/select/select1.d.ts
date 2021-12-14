import { SelectProps } from 'rc-select';
declare type ITheme = 'warning' | 'success' | 'error' | 'default';
export declare type ISelect = SelectProps & {
    theme?: ITheme;
};
declare const Select1: (props: ISelect) => JSX.Element;
export default Select1;
