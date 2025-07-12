import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { activeUsersData } from '../data/mockData';

const ActiveUsersChart = () => {
    return (
        <div className="mt-8 bg-[#0f172a] rounded-lg p-4 text-white border border-gray-700/50 shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg text-blue-100">Active Users</h3>
                <div className="text-sm bg-emerald-900/30 px-2 py-1 rounded border border-emerald-800/50">
                    <span className="text-emerald-400">23%</span> (from last week)
                </div>
            </div>
            <div style={{ width: '100%', height: 100 }}>
                <ResponsiveContainer>
                    <BarChart data={activeUsersData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                        <XAxis 
                            dataKey="name" 
                            tick={{ fill: '#94a3b8', fontSize: 12 }} 
                            axisLine={false} 
                            tickLine={false} 
                        />
                        <YAxis 
                            tick={{ fill: '#94a3b8', fontSize: 12 }} 
                            axisLine={false} 
                            tickLine={false} 
                        />
                        <Bar 
                            dataKey="users" 
                            fill="#2dd4bf" 
                            radius={[4, 4, 0, 0]} 
                            barSize={20}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ActiveUsersChart;