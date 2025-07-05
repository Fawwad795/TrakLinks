import { useState } from 'react';
import { Link as LinkIcon, PlusCircle } from 'lucide-react';
import SpotlightCard from '../../lib/SpotlightCard';
import { Link } from 'react-router-dom';

const CreateLinkButtonCollapsed = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full rounded-md overflow-hidden">
      <SpotlightCard 
        spotlightColor="rgba(99, 102, 241, 0.3)" 
        spotlightSize={50}
        className="w-full"
      >
        <Link to="/create-new-link">
        <button 
          className="w-full bg-[#2B2376] text-white p-2 rounded-md py-3 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#352a8e]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          title="Create New Link"
        >
          <div className="relative w-5 h-5">
            <LinkIcon 
              size={20} 
              className={`absolute transition-all duration-300 ${
                isHovered 
                  ? 'opacity-0 rotate-90 scale-0' 
                  : 'opacity-100 rotate-0 scale-100'
              }`} 
            />
            <PlusCircle 
              size={20} 
              className={`absolute transition-all duration-300 z-10 ${
                isHovered 
                  ? 'opacity-100 rotate-0 scale-100' 
                  : 'opacity-0 rotate-90 scale-0'
              }`} 
            />
          </div>
        </button>
        </Link>
      </SpotlightCard>
    </div>
  );
};

export default CreateLinkButtonCollapsed; 