import PropTypes from 'prop-types';
import { useCategoryColors } from '@hooks';

export const SwiperSlideContent = ({ video }) => {
    const { category, title, description, videoIframeUrl } = video;
    const getCategoryColor = useCategoryColors();
    const categoryColor = getCategoryColor(category);

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full w-full gap-8">
            <div className="lg:w-1/2 h-[40%] sm:h-[30%] flex flex-col gap-4 w-full justify-end lg:justify-center">
                <div className={`flex justify-center items-center rounded-2xl h-12 text-[1.5rem] max-w-[80%] md:max-w-[70%] lg:chip__category ${categoryColor}`}>
                    {category}
                </div>

                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-white line-clamp-3 md:line-clamp-none">{title}</h1>
                    <p className="text-white  line-clamp-5">{description}</p>
                </div>
            </div>
            <div className="flex w-full h-[30%] sm:h-[70%] md:h-[50%] lg:w-1/2 justify-start lg:justify-center items-start lg:items-center">
                <iframe
                    className="h-full w-full md:h-[26rem] rounded-2xl object-cover transform transition-transform duration-300 hover:scale-105 border border-primary-500"
                    width="1059"
                    height="573"
                    src={videoIframeUrl}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                >
                </iframe>
                {/* <Image
                    src={imageUrl}
                    alt="Banner"
                    className="h-full w-full object-cover transform transition-transform duration-300 hover:scale-105 border border-primary-500"
                    isBlurred
                /> */}
            </div>
        </div>
    )
}

SwiperSlideContent.propTypes = {
    video: PropTypes.object.isRequired
}