import React from 'react';
import { Icon } from './Icons';

const SunIcon = () => <Icon path="M12 3v1m0 16v1m8.66-15.66l-.7.7M4.04 19.96l-.7.7M21 12h-1M4 12H3m15.66 4.66l-.7-.7M4.04 4.04l-.7-.7" className="w-5 h-5" />;
const MoonIcon = () => <Icon path="M12 21a9 9 0 1 0-9-9c0 4.97 4.03 9 9 9z" className="w-5 h-5" />;

const Header = ({ theme, toggleTheme }) => (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">Real World Gate</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 ml-4 hidden lg:block">Every tokenized real-world asset, in one place.</p>
        </div>
        <div className="flex-1 max-w-xs mx-4">
             <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Icon path="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" className="w-4 h-4 text-gray-400" />
                </div>
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md py-2 pl-10 pr-4 text-sm text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                     <kbd className="inline-flex items-center bg-white dark:bg-gray-600 border border-gray-200 dark:border-gray-500 rounded px-2 text-sm font-sans font-medium text-gray-400 dark:text-gray-300">
                        CMD + K
                    </kbd>
                </div>
            </div>
        </div>
        <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
                {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
            <a href="#" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Sign in</a>
            <a href="#" className="bg-gray-800 dark:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-900 dark:hover:bg-blue-700">Contact</a>
        </div>
    </header>
);

export default Header;
