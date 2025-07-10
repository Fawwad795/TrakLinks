import React from 'react';

const CountryTable = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-base font-medium text-[#2B2376] mb-4">Countries</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500 border-b">
              <th className="pb-2 font-medium">COUNTRY</th>
              <th className="pb-2 font-medium">CLICKS</th>
              <th className="pb-2 font-medium">VISITS</th>
              <th className="pb-2 font-medium">%CLICKS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.country} className="border-b border-gray-100">
                <td className="py-3 flex items-center">
                  <span className="text-sm">{item.flag}</span>
                  <span className="ml-2">{item.country}</span>
                </td>
                <td className="py-3">{item.clicks}</td>
                <td className="py-3">{item.visits}</td>
                <td className="py-3">
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className="bg-[#8B5CF6] h-2 rounded-full" 
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span>{item.percentage.toFixed(2)}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CountryTable; 