import { NextUIProvider } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

export const AppTheme = ({ children }) => {
    const navigate = useNavigate();

    return (
        <NextUIProvider navigate={navigate}>
            <main className={`dark text-foreground min-h-screen bg-background`}>
                {children}
            </main>
        </NextUIProvider>
    )
}

// Props validations
AppTheme.propTypes = {
    children: PropTypes.node.isRequired
}