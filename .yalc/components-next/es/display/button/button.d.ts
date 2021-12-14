import { ButtonHTMLAttributes } from 'react';
declare type IVariant = 'outline' | 'ghost' | 'disabled' | 'primary';
declare type IType = 'primary' | 'warning' | 'success' | 'error' | 'dark' | 'light';
export declare type IButton = {
    /**
     * container clx
     */
    ngClass?: string;
    variant?: IVariant;
    title?: string;
    color?: IType;
} & Omit<ButtonHTMLAttributes<any>, 'color'>;
declare const Button: (props: IButton) => JSX.Element;
export default Button;
