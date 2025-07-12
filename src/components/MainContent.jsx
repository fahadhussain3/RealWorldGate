import React, { useState } from 'react';
import StatCard from './StatCard';
import RwaAreaChart from './RwaAreaChart';
import SalesByCountry from './SalesByCountry';
import GlobalAssetsGlobe from './GlobalAssetsGlobe';
import ActiveUsersChart from './ActiveUsersChart'; 
import { statsData as initialStatsData } from '../data/mockData';
import { InfoIcon } from './Icons';
import { useInterval } from '../hooks/useInterval';

const MainContent = () => {
    const [statsData, setStatsData] = useState(initialStatsData);

    useInterval(() => {
        setStatsData(prevData =>
            prevData.map(stat => {
                if (!stat.change) return stat;
                const valueNum = parseFloat(stat.value.replace(/[^0-9.-]+/g, ""));
                const change = (Math.random() - 0.5) * (valueNum * 0.001);
                const newValue = valueNum + change;
                const suffix = stat.value.includes('B') ? 'B' : 'M';
                
                return {
                    ...stat,
                    value: `$${newValue.toFixed(2)}${suffix}`
                }
            })
        )
    }, 2500);


    return (
        <main className="flex-1 bg-transparent p-6">
            <div className="flex items-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Global Market Overview</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-1 flex items-center">
                Welcome to Welcome to Real World Gate. Explore tokenized real-world assets and the investors, issuers, and service providers participating on public blockchains
                <InfoIcon />
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-6">
                {statsData.map(stat => <StatCard key={stat.title} {...stat} />)}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6">
                <div className="lg:col-span-3 h-[420px]">
                    <RwaAreaChart />
                </div>
                <div className="lg:col-span-2 flex flex-col gap-6">
                    <div className="h-[250px]">
                      <GlobalAssetsGlobe />
                    </div>
                    <div className="h-[150px]">
                      <SalesByCountry />
                    </div>
                </div>
            </div>
            <div className="mt-6 h-[320px]">
                <ActiveUsersChart />
            </div>
        </main>
    );
};

export default MainContent;
