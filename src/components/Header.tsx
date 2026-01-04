
import React, { useState } from 'react';
import Navbar from './Navbar';
import { MenuOverlay } from './MenuOverlay';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <Navbar onMenuOpen={() => setIsMenuOpen(true)} />
            <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
};
export default Header;
