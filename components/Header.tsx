
import React from 'react';
import { APP_NAME } from '../constants';
import { LogoIcon } from './icons';

interface HeaderProps {
    onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
    return (
        <header className="py-4 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
            <div className="max-w-7xl mx-auto">
                <div onClick={onLogoClick} className="flex items-center gap-3 cursor-pointer">
                    <LogoIcon className="h-8 w-8 text-sky-600" />
                    <span className="text-2xl font-bold text-slate-800 tracking-tight">{APP_NAME}</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
