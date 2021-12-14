import { UploadProps } from 'rc-upload';
export declare type IUpload = UploadProps & {
    imgPersist?: string;
};
export declare function file2Obj(file: any): any;
declare const DragUpload: (props: IUpload) => JSX.Element;
export default DragUpload;
