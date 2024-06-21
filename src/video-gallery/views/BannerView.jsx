import BannerImg from "@images/bannerImage.png"
import './banner.css'
import { BannerCarrucel } from "@videoGallery"

import { useSelector } from "react-redux"

export const BannerView = () => {
    const { videosBanner } = useSelector((state) => state.videoGallery)

    return (
        <div className="bg-slate-50 banner__section relative">
            <img
                src={BannerImg}
                alt="Banner"
                className="h-full w-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-banner flex items-center justify-center">
                <BannerCarrucel
                    videosBanner={videosBanner}
                />
            </div>
        </div>
    )
}
