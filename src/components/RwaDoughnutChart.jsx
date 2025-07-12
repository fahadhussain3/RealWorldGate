import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { pieChartData, PIE_CHART_COLORS } from '../data/mockData';
import { ChartBarIcon } from './Icons';

const RwaDoughnutChart = () => (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Total RWG Value</h3>
            <ChartBarIcon />
        </div>
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={PIE_CHART_COLORS[index % PIE_CHART_COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip contentStyle={{ fontSize: '12px', borderRadius: '0.5rem' }} />
                    <Legend iconType="circle" layout="vertical" verticalAlign="middle" align="right" />
                </PieChart>
            </ResponsiveContainer>
        </div>
        <div className="text-right text-xs text-gray-400 mt-2">
            Designed by <span className="font-semibold text-gray-500">Roddy</span>
        </div>
    </div>
);

export default RwaDoughnutChart;
