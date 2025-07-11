import React from 'react';

const LinkDetailsTable = ({ data }) => {
  // Add Roboto font import in the component
  React.useEffect(() => {
    // Check if Roboto font is already loaded
    const robotoLoaded = document.querySelector('link[href*="fonts.googleapis.com/css2?family=Roboto"]');
    
    if (!robotoLoaded) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-base font-medium text-[#2B2376] mb-4">Link Details</h3>
      
      <div className="overflow-x-auto relative">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500 border-b">
              <th className="pb-2 font-medium">LINK</th>
              <th className="pb-2 font-medium">DESTINATION</th>
              <th className="pb-2 font-medium pl-8">CLICKS</th>
              <th className="pb-2 font-medium">VISITS</th>
              <th className="pb-2 font-medium pl-8">%CLICKS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="py-3">
                <a href={`https://${data.shortUrl}`} target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline font-['Roboto',sans-serif]">
                  {data.shortUrl}
                </a>
              </td>
              <td className="py-3 max-w-[150px] pr-8">
                <div className="relative group">
                  <a 
                    href={data.destination} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-[#6366F1] transition-colors duration-300 font-['Roboto',sans-serif] block truncate"
                    title={data.destination}
                  >
                    {data.destination}
                  </a>
                  <div className="hidden group-hover:block absolute z-50 bg-white border border-gray-200 shadow-lg rounded-md p-2 mt-1 max-w-md break-all left-0" style={{ top: '-40px' }}>
                    <span className="text-sm text-gray-700 font-['Roboto',sans-serif]">
                      {data.destination}
                    </span>
                  </div>
                </div>
              </td>
              <td className="py-3 pl-8">{data.clicks}</td>
              <td className="py-3 pr-8">{data.visits}</td>
              <td className="py-3 pl-8">
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