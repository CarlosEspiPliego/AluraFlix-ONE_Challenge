import PropTypes from 'prop-types';
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './bannerCarrucel.css'

import { SwiperSlideContent } from "@videoGallery";

export const BannerCarrucel = ({ videosBanner }) => {

    return (
        <Swiper
            spaceBetween={50}
            centeredSlides={true}
            autoplay={{
                "delay": 10500,
                "disableOnInteraction": false
            }}
            pagination={{
                "clickable": false
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper swiper p-4 md:p-6"
        >
            {
                videosBanner.map((video, index) => (
                    <SwiperSlide key={index} className="h-full m-auto">
                        <SwiperSlideContent video={video} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

BannerCarrucel.propTypes = {
    videosBanner: PropTypes.array.isRequired
}