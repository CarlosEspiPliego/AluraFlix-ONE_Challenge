import axios from "axios";

const BASE_URL = 'http://localhost:3000/videos';

export const fetchVideosApi = async () => {
    console.log("fetchVideosApi")
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const getVideosByBannerApi = async () => {
    console.log("getVideosByBannerApi")
    const response = await axios.get(`${BASE_URL}`);
    return response.data.filter(video => video.banner === true);
}

export const addVideoApi = async (video) => {
    console.log("addVideoApi")
    try {
        const response = await axios.post(BASE_URL, video);
        return response.data;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const updateVideoApi = async (video) => {
    console.log("updateVideoApi")
    try {
        const response = await axios.put(`${BASE_URL}/${video.id}`, video);
        return response.data;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const deleteVideoApi = async (id) => {
    console.log("deleteVideoApi")
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return false;
    }
}