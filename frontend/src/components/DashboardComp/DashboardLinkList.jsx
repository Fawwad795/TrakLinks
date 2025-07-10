import React from 'react';
import { useNavigate } from 'react-router-dom';
import EmptyState from '../GeneralComp/EmptyState';

const DashboardLinkList = ({ links, onSelectLink, selectedLinkId }) => {
  const hasLinks = links.length > 0;
  const navigate = useNavigate();
  
  const handleCreateLink = () => {
    navigate('/create-new-link');
  };

  return (
    <div className="w-full h-full">
      {hasLinks ? (
        <div className="overflow-x-auto rounded-xl shadow-sm">
          <table className="w-full border-collapse bg-white">
            {/* Table Header */}
            <thead>
              <tr className="bg-gradient-to-r from-[#312e81] to-[#1E1B4B] text-sm text-white">
                <th className="text-left py-4 px-6 font-medium rounded-tl-xl">Title</th>
                <th className="text-left py-4 px-6 font-medium">Created At</th>
                <th className="text-left py-4 px-6 font-medium rounded-tr-xl">Shortened Link</th>
              </tr>
            </thead>
            
            {/* Table Body */}
            <tbody>
              {links.map((link) => (
                <tr 
                  key={link.id} 
                  className={`border-b border-gray-100 hover:bg-gradient-to-r hover:from-[#f5f5ff] hover:to-white transition-all duration-300 cursor-pointer ${
                    selectedLinkId === link.id ? 'bg-[#f5f5ff]' : ''
                  }`}
                  onClick={() => onSelectLink(link.id)}
                >
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-xs text-gray-800">{link.title}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <p className="text-xs text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
                      {new Date(link.createdAt).toLocaleDateString()}
                    </p>
                  </td>
                  <td className="py-5 px-6">
                    <div className="bg-[#f5f5ff] px-3 py-1.5 rounded-lg inline-block">
                      <p className="text-sm font-medium text-[#6366F1]">
                        traklinks.io/<span className="font-bold">{link.shortUrl.split('/')[1]}</span>
                      </p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <EmptyState
            title="No links yet"
            description="Create your first link to get started"
            buttonText="Create Link"
            buttonAction={handleCreateLink}
          />
        </div>
      )}
    </div>
  );
};

export default DashboardLinkList; 