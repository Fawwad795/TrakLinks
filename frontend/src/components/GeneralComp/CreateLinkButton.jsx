import { useState } from 'react';
import { FiLink, FiPlus } from 'react-icons/fi';
import SpotlightCard from '../../lib/SpotlightCard';
import { Link } from 'react-router-dom';

const CreateLinkButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full rounded-md overflow-hidden">
      <SpotlightCard 
        spotlightColor="rgba(99, 102, 241, 0.3)" 
        spotlightSize={80}
        className="w-full"
      >
        <Link to="/create-new-link">
        <button 
          className="w-full bg-[#2B2376] text-white py-3 px-4 rounded-md flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:bg-[#352a8e]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            {/* Combined Link and Plus Icon */}
            <div className={`absolute transition-all duration-300 ${
              isHovered 
                ? 'opacity-0 rotate-90 scale-0' 
                : 'opacity-100 rotate-0 scale-100'
            }`}>
              <FiLink size={20} />
              <div className="absolute -top-1.5 right-3 bg-white rounded-full w-3.5 h-3.5 flex items-center justify-center">
                <FiPlus size={14} className="text-[#2B2376]" />
              </div>
            </div>
            
            {/* Hover state icon */}
            <div className={`absolute transition-all duration-300 ${
              isHovered 
                ? 'opacity-100 rotate-0 scale-100' 
                : 'opacity-0 rotate-90 scale-0'
            }`}>
              <FiLink size={20} strokeWidth={2.5} />
              <div className="absolute top-3 -right-1.5 bg-white rounded-full w-3.5 h-3.5 flex items-center justify-center">
                <FiPlus size={14} className="text-[#2B2376]" strokeWidth={2} />
              </div>
            </div>
          </div>
          <span className='z-10'>Create New Link</span>
        </button>
        </Link>
      </SpotlightCard>
    </div>
  );
};

export default CreateLinkButton; 