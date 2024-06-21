import PropTypes from 'prop-types';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, Select, SelectItem, Input, Textarea } from "@nextui-org/react";
import { useFormikForm, useDataAddVideoForm } from '@hooks'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startUpdateVideo } from '@store';

export const EditVideoModal = ({ isOpen, onOpenChange, selectedVideo }) => {
    const { initialValues, validationSchemaEditForm, categories } = useDataAddVideoForm();
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedVideo) {
            formik.setValues({
                id: selectedVideo.id || '',
                title: selectedVideo.title || '',
                category: selectedVideo.category || '',
                imageUrl: selectedVideo.imageUrl || '',
                videoUrl: selectedVideo.videoUrl || '',
                description: selectedVideo.description || '',
            });
        }
    }, [selectedVideo]);

    const onSubmit = async (values) => {
        console.log(values)
        await dispatch(startUpdateVideo(values, onClose));
    }

    const onClose = () => {
        onOpenChange(false)
    }

    const formik = useFormikForm(initialValues, validationSchemaEditForm, onSubmit)

    return (
        <Modal isOpen={isOpen} onOpenChange={onClose} className="dark" size="2xl">
            <ModalContent>
                {() => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 uppercase items-center">Editar video</ModalHeader>
                        <ModalBody className="py-6">
                            <form className='flex flex-col gap-4' onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e); }}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input
                                        variant="bordered"
                                        type="text"
                                        name="title"
                                        label="Titulo del video"
                                        autoFocus
                                        isInvalid={Boolean(formik.errors.title)}
                                        onChange={formik.handleChange}
                                        value={formik.values.title}
                                        errorMessage={formik.errors.title}
                                    />

                                    <Select
                                        label="Categoria"
                                        variant="bordered"
                                        type="text"
                                        name="category"
                                        isInvalid={Boolean(formik.errors.category)}
                                        onChange={formik.handleChange}
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
                                        label="Enlace de la imagen"
                                        isInvalid={Boolean(formik.errors.imageUrl)}
                                        onChange={formik.handleChange}
                                        value={formik.values.imageUrl}
                                        errorMessage={formik.errors.imageUrl}
                                    />

                                    <Input
                                        variant="bordered"
                                        type="text"
                                        name="videoUrl"
                                        label="Enlace del video"
                                        isInvalid={Boolean(formik.errors.videoUrl)}
                                        onChange={formik.handleChange}
                                        value={formik.values.videoUrl}
                                        errorMessage={formik.errors.videoUrl}
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    <Textarea
                                        variant="bordered"
                                        label="Descripcion del video"
                                        name="description"
                                        isInvalid={Boolean(formik.errors.description)}
                                        onChange={formik.handleChange}
                                        value={formik.values.description}
                                        errorMessage={formik.errors.description}
                                    />
                                </div>

                                <div className="flex justify-end gap-4">
                                    <Button
                                        type="reset"
                                        color="error"
                                        className="uppercase"
                                        onPress={() => onClose()}
                                    >
                                        Cancelar
                                    </Button>
                                    <Button
                                        type="submit"
                                        color="primary"
                                        className="uppercase"
                                        isDisabled={!formik.isValid || formik.isSubmitting}
                                        isLoading={formik.isSubmitting}
                                    >
                                        Guardar
                                    </Button>
                                </div>
                            </form>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

EditVideoModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onOpenChange: PropTypes.func.isRequired,
    selectedVideo: PropTypes.object
}