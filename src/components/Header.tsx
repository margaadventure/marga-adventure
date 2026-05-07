
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { MenuOverlay, type MenuImages } from './MenuOverlay';
import { I18nProvider } from '../i18n/useTranslation';
import type { Locale } from '../i18n/i18n';

interface HeaderProps {
    initialLocale?: Locale;
    initialDict?: any;
    initialFallbackDict?: any;
    forceOpaque?: boolean;
    menuImages?: MenuImages;
}

const Header: React.FC<HeaderProps> = ({ initialLocale, initialDict, initialFallbackDict, forceOpaque = false, menuImages }) => {
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
        <I18nProvider initialLocale={initialLocale} initialDict={initialDict} initialFallbackDict={initialFallbackDict}>
            <Navbar onMenuOpen={handleMenuOpen} forceOpaque={forceOpaque} />
            <MenuOverlay
                isOpen={isMenuOpen}
                onClose={handleMenuClose}
                menuImages={menuImages}
            />
        </I18nProvider>
    );
};
export default Header;
