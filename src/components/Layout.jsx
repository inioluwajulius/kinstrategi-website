import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MouseGlow from './MouseGlow';

export default function Layout({ children }) {
    const location = useLocation();
    const isLeire = location.pathname === '/leire';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className={`min-h-screen flex flex-col transition-colors duration-700 ${isLeire ? 'theme-leire' : ''}`}>
            <MouseGlow />
            <Navbar />
            <main className="flex-grow pt-20 z-10 relative flex flex-col">
                {children}
            </main>
            <Footer />
        </div>
    );
}
