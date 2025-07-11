import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const COLORS = {
  'Safari': '#3B82F6',
  'Chrome': '#10B981',
  'Firefox': '#F59E0B',
  'Opera': '#EF4444',
  'Edge': '#8B5CF6',
  'Unknown': '#9CA3AF'
};

// Map browser names to their icon filenames
const BROWSER_ICONS = {
  'Safari': 'safari.png',
  'Chrome': 'chrome.png',
  'Firefox': 'firefox.png',
  'Opera': 'opera.png',
  'Edge': 'microsoft.png',
  'Unknown': 'unknown.png'
};

const BrowserChart = ({ data }) => {
  // Transform data to include icon path for easier rendering
  const enhancedData = data.map(item => ({
    ...item,
    iconPath: `/browser-icons/${BROWSER_ICONS[item.name] || 'unknown.png'}`
  }));
  
  // Custom YAxis tick with browser icons
  const CustomYAxisTick = (props) => {
    const { x, y, payload } = props;
    const browserName = payload.value;
    
    // Find the icon path from our enhanced data
    const entry = enhancedData.find(item => item.name === browserName);
    const iconPath = entry ? entry.iconPath : '/browser-icons/unknown.png';
    
    return (
      <g transform={`translate(${x},${y})`}>
        <image 
          x={-90} 
          y={-10} 
          width="18" 
          height="18" 
          xlinkHref={iconPath} 
          style={{ objectFit: 'contain' }} 
        />
        <text x={-65} y={4} textAnchor="start" fill="#6b7280" fontSize={12}>
          {browserName}
        </text>
      </g>
    );
  };

  // CSS to remove focus outline
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .recharts-wrapper .recharts-surface {
        outline: none !important;
      }
      .recharts-bar-rectangles {
        outline: none !important;
      }
      .recharts-layer {
        outline: none !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-base font-medium text-[#2B2376] mb-4">Browsers</h3>
      <div className="h-64" style={{ outline: 'none' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={enhancedData}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
            style={{ outline: 'none' }}
            barGap={0}
            barCategoryGap={8}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" />
            <YAxis 
              dataKey="name" 
              type="category" 
              tick={<CustomYAxisTick />}
              width={100}
              tickLine={false}
              axisLine={false}
              orientation="left"
            />
            <Tooltip 
              formatter={(value) => [`${value} clicks`, 'Clicks']}
              contentStyle={{ 
                backgroundColor: 'white', 
                borderRadius: '0.5rem',
                border: '1px solid #e5e7eb',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
              }}
            />
            <Bar 
              dataKey="value" 
              radius={[0, 4, 4, 0]}
              style={{ outline: 'none' }}
            >
              {enhancedData.map((entry) => (
                <Cell 
                  key={`cell-${entry.name}`} 
                  fill={COLORS[entry.name] || '#9CA3AF'}
                  style={{ outline: 'none' }}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BrowserChart; 