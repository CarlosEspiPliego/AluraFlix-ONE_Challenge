import { useMemo } from "react";

export const useGroupedVideosByCategory = (videos = []) => {

    return useMemo(() => {
        return videos.reduce((acc, video) => {
            const category = video.category;
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(video);
            return acc;
        }, {});
    }, [videos]);
}