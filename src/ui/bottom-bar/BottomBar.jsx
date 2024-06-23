import { Button, Link } from '@nextui-org/react'
import { IconHome, IconPlus } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const BottomBar = () => {
    const location = useLocation();
    const [activeHome, setActiveHome] = useState(false)
    const [activeNewVideo, setActiveNewVideo] = useState(false)

    useEffect(() => {
        if (isHome()) {
            setActiveHome(true)
        } else {
            setActiveNewVideo(true)
        }
    }, [location.pathname])
    
    const isHome = () => {
        if (location.pathname === '/') {
            return true
        }
        return false
    }

    const handleActiveHome = () => {
        setActiveHome(true)
        setActiveNewVideo(false)
    }

    const handleActiveNewVideo = () => {
        setActiveHome(false)
        setActiveNewVideo(true)
    }

    return (
        <div className="md:hidden w-full flex fixed bottom-2 items-center px-4 z-10">
            <div className='flex justify-around py-2 px-4 bg-[#040910] border-1 rounded-xl border-primary-300 z-10 w-full '>
                <Button
                    color="primary"
                    variant="flat"
                    size='sm'
                    onPress={handleActiveHome}
                    startContent={<IconHome size={20} stroke={1.5} />}
                    as={Link}
                    href='/AluraFlix-ONE_Challenge'
                >
                    { activeHome && "HOME"}
                </Button>
                <Button
                    color="primary"
                    variant="flat"
                    size='sm'
                    onPress={handleActiveNewVideo}
                    startContent={<IconPlus size={20} stroke={1.5} />}
                    as={Link}
                    href='AluraFlix-ONE_Challenge/addVideo'
                >
                    { activeNewVideo && "NUEVO VIDEO"}
                </Button>
            </div>
        </div>
    )
}