import { useState, useRef, useEffect } from 'react';
import Sidebar from '../components/GeneralComp/Sidebar';
import Header from '../components/GeneralComp/Header';
import LinkList from '../components/LinksPageComp/LinkList';
import { FiSearch, FiFilter } from 'react-icons/fi';

const Links = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef(null);

  // Handle scroll effect for the sticky header
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.scroll-container');
      if (scrollContainer) {
        setIsScrolled(scrollContainer.scrollTop > 10);
      }
    };
    
    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="grid grid-cols-12 min-h-screen">
      {/* Sidebar - takes 3 columns when expanded, 1 when collapsed */}
      <div className={`${isCollapsed ? 'col-span-1' : 'col-span-3'}`}>
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>

      {/* Main Content - takes 9 columns when expanded, 11 when collapsed */}
      <div className={`${isCollapsed ? 'col-span-11' : 'col-span-9'} bg-gradient-to-br from-gray-50 to-white flex flex-col h-screen overflow-hidden`}>
        {/* Scrollable container for the entire content */}
        <div className="flex-1 flex flex-col overflow-auto custom-scrollbar scroll-container">
          {/* Header - Fixed at the top */}
          <div className={`sticky top-0 z-10 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'} transition-all duration-300`}>
            <Header 
              title="Links" 
              subtitle="Manage your shortened links." 
            />

            {/* Filters and Search - Also fixed */}
            <div className="px-6 mt-2 pb-4 flex flex-wrap justify-between items-center gap-4">
              <div 
                ref={searchRef}
                className={`relative flex-1 min-w-[240px] ${isSearchFocused ? '' : 'flex justify-center'}`}
              >
                <FiSearch 
                  className={`${
                    isSearchFocused 
                      ? 'absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-transform duration-500' 
                      : 'absolute left-1/2 -translate-x-[80px] top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-500'
                  }`} 
                />
                <input
                  type="text"
                  placeholder="Search links..."
                  className={`w-full py-2 rounded-lg border transition-all duration-500 ${
                    isSearchFocused 
                      ? 'pl-10 pr-4 bg-white/90 shadow-sm border-[#6366F1]/30 focus:outline-none focus:border-[#6366F1]' 
                      : 'pl-0 pr-0 text-center bg-transparent/50 border-gray-200 placeholder:text-center focus:outline-none rounded-lg'
                  }`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(searchQuery !== '')}
                />
              </div>
              
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 text-gray-700 border border-gray-200 hover:bg-gray-100 transition-colors duration-200">
                  <FiFilter className="text-gray-500" />
                  <span className="text-sm">Filter</span>
                </button>
              </div>
            </div>
          </div>

          {/* Links List - Content */}
          <div className="px-6 flex-1">
            <LinkList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;