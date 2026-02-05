
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { MenuOverlay, type MenuImages } from './MenuOverlay';

interface HeaderProps {
    forceOpaque?: boolean;
    menuImages?: MenuImages;
}

const Header: React.FC<HeaderProps> = ({ forceOpaque = false, menuImages }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Custom event listener as fallback - survives external script interference
        const handleOpenMenu = () => setIsMenuOpen(true);
        window.addEventListener('open-menu-overlay', handleOpenMenu);
        return () => window.removeEventListener('open-menu-overlay', handleOpenMenu);
    }, []);

    const handleMenuOpen = () => setIsMenuOpen(true);
    const handleMenuClose = () => setIsMenuOpen(false);

    return (
        <>
            <Navbar onMenuOpen={handleMenuOpen} forceOpaque={forceOpaque} />
            <MenuOverlay
                isOpen={isMenuOpen}
                onClose={handleMenuClose}
                menuImages={menuImages}
            />
        </>
    );
};
export default Header;
