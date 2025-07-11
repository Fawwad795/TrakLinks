import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const COLORS = ['#F59E0B', '#3B82F6', '#10B981', '#6366F1'];

// Custom legend icon renderer to display circles instead of squares
const renderLegendIcon = (props) => {
  const { fill } = props;
  return (
    <svg width={14} height={14} style={{ marginRight: 8 }}>
      <circle cx={7} cy={7} r={7} fill={fill} />
    </svg>
  );
};

const DeviceChart = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-base font-medium text-[#2B2376] mb-4">Devices</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value, name) => [`${value} clicks`, name]}
              contentStyle={{ 
                backgroundColor: 'white', 
                borderRadius: '0.5rem',
                border: '1px solid #e5e7eb',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
              }}
            />
            <Legend 
              layout="vertical" 
              verticalAlign="middle" 
              align="right"
              formatter={(value) => (
                <span className="text-sm text-gray-700">{value}</span>
              )}
              iconType="circle"
              iconSize={10}
              iconRenderer={renderLegendIcon}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DeviceChart; 