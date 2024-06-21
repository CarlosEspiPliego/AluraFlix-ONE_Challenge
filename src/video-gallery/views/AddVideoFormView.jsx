import { useDispatch } from 'react-redux';
import { useFormikForm, useAlert, useDataAddVideoForm } from '@hooks';
import { Select, SelectItem, Input, Textarea, Button } from "@nextui-org/react";
import { startAddNewVideo } from '@store/video-gallery';
import { useNavigate } from 'react-router-dom';

export const AddVideoFormView = () => {
    const showAlert = useAlert()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { initialValues, validationSchema, categories } = useDataAddVideoForm();

    const onSubmit = async (values) => {
        try {
            await dispatch(startAddNewVideo(values, showAlert, navigate));
        } catch (error) {
            console.error(error);
        }
    }

    const formik = useFormikForm(initialValues, validationSchema, onSubmit)

    const handleReset = () => {
        formik.resetForm();
    };

    return (
        <section className="flex flex-col gap-8 pb-20 p-4 md:p-6 md:max-w-[80%] lg:max-w-[50%] m-auto">
            <div className="flex flex-col gap-8">
                <div className='header__section flex flex-col gap-8 justify-center'>
                    <div className='flex flex-col gap-4 items-center'>
                        <h1 className='text-2xl font-bold uppercase'>NUEVO VIDEO</h1>
                        <p className='text-sm text-foreground uppercase'>Completa el formulario para agregar una nueva tarjeta de video</p>
                    </div>
                    <div className='border-b-1 border-t-1 border-gray-600 py-4'>
                        <h2 className='text-xl'>Crear Tajeta</h2>
                    </div>
                </div>

                <form className='flex flex-col gap-4' onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e); }} id="form__video">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            variant="bordered"
                            type="text"
                            name="title"
                            id="title"
                            label="Titulo del video"
                            autoFocus
                            isInvalid={Boolean(formik.errors.title && formik.touched.title)}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.title}
                            errorMessage={formik.errors.title}
                        />

                        <Select
                            label="Categoria"
                            variant="bordered"
                            type="text"
                            name="category"
                            isInvalid={Boolean(formik.errors.category && formik.touched.category)}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.category}
                            errorMessage={formik.errors.category}
                        >
                            {categories.map((category) => (
                                <SelectItem className="text-foreground-900" key={category.value} value={category.value}>
                                    {category.label}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            variant="bordered"
                            type="text"
                            name="imageUrl"
                            id="imageUrl"
                            label="Enlace de la imagen"
                            isInvalid={Boolean(formik.errors.imageUrl && formik.touched.imageUrl)}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.imageUrl}
                            errorMessage={formik.errors.imageUrl}
                        />

                        <Input
                            variant="bordered"
                            type="text"
                            name="videoUrl"
                            id="videoUrl"
                            label="Enlace del video"
                            isInvalid={Boolean(formik.errors.videoUrl && formik.touched.videoUrl)}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.videoUrl}
                            errorMessage={formik.errors.videoUrl}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <Textarea
                            variant="bordered"
                            label="Descripcion del video"
                            name="description"
                            id="description"
                            isInvalid={Boolean(formik.errors.description && formik.touched.description)}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.description}
                            errorMessage={formik.errors.description}
                        />
                    </div>

                    <div className="flex justify-end gap-4">
                        <Button
                            type="reset"
                            color="error"
                            className="uppercase"
                            onPress={handleReset}
                        >
                            Limpiar
                        </Button>
                        <Button
                            type="submit"
                            color="primary"
                            className="uppercase"
                            isDisabled={!formik.isValid || formik.isSubmitting}
                            isLoading={formik.isSubmitting}
                        // onClick={formik.handleSubmit}
                        >
                            Agregar Video
                        </Button>
                    </div>
                </form>

            </div>
        </section>
    )
}
