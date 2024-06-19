import { useEffect } from "react";
import { AppRouter } from "./router/AppRouter"
import Cookies from 'js-cookie';

export const AluraFlixApp = () => {
    
    useEffect(() => {

        Cookies.set('cookieName', 'cookieValue', { sameSite: 'None', secure: true });

    }, []);

    return (
        <AppRouter />
    )
}