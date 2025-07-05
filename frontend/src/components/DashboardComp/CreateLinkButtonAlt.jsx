import { useState } from 'react';
import { Link as LinkIcon, PlusCircle } from 'lucide-react';

const CreateLinkButtonAlt = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button 
      className="w-full bg-white text-[#2B2376] py-3 px-10 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:bg-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
          className={`absolute transition-all duration-300 ${
            isHovered 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-90 scale-0'
          }`} 
        />
      </div>
      <span>Create New Link</span>
    </button>
  );
};

export default CreateLinkButtonAlt; 