import PropTypes from 'prop-types';
import { Footer, Navbar, BottomBar } from '@ui';
import './style.css';

export const HomeLayout = ({ children }) => {
    return (
        <div className='min-h-screen flex flex-col relative'>
            <div className="gradient-background"></div>
            <Navbar />
            <main className='flex-grow'>
                {children}
            </main>
            <Footer />
            <BottomBar />
        </div>
    )
}

HomeLayout.propTypes = {
    children: PropTypes.node.isRequired
}