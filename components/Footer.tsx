
import React from 'react';
import { APP_NAME } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="py-6 px-4 sm:px-6 lg:px-8 mt-auto">
            <div className="max-w-7xl mx-auto text-center text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} {APP_NAME}. All Rights Reserved.</p>
                <p className="mt-1">Create your professional identity, powered by AI.</p>
            </div>
        </footer>
    );
};

export default Footer;
