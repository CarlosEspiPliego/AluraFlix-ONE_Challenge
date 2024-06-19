import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // Aquí va el estado inicial
};

export const videoGallerySlice = createSlice({
    name: 'videoGallery',
    initialState,
    reducers: {
        // Aquí van los reducers
    }
});

export const { actions, reducer } = videoGallerySlice.actions;