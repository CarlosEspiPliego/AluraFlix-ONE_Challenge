import { useFormik } from "formik";
import * as Yup from "yup";

export const useFormikForm = (initialValues = {}, validationSchema = {}, onSubmit) => {
    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object(validationSchema),
        onSubmit
    });

    return formik;
}