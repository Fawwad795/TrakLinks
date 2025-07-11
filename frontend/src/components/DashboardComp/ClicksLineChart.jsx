import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ClicksLineChart = ({ data }) => {
  // Format tooltip value
  const formatTooltip = (value) => {
    return `${value} clicks`;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="mb-4">
        <h3 className="text-base font-medium text-[#2B2376]">Link clicks</h3>
        <div className="flex items-center">
          <div className="text-2xl font-semibold">
            {data.reduce((sum, item) => sum + item.clicks, 0)}
          </div>
          <div className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
            100% ↑
          </div>
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 10, left: -25, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 12, fill: '#6b7280' }}
              tickLine={{ stroke: '#e5e7eb' }}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: '#6b7280' }}
              tickLine={{ stroke: '#e5e7eb' }}
            />
            <Tooltip 
              formatter={formatTooltip}
              contentStyle={{ 
                backgroundColor: 'white', 
                borderRadius: '0.5rem',
                border: '1px solid #e5e7eb',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="clicks" 
              stroke="#FF6B8B" 
              strokeWidth={2} 
              dot={false} 
              activeDot={{ r: 6, fill: '#FF6B8B', stroke: 'white', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ClicksLineChart; 