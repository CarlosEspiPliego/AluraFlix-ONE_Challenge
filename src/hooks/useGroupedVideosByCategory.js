import { useMemo } from "react";

export const useGroupedVideosByCategory = (videos = []) => {

    return useMemo(() => {
        // Validar que videos es un array
        if (!Array.isArray(videos)) {
            return false;
        }

        if (videos) {
            return videos.reduce((acc, video) => {
                const category = video.category;
                if (!acc[category]) {
                    acc[category] = [];
                }
                acc[category].push(video);
                return acc;
            }, {});
        }

    }, [videos]);
}