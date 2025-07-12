import React from 'react';
import { salesByCountryData } from '../data/mockData';

const SalesByCountry = () => {
    return (
        <div className="bg-white/10 dark:bg-gray-800/20 border border-white/20 dark:border-gray-700/50 rounded-lg p-4 h-full backdrop-blur-md shadow-lg flex flex-col">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-4 flex-shrink-0">Sales by Country</h3>
            <div className="flex-grow overflow-y-auto">
                <ul className="space-y-4">
                    {salesByCountryData.map((item, index) => (
                        <li key={index} className="flex items-center">
                            <span className="text-2xl mr-4">{item.flag}</span>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                    <span className="font-bold">Country:</span> {item.country}
                                </p>
                                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                                    <span><span className="font-semibold">Sales:</span> {item.sales}</span>
                                    <span><span className="font-semibold">Value:</span> {item.value}</span>
                                    <span><span className="font-semibold">Bounce:</span> {item.bounce}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SalesByCountry;
