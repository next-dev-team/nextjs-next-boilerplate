import type { ColProps } from 'antd';
import type { RowProps } from 'antd/lib/grid/row';
import type { ReactNode } from 'react';
import '../assets/styles.css';
export declare type IDemoLayout = {
    data?: {
        title: string;
        component: ReactNode;
        isFullView?: boolean;
        /**
         * antd col 1-24
         */
        span?: '12' | '24';
    }[];
    span?: number;
    children?: ReactNode;
    gutter?: RowProps['gutter'];
    colProps?: ColProps;
    isSmallSpan?: boolean;
};
export declare const DemoLayout: (props: IDemoLayout) => JSX.Element;
