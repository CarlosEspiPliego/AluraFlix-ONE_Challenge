import { useFormik } from "formik";
import * as Yup from "yup";

export const useFormikForm = (initialValues = {}, validationSchema = {}, onSubmit) => {
    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object().shape(validationSchema),
        onSubmit
    });

    return formik;
}