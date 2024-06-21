import axios from "axios";

const BASE_URL = 'http://localhost:3000/videos';

export const fetchVideosApi = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const getVideosByBannerApi = async () => {
    const response = await axios.get(`${BASE_URL}`);
    return response.data.filter(video => video.banner === true);
}

export const addVideoApi = async (video) => {
    try {
        const response = await axios.post(BASE_URL, video);
        return response.data;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const updateVideoApi = async (video) => {
    try {
        const response = await axios.put(`${BASE_URL}/${video.id}`, video);
        return response.data;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const deleteVideoApi = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return false;
    }
}