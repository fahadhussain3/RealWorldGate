import React from 'react';
import { ChartIcon, NewsIcon, InvestIcon, BriefcaseIcon, BuildingIcon, NetworkIcon } from './Icons';


const Sidebar = () => {
    const navItems = [
        { icon: <ChartIcon />, name: 'Market Overview', active: true },
        { icon: <NewsIcon />, name: 'News' },
        { icon: <InvestIcon />, name: 'Invest', new: true },
    ];
    const assetClasses = ['Stablecoins', 'U.S. Treasuries', 'Global Bonds', 'Private Credit', 'Commodities', 'Institutional Funds', 'Stocks'];
    const participants = ['Networks', 'Platforms'];

    return (
        <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 flex-shrink-0 hidden md:block">
            <nav className="flex flex-col space-y-1">
                {navItems.map(item => (
                    <a key={item.name} href="#" className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${item.active ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'}`}>
                        {item.icon}
                        <span className="ml-3">{item.name}</span>
                        {item.new && <span className="ml-auto bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-0.5 rounded-full">NEW</span>}
                    </a>
                ))}
            </nav>
            <div className="mt-8">
                <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Asset Classes</h3>
                <nav className="mt-2 flex flex-col space-y-1">
                    {assetClasses.map(name => (
                        <a key={name} href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-md">
                            <BriefcaseIcon />
                            <span className="ml-3">{name}</span>
                        </a>
                    ))}
                </nav>
            </div>
            <div className="mt-8">
                <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Participants</h3>
                <nav className="mt-2 flex flex-col space-y-1">
                    {participants.map(name => (
                         <a key={name} href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-md">
                            <NetworkIcon />
                            <span className="ml-3">{name}</span>
                             {name === 'Platforms' && <span className="ml-auto bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-0.5 rounded-full">NEW</span>}
                        </a>
                    ))}
                </nav>
            </div>
             <div className="mt-8">
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-md">
                    <BuildingIcon />
                    <span className="ml-3">Company Directory</span>
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;
