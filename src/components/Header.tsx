
import React, { useState } from 'react';
import Navbar from './Navbar';
import { MenuOverlay } from './MenuOverlay';

interface HeaderProps {
    forceOpaque?: boolean;
}

const Header: React.FC<HeaderProps> = ({ forceOpaque = false }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <Navbar onMenuOpen={() => setIsMenuOpen(true)} forceOpaque={forceOpaque} />
            <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
};
export default Header;
