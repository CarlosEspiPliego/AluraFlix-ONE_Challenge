import { setVideos, setVideosBanner, isSavingVideo, addNewVideo, updateVideo, deleteVideoById } from "@store/video-gallery";
import { fetchVideosApi, addVideoApi, updateVideoApi, deleteVideoApi } from "@api/videosApi";

export const startSetVideos = () => {
    return async (dispatch) => {
        const videos = await fetchVideosApi();
        dispatch(setVideos(videos));
    }
}

export const startSetVideosBanner = () => {
    return async (dispatch) => {
        const videos = await fetchVideosApi();
        const videosBanner = videos.filter(video => video.banner === true);
        dispatch(setVideosBanner(videosBanner));
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
                    text: 'Video actualizado correctamente',
                    confirmButtonText: 'Aceptar',
                    callback: () => { navigate('/') }
                })
            } else {
                console.log("Error al agregar el video")
                return false;
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

export const startDeleteVideoById = (id) => {
    return async (dispatch) => {
        dispatch(isSavingVideo());
        try {
            const response = await deleteVideoApi(id);
            if (response) {
                dispatch(deleteVideoById(id));
            } else {
                throw new Error('Error al eliminar el video');
            }
        } catch (error) {
            console.error("Error al eliminar el video", error);
        } finally {
            dispatch(isSavingVideo());
        }
    }
}