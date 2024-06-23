import { setVideos, setVideosBanner, isSavingVideo, addNewVideo, updateVideo, deleteVideoById } from "@store/video-gallery";
import { fetchVideosApi, addVideoApi, updateVideoApi, deleteVideoApi } from "@api/videosApi";
import db from "@data/db.json";

export const startSetVideos = (showAlert) => {
    return async (dispatch) => {
        try {
            const videos = await fetchVideosApi();
            if (videos) {
                dispatch(setVideos(videos));
            } else {
                dispatch(setVideos([]));
                showAlert({
                    title: 'Servicio no disponible',
                    icon: "warning",
                    text: 'Las APIs no están disponibles en este momento. Se utilizarán datos locales para continuar con la operación. Por favor, ten en cuenta que la información puede no estar completamente actualizada y que los cambios realizados después de esto pueden no ser guardados.',
                    confirmButtonText: 'Aceptar',
                    callback: () => { }
                });
                dispatch(setVideos(db.videos));
            }
        } catch (error) {
            dispatch(setVideos([]));
            // showAlert({
            //     title: 'Servicio no disponible',
            //     icon: "warning",
            //     text: 'Las APIs no están disponibles en este momento. Se utilizarán datos locales para continuar con la operación. Por favor, ten en cuenta que la información puede no estar completamente actualizada y que los cambios realizados después de esto pueden no ser guardados.',
            //     confirmButtonText: 'Aceptar',
            //     callback: () => { }
            // });
        }
    }
}

export const startSetVideosBanner = (showAlert) => {
    return async (dispatch) => {
        console.log(db)
        try {
            const videos = await fetchVideosApi();
            if (videos) {
                const videosBanner = videos.filter(video => video.banner === true);
                dispatch(setVideosBanner(videosBanner));
            } else {
                dispatch(setVideosBanner([]));
                showAlert({
                    title: 'Servicio no disponible',
                    icon: "warning",
                    text: 'Las APIs no están disponibles en este momento. Se utilizarán datos locales para continuar con la operación. Por favor, ten en cuenta que la información puede no estar completamente actualizada y que los cambios realizados después de esto pueden no ser guardados.',
                    confirmButtonText: 'Aceptar',
                    callback: () => { }
                });
                dispatch(setVideosBanner(db.videos.filter(video => video.banner === true)));
            }
        } catch (error) {
            console.error("Error al obtener los videos banner", error);
            // showAlert({
            //     title: 'Servicio no disponible',
            //     icon: "warning",
            //     text: 'Las APIs no están disponibles en este momento. Se utilizarán datos locales para continuar con la operación. Por favor, ten en cuenta que la información puede no estar completamente actualizada y que los cambios realizados después de esto pueden no ser guardados.',
            //     confirmButtonText: 'Aceptar',
            //     callback: () => { }
            // });
            dispatch(setVideosBanner([]));
        }
    }
}

export const startAddNewVideo = (video, showAlert, navigate) => {

    return async (dispatch) => {

        dispatch(isSavingVideo());

        try {
            const response = await addVideoApi(video);
            if (response) {
                console.log("Video agregado correctamente", response)
                dispatch(addNewVideo(response));
                dispatch(isSavingVideo());
                showAlert({
                    title: 'Operación exitosa',
                    icon: "success",
                    text: 'Video agregado correctamente',
                    confirmButtonText: 'Aceptar',
                    callback: () => { navigate('/') }
                })
            } else {
                dispatch(addNewVideo(video));
                showAlert({
                    title: 'Operación exitosa',
                    icon: "warning",
                    text: 'El video se ha actualizado correctamente, pero no se ha podido guardar en la base de datos.',
                    confirmButtonText: 'Aceptar',
                    callback: () => { navigate('/') }
                })
                
            }
        } catch (error) {
            console.log("Error al agregar el video", error)
            showAlert({
                title: 'Operación fallida',
                icon: "error",
                text: 'Error al actualizar el video, intente nuevamente',
                confirmButtonText: 'Aceptar',
                callback: () => { }
            })
        } finally {
            dispatch(isSavingVideo());
        }
    }
}

export const startUpdateVideo = (video, onClose) => {
    return async (dispatch) => {
        dispatch(isSavingVideo());
        try {
            const response = await updateVideoApi(video);
            if (response) {
                dispatch(updateVideo(response));
                onClose();
            } else {
                throw new Error('Error al actualizar el video');
            }
        } catch (error) {
            console.error("Error al actualizar el video", error);
        } finally {
            dispatch(isSavingVideo());
        }
    }
}

export const startDeleteVideoById = (id, showAlert) => {
    return async (dispatch) => {
        dispatch(isSavingVideo());
        try {
            const response = await deleteVideoApi(id);
            if (response) {
                dispatch(deleteVideoById(id));
                showAlert({
                    title: 'Operación exitosa',
                    icon: "success",
                    text: 'Video eliminado correctamente',
                    confirmButtonText: 'Aceptar',
                    callback: () => { }
                })
            } else {
                dispatch(await deleteVideoById(id));
                await showAlert({
                    title: 'Operación exitosa',
                    icon: "warning",
                    text: 'El video se ha eliminado correctamente, pero no se ha podido eliminar de la base de datos.',
                    confirmButtonText: 'Aceptar',
                    callback: () => { }
                })
            }
        } catch (error) {
            console.error("Error al eliminar el video", error);
        } finally {
            dispatch(isSavingVideo());
        }
    }
}