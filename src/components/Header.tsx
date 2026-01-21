
import React, { useState } from 'react';
import Navbar from './Navbar';
import { MenuOverlay, type MenuImages } from './MenuOverlay';

interface HeaderProps {
    forceOpaque?: boolean;
    menuImages?: MenuImages;
}

const Header: React.FC<HeaderProps> = ({ forceOpaque = false, menuImages }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <Navbar onMenuOpen={() => setIsMenuOpen(true)} forceOpaque={forceOpaque} />
            <MenuOverlay
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                menuImages={menuImages}
            />
        </>
    );
};
export default Header;
