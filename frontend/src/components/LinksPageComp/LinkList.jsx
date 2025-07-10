import React, { useState, useRef, useEffect } from 'react';
import { FiEdit2, FiCopy, FiBarChart2, FiCheck, FiTrash2, FiMoreVertical } from 'react-icons/fi';
import EmptyState from '../GeneralComp/EmptyState';
import dummyLinks from '../../constants/dummyLinks';

const LinkList = () => {
  // In a real app, you would fetch links from an API
  const links = dummyLinks;
  const hasLinks = links.length > 0;
  const [copiedId, setCopiedId] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef({});

  const handleCopy = (id, shortUrl) => {
    navigator.clipboard.writeText(`https://${shortUrl}`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Handle delete link
  const handleDelete = (id) => {
    // In a real app, you would call an API to delete the link
    console.log('Delete link with ID:', id);
    // Then update the UI accordingly
    setActiveDropdown(null);
  };

  // Handle dropdown toggle
  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown !== null) {
        const currentRef = dropdownRefs.current[activeDropdown];
        if (currentRef && !currentRef.contains(event.target)) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

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
                <th className="text-left py-4 px-6 font-medium rounded-tr-xl">Actions</th>
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
                      {/* Copy button - always visible */}
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
                      
                      {/* More options dropdown */}
                      <div className="relative" ref={el => dropdownRefs.current[link.id] = el}>
                        <button 
                          className="p-2 rounded-lg hover:bg-[#f5f5ff] transition-all duration-300 cursor-pointer hover:shadow-sm"
                          onClick={() => toggleDropdown(link.id)}
                          title="More options"
                        >
                          <FiMoreVertical className="text-gray-500 text-sm hover:text-[#6366F1] transition-colors duration-300" />
                        </button>
                        
                        {/* Dropdown menu */}
                        {activeDropdown === link.id && (
                          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 py-1 border border-gray-100">
                            <button 
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-[#f5f5ff] cursor-pointer"
                              onClick={() => {
                                console.log('Edit link with ID:', link.id);
                                setActiveDropdown(null);
                              }}
                            >
                              <FiEdit2 className="mr-2 text-gray-500" />
                              Edit link
                            </button>
                            <button 
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-[#f5f5ff] cursor-pointer"
                              onClick={() => {
                                console.log('View analytics for link ID:', link.id);
                                setActiveDropdown(null);
                              }}
                            >
                              <FiBarChart2 className="mr-2 text-gray-500" />
                              View analytics
                            </button>
                            <button 
                              className="flex items-center w-full px-4 py-2 text-sm text-red-500 hover:bg-red-50 cursor-pointer"
                              onClick={() => handleDelete(link.id)}
                            >
                              <FiTrash2 className="mr-2" />
                              Delete link
                            </button>
                          </div>
                        )}
                      </div>
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