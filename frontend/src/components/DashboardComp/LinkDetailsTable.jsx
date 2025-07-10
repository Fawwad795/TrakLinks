import React from 'react';

const LinkDetailsTable = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-base font-medium text-[#2B2376] mb-4">Link Details</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500 border-b">
              <th className="pb-2 font-medium">LINK</th>
              <th className="pb-2 font-medium">DESTINATION</th>
              <th className="pb-2 font-medium">CLICKS</th>
              <th className="pb-2 font-medium">VISITS</th>
              <th className="pb-2 font-medium">%CLICKS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="py-3">
                <a href={`https://${data.shortUrl}`} target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">
                  {data.shortUrl}
                </a>
              </td>
              <td className="py-3 max-w-[200px] truncate">
                <a href={data.destination} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#6366F1] transition-colors duration-300">
                  {data.destination}
                </a>
              </td>
              <td className="py-3">{data.clicks}</td>
              <td className="py-3">{data.visits}</td>
              <td className="py-3">
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                    <div 
                      className="bg-[#8B5CF6] h-2 rounded-full" 
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                  <span>100.00%</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LinkDetailsTable; 