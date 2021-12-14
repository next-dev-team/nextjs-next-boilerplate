import { Panel } from 'rc-collapse';
import { CollapseProps } from 'rc-collapse/es/interface';
import { ReactNode } from 'react';
export { Panel };
export declare type ICollapse = CollapseProps & {
    children: ReactNode;
};
declare const Collapse: (props: ICollapse) => JSX.Element;
export default Collapse;
