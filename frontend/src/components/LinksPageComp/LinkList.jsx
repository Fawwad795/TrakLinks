import React, { useState } from 'react';
import { FiEdit2, FiCopy, FiBarChart2, FiCheck } from 'react-icons/fi';
import EmptyState from '../GeneralComp/EmptyState';
import dummyLinks from '../../constants/dummyLinks';

const LinkList = () => {
  // In a real app, you would fetch links from an API
  const links = dummyLinks;
  const hasLinks = links.length > 0;
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, shortUrl) => {
    navigator.clipboard.writeText(`https://${shortUrl}`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
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
                <th className="text-left py-4 px-6 font-medium">Destination</th>
                <th className="text-left py-4 px-6 font-medium">Shortened Link</th>
                <th className="text-left py-4 px-6 font-medium rounded-tr-xl">Tools</th>
              </tr>
            </thead>
            
            {/* Table Body */}
            <tbody>
              {links.map((link) => (
                <tr 
                  key={link.id} 
                  className="border-b border-gray-100 hover:bg-gradient-to-r hover:from-[#f5f5ff] hover:to-white transition-all duration-300"
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
                    <p className="text-sm text-gray-600 truncate max-w-[200px] hover:text-[#6366F1] transition-colors duration-300">
                      {link.originalUrl}
                    </p>
                  </td>
                  <td className="py-5 px-6">
                    <div className="bg-[#f5f5ff] px-3 py-1.5 rounded-lg inline-block">
                      <p className="text-sm font-medium text-[#6366F1]">
                        traklinks.io/<span className="font-bold">{link.shortUrl.split('/')[1]}</span>
                      </p>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        className="p-2 rounded-lg hover:bg-[#f5f5ff] transition-all duration-300 cursor-pointer hover:shadow-sm"
                        title="Edit link"
                      >
                        <FiEdit2 className="text-gray-500 text-sm hover:text-[#6366F1] transition-colors duration-300" />
                      </button>
                      <button 
                        className={`p-2 rounded-lg ${copiedId === link.id ? 'bg-[#6366F1]/10 text-[#6366F1]' : 'hover:bg-[#f5f5ff]'} transition-all duration-300 cursor-pointer hover:shadow-sm`}
                        onClick={() => handleCopy(link.id, link.shortUrl)}
                        title={copiedId === link.id ? "Copied!" : "Copy link"}
                      >
                        {copiedId === link.id ? (
                          <FiCheck className="text-[#6366F1] text-sm" />
                        ) : (
                          <FiCopy className="text-gray-500 text-sm hover:text-[#6366F1] transition-colors duration-300" />
                        )}
                      </button>
                      <button 
                        className="p-2 rounded-lg hover:bg-[#f5f5ff] transition-all duration-300 cursor-pointer hover:shadow-sm"
                        title="View analytics"
                      >
                        <FiBarChart2 className="text-gray-500 text-sm hover:text-[#6366F1] transition-colors duration-300" />
                      </button>
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
            buttonAction={() => {}}
          />
        </div>
      )}
    </div>
  );
};

export default LinkList; 