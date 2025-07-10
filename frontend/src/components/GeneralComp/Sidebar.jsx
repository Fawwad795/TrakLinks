import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Icons
import { Home, Link as LinkIcon, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import CreateLinkButton from './CreateLinkButton';
import CreateLinkButtonCollapsed from './CreateLinkButtonCollapsed';

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [showCollapseIcon, setShowCollapseIcon] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div 
      className={`bg-white flex flex-col h-full border-r-1 border-[#000000]/10 relative ${isCollapsed ? 'p-3 min-w-full' : 'p-5'} shadow-[2px_0_10px_rgba(0,0,0,0.05)]`}
      onMouseEnter={() => setShowCollapseIcon(true)}
      onMouseLeave={() => setShowCollapseIcon(false)}
    >
      {/* Collapse Button */}
      <div 
        className={`absolute top-6 -right-3 bg-white z-[100] rounded-full p-1 border border-gray-200 cursor-pointer shadow-md transition-opacity duration-200 ${showCollapseIcon ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleToggleCollapse}
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </div>

      <div className={`${isCollapsed ? 'justify-center' : ''} flex mb-5`}>
        {isCollapsed ? (
          <div className="mt-2 w-8 h-8 bg-[#2B2376] rounded-full flex items-center justify-center text-white font-bold text-sm">T</div>
        ) : (
          <h1 className="text-xl font-bold">TrakLinks.</h1>
        )}
      </div>

      {/* Create New Link Button */}
      <div className='mb-3'>
        {isCollapsed ? (
          <CreateLinkButtonCollapsed />
        ) : (
          <CreateLinkButton />
        )}
      </div>

      {/* Separator Line */}
      <div className='h-[1px] bg-gray-200 mb-3'></div>

      {/* Navigation Links */}
      <nav className="mb-auto">
        <Link 
          to="/dashboard" 
          className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} py-3 ${isCollapsed ? 'px-2' : 'px-4'} 
            ${currentPath === '/dashboard' 
              ? 'bg-[#DAD7F4] text-[#2B2376] shadow-[inset_0_0_0_1px_#9488DD]' 
              : 'text-gray-600'} 
            rounded-md mb-2`}
          title="Dashboard"
        >
          <Home size={20} />
          {!isCollapsed && <span>Dashboard</span>}
        </Link>
        <Link 
          to="/links" 
          className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} py-3 ${isCollapsed ? 'px-2' : 'px-4'} 
            ${currentPath === '/links' 
              ? 'bg-[#DAD7F4] text-[#2B2376] shadow-[inset_0_0_0_1px_#9488DD]' 
              : 'text-gray-600'} 
            rounded-md mb-2`}
          title="Links"
        >
          <LinkIcon size={20} />
          {!isCollapsed && <span>Links</span>}
        </Link>
      </nav>

      {/* Settings */}
      <div className="mt-auto">
        <Link 
          to="/settings" 
          className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} py-3 ${isCollapsed ? 'px-2' : 'px-4'} 
            ${currentPath === '/settings' 
              ? 'bg-[#DAD7F4] text-[#2B2376] shadow-[inset_0_0_0_1px_#9488DD]' 
              : 'text-gray-600'} 
            rounded-md`}
          title="Settings"
        >
          <Settings size={20} />
          {!isCollapsed && <span>Settings</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar; 