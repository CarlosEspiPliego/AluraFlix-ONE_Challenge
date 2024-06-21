import { HomeLayout, BannerView, VideoGalleryView } from '@videoGallery'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startSetVideos, startSetVideosBanner } from '@store'

export const HomePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startSetVideos())
        dispatch(startSetVideosBanner())
    }, [dispatch])

    return (
        <HomeLayout>
            <BannerView />
            <VideoGalleryView />
        </HomeLayout>
    )
}
