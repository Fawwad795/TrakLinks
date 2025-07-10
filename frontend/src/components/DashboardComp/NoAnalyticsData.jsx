import React from 'react';
import { FiBarChart2 } from 'react-icons/fi';

const NoAnalyticsData = ({ linkTitle }) => {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-white rounded-lg shadow-sm">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <FiBarChart2 size={28} className="text-gray-400" />
      </div>
      <h3 className="text-lg font-medium text-gray-800 mb-2">No analytics data yet</h3>
      <p className="text-gray-500 text-center max-w-md mb-6">
        {linkTitle ? `"${linkTitle}"` : "This link"} hasn't received any clicks yet. 
        Share your link to start collecting analytics data.
      </p>
      <button className="px-4 py-2 bg-[#2B2376] text-white rounded-md hover:bg-[#352a8e] transition-colors">
        Copy Link
      </button>
    </div>
  );
};

export default NoAnalyticsData; 