import React from 'react';
import { WalletIcon, UsersIcon, DocumentIcon, CartIcon } from './Icons';

const iconMap = {
  'Total RWA Onchain': <WalletIcon />,
  'Total Asset Holders': <UsersIcon />,
  'Total Asset Issuers': <DocumentIcon />,
  'Total Stablecoin Value': <WalletIcon />,
  'Total Stablecoin Holders': <UsersIcon />,
};

const StatCard = ({ title, value, change, note }) => (
    <div className="bg-white/10 dark:bg-gray-800/20 border border-white/20 dark:border-gray-700/50 rounded-lg p-4 backdrop-blur-md shadow-lg transition-all duration-300 hover:border-white/40 flex flex-col justify-between h-full">
        <div className="flex justify-between items-start gap-2">
            <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</h3>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1 break-all">{value}</p>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-tr from-pink-500 to-purple-500 text-white shadow-lg">
                {iconMap[title] || <CartIcon />}
            </div>
        </div>
        {change && (
            <div className="flex items-center mt-2 text-xs">
                <span className="font-medium text-green-400">{change}</span>
                <span className="text-gray-500 dark:text-gray-400 ml-1 whitespace-nowrap">{note}</span>
            </div>
        )}
    </div>
);

export default StatCard;
