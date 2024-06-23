import { useSelector } from "react-redux"
import { useDisclosure } from "@nextui-org/react";

import { useGroupedVideosByCategory, useCategoryColors } from "@hooks"
import { EditVideoModal, VideoCard } from "@videoGallery"
import { setSelectedVideo } from "@store";

export const VideoGalleryView = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { videos, selectedVideo } = useSelector(state => state.videoGallery)
    const getCategoryColor = useCategoryColors();

    const groupedVideos = useGroupedVideosByCategory(videos)

    return (
        <section className="flex flex-col gap-8 pb-14 p-4 md:p-6">

            {
                groupedVideos && Object.keys(groupedVideos).map(category => (
                <section key={category} className="flex flex-col gap-4 w-full">
                    <div className={`${getCategoryColor(category)} lg:chip__category self-center lg:self-start flex justify-center items-center rounded-2xl h-12 text-[1.5rem] min-w-[17rem] md:min-w-[20rem] lg:min-w-[27rem] max-w-[27rem] lg:chip__category`}>
                        <h2 className="">{category}</h2>
                    </div>
                    <div className="overflow-x-auto flex-nowrap flex gap-2 pb-2 rounded-2xl">
                        {groupedVideos[category].reverse().map(video => (
                            <VideoCard
                                key={video.id}
                                video={video}
                                onOpen={onOpen}
                                setSelectedVideo={setSelectedVideo}
                            />
                        ))}
                    </div>
                </section>
            ))}
            <EditVideoModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                selectedVideo={selectedVideo}
            />
        </section>
    )
}
