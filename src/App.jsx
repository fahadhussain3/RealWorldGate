import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Ticker from './components/Ticker';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
    const [theme, setTheme] = useState('light'); 

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme]);

    return (
        <div className="bg-gray-50 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-200">
            <Header theme={theme} toggleTheme={toggleTheme} />
            <Ticker />
            <div className="flex">
                <Sidebar />
                <MainContent />
            </div>
        </div>
    );
}

export default App;
