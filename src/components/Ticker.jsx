import React, { useState } from 'react';
import { tickerData as initialTickerData } from '../data/mockData';
import { useInterval } from '../hooks/useInterval';

const Ticker = () => {
    const [tickerData, setTickerData] = useState(initialTickerData);

    useInterval(() => {
        setTickerData(prevData =>
            prevData.map(item => {
                const change = (Math.random() - 0.5) * 0.1;
                const currentPrice = parseFloat(item.price.replace(/[^0-9.-]+/g,""));
                const newPrice = currentPrice + change;
                const newChangePercent = ((Math.random() - 0.45) * 5).toFixed(2);

                return {
                    ...item,
                    price: item.price.includes('B') || item.price.includes('M') ? item.price : `$${newPrice.toFixed(2)}`,
                    change: `${newChangePercent > 0 ? '+' : ''}${newChangePercent}%`,
                    changeType: newChangePercent > 0 ? 'positive' : 'negative',
                };
            })
        );
    }, 3000);

    return (
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 overflow-hidden relative h-12 flex items-center transition-colors duration-300">
            <div className="absolute flex animate-marquee">
                {tickerData.concat(tickerData).map((item, index) => (
                    <div key={index} className="flex items-center mx-4 flex-shrink-0">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.name}</span>
                        <span className="text-sm font-bold text-gray-800 dark:text-white ml-2">{item.price}</span>
                        <span className={`text-sm ml-2 ${item.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
                            {item.change}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ticker;

