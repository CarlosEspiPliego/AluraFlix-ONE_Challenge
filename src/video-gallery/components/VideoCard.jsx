import PropTypes from 'prop-types';
import { Card, CardFooter, Image, Button, Tooltip } from "@nextui-org/react";
import Img from "@images/bannerImage.png";
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { useAlert } from '@hooks';
import { useDispatch } from 'react-redux';
import { startDeleteVideoById } from '@store';

export const VideoCard = ({ onOpen, video, setSelectedVideo }) => {
  const dispatch = useDispatch();
  const { title, description, imageUrl, videoUrl } = video;
  const showAlert = useAlert()
  // const { deleteVideo, refreshVideos } = useVideos()

  const onOpenVideo = () => {
    if (videoUrl) window.open(videoUrl, '_blank');
  }

  const onEditVideo = (video) => {
    dispatch(setSelectedVideo(video))
    onOpen()
  }

  const onDeleteVideo = (video) => {
    showAlert({
      title: 'Eliminar video',
      text: `¿Estas seguro de eliminar el video?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      callback: async () => {
        await dispatch(startDeleteVideoById(video.id))
      }
    })
  }
  
  return (
    <Card isFooterBlurred className="relative w-full min-w-[17rem] md:min-w-[20rem] lg:min-w-[27rem] max-w-[27rem] h-full border-blue-500 border ">
      <Button
        color="primary"
        variant="flat"
        size="sm"
        disabled={!videoUrl}
        className="absolute top-2 right-2 z-50"
        onPress={() => onOpenVideo()}
      >
        Ver video
      </Button>
      <Image
        removeWrapper
        alt={title}
        className="z-0 w-full h-[10rem] md:h-[13rem] lg:h-[15rem] object-cover transform transition-transform duration-300 hover:scale-105"
        src={imageUrl ? String(imageUrl) : Img}
      />
      <CardFooter className="p-2 absolute flex justify-between gap-4 bg-black/40 bottom-0 border-t-1 border-default-600 dark:border-default-100 w-full">
        <div className="flex gap-2 items-center text-start">
          <div className="flex flex-col">
            <p className="text-white uppercase font-bold line-clamp-1">{title}</p>
            <h4 className="text-white/60 text-tiny font-medium line-clamp-1">{description}</h4>
          </div>
        </div>
        <div className="flex gap-2">
          <Tooltip content="Eliminar" color="foreground" >
            <Button
              isIconOnly
              radius="sm"
              size="sm"
              variant="bordered"
              color="danger"
              onPress={() => onDeleteVideo(video)}
            >
              <IconTrash size={20} strokeWidth={1.5} />
            </Button>
          </Tooltip>
          <Tooltip content="Editar" color="foreground">
            <Button
              isIconOnly
              radius="sm"
              size="sm"
              variant="bordered"
              onPress={() => onEditVideo(video)}
            >
              <IconEdit size={20} strokeWidth={1.5} />
            </Button>
          </Tooltip>
        </div>
      </CardFooter>
    </Card>
  )
}

VideoCard.propTypes = {
  onOpen: PropTypes.func.isRequired,
  video: PropTypes.object.isRequired,
  // setSelectedVideo: PropTypes.func.isRequired
}