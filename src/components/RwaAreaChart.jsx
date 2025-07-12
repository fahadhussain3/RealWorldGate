import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Brush } from 'recharts';
import { areaChartData } from '../data/mockData';
import { DownloadIcon } from './Icons';

const RwaAreaChart = () => (
    <div className="bg-white/10 dark:bg-gray-800/20 border border-white/20 dark:border-gray-700/50 rounded-lg p-6 backdrop-blur-md shadow-lg h-full">
        <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800 dark:text-white">Total RWG Value</h3>
            <button className="flex items-center bg-gray-100/50 dark:bg-gray-700/50 hover:bg-gray-200/70 dark:hover:bg-gray-600/70 text-gray-700 dark:text-gray-200 text-sm font-medium py-1 px-3 rounded-md border border-gray-300 dark:border-gray-600">
                <DownloadIcon />
                Download
            </button>
        </div>
        <div style={{ width: '100%', height: '85%' }}>
            <ResponsiveContainer>
                <AreaChart data={areaChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        {}
                        <linearGradient id="colorPink" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ec4899" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                        </linearGradient>
                         {}
                         <linearGradient id="colorPurple" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} vertical={false} />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#9ca3af" />
                    <YAxis tickFormatter={(value) => `$${value}B`} tick={{ fontSize: 12 }} stroke="#9ca3af" />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'rgba(20, 20, 30, 0.8)',
                            backdropFilter: 'blur(5px)',
                            border: '1px solid rgba(200, 200, 200, 0.5)',
                            borderRadius: '0.5rem',
                            fontSize: '12px',
                            color: '#fff'
                        }}
                    />
                    <Legend verticalAlign="bottom" height={36} iconType="circle" />
                
                    <Area type="monotone" dataKey="Private Credit" stackId="1" stroke="#ec4899" fill="url(#colorPink)" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="US Treasury Debt" stackId="1" stroke="#8b5cf6" fill="url(#colorPurple)" fillOpacity={0.6} />
                    <Brush dataKey="name" height={30} stroke="#8b5cf6" fill="rgba(255,255,255,0.1)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
);

export default RwaAreaChart;
