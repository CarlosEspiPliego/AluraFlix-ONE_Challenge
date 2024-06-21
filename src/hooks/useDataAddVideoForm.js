import * as Yup from 'yup';

export const useDataAddVideoForm = () => {
    const initialValues = {
        title: '',
        category: '',
        imageUrl: '',
        videoUrl: '',
        description: '',
    }

    const validationSchema = {
        title: Yup.string().required('El titulo es requerido')
            .min(5, 'El titulo debe tener al menos 5 caracteres'),
        category: Yup.string().required('La categoria es requerida'),
        imageUrl: Yup.string().required('La url de la imagen es requerida')
            .matches(/(http(s?):)/, 'La url de la imagen no es valida')
            .url('La url de la imagen no es valida'),
        videoUrl: Yup.string().required('La url del video es requerida')
            .matches(/(http(s?):)/, 'La url de la imagen no es valida')
            .url('La url de la imagen no es valida'),
        description: Yup.string().required('La descripcion es requerida')
            .min(10, 'La descripcion debe tener al menos 10 caracteres')
    };

    const validationSchemaEditForm = {
        title: Yup.string().required('El titulo es requerido')
            .min(5, 'El titulo debe tener al menos 5 caracteres'),
        category: Yup.string().required('La categoria es requerida'),
        imageUrl: Yup.string()
            .matches(/(http(s?):)/, 'La url de la imagen no es valida')
            .url('La url de la imagen no es valida'),
        videoUrl: Yup.string()
            .matches(/(http(s?):)/, 'La url de la imagen no es valida')
            .url('La url de la imagen no es valida'),
        description: Yup.string().required('La descripcion es requerida')
            .min(10, 'La descripcion debe tener al menos 10 caracteres')
    }

    const categories = [
        { id: '1', value: 'Fullstack', label: 'Fullstack' },
        { id: '2', value: 'Frontend', label: 'Frontend' },
        { id: '3', value: 'Backend', label: 'Backend' },
    ];

    return { initialValues, validationSchema, validationSchemaEditForm, categories };
}