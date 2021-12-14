import { FormInstance } from 'components-next';
declare const useFormUtil: (props: {
    children: any;
    form: FormInstance<any>;
}) => {
    onClickFormSubmit: () => void;
};
export default useFormUtil;
