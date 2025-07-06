import React, { useState } from 'react';
import { FiEdit2, FiCopy, FiBarChart2 } from 'react-icons/fi';

const LinkCard = ({ link }) => {
  const { title, originalUrl, shortUrl, icon: Icon, createdAt } = link;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://${shortUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl p-3 hover:bg-gradient-to-r hover:from-[#f5f5ff] hover:to-white transition-all duration-300 shadow-sm hover:shadow-md mb-3 border border-transparent hover:border-[#6366F1]/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[hsl(246,55%,97%)] group-hover:bg-[hsl(246,55%,95%)] transition-all duration-300 shadow-sm">
            <Icon className="text-[hsl(246,55%,40%)] text-lg" />
          </div>
          <div>
            <h3 className="font-medium text-gray-800 text-base">{title}</h3>
            <div className="flex items-center">
              <p className="text-xs text-gray-500 truncate max-w-[300px]">{originalUrl}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button 
            className="p-2 rounded-lg hover:bg-[hsl(246,55%,95%)] transition-all duration-300 cursor-pointer hover:scale-110 focus:scale-110 group"
            title="Edit link"
          >
            <FiEdit2 className="text-gray-500 text-sm group-hover:text-[hsl(246,55%,40%)] transition-colors duration-300" />
          </button>
          <button 
            className="p-2 rounded-lg hover:bg-[hsl(246,55%,95%)] transition-all duration-300 cursor-pointer hover:scale-110 focus:scale-110 group"
            onClick={handleCopy}
            title={copied ? "Copied!" : "Copy link"}
          >
            <FiCopy className={`text-sm transition-colors duration-300 ${copied ? 'text-[hsl(246,55%,40%)]' : 'text-gray-500 group-hover:text-[hsl(246,55%,40%)]'}`} />
          </button>
          <button 
            className="p-2 rounded-lg hover:bg-[hsl(246,55%,95%)] transition-all duration-300 cursor-pointer hover:scale-110 focus:scale-110 group"
            title="View analytics"
          >
            <FiBarChart2 className="text-gray-500 text-sm group-hover:text-[hsl(246,55%,40%)] transition-colors duration-300" />
          </button>
        </div>
      </div>

      <div className="flex justify-between mt-2 items-center pt-2 border-t border-gray-100">
        <div className="flex items-center">
          <p className="text-xs font-medium text-gray-700">traklinks.io/<span className="text-[#6366F1]">{shortUrl.split('/')[1]}</span></p>
        </div>
        <div>
          <span className="px-2 py-0.5 text-xs rounded-full bg-[#f5f5ff] text-[#6366F1] font-medium">
            {new Date(createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LinkCard; 