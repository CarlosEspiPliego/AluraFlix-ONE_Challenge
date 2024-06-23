import { useDispatch } from "react-redux";
import { AppRouter } from "./router/AppRouter"
import { useEffect } from "react";
import { startSetVideos, startSetVideosBanner } from "@store";
import { useAlert } from '@hooks'

export const AluraFlixApp = () => {
    const dispatch = useDispatch();
    const showAlert = useAlert();

    useEffect(() => {
        dispatch(startSetVideos(showAlert))
        dispatch(startSetVideosBanner(showAlert))
    }, []);

    return (
        <AppRouter />
    )
}