import { configureStore } from "@reduxjs/toolkit";
import { videoGallerySlice } from "@store/video-gallery";

export const store = configureStore({
    reducer: {
        videoGallery: videoGallerySlice.reducer
    }
})