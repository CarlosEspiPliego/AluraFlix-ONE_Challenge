import { createSlice } from '@reduxjs/toolkit';
import db from '@data/db.json';

const initialState = {
    isSaving: false,
    videos: db.videos,
    videosBanner: db.videos.filter(video => video.banner === true),
    selectedVideo: null,
    error: null
};

export const videoGallerySlice = createSlice({
    name: 'videoGallery',
    initialState,
    reducers: {
        setVideos: (state, action) => {
            state.videos = action.payload;
        },
        setVideosBanner: (state, action) => {
            state.videosBanner = action.payload;
        },
        isSavingVideo: (state) => {
            state.isSaving = !state.isSaving;
            console.log("isSaving", state.isSaving)
        },
        setSelectedVideo: (state, action) => {
            state.selectedVideo = action.payload;
        },
        addNewVideo: (state, action) => {
            state.videos = [...state.videos, action.payload];
        },
        updateVideo: (state, action) => {
            state.videos = state.videos.map((video) => {
                if (video.id === action.payload.id) {
                    return {
                        ...video,
                        ...action.payload
                    }
                }
                return video;
            })
        },
        deleteVideoById: (state, action) => {
            state.videos = state.videos.filter(video => video.id !== action.payload);
        }
    }
});

export const {
    setVideos,
    setVideosBanner,
    isSavingVideo,
    setSelectedVideo,
    addNewVideo,
    updateVideo,
    deleteVideoById
} = videoGallerySlice.actions;