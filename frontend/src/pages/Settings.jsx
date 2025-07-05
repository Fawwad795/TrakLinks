import { useState } from 'react';
import Sidebar from '../components/GeneralComp/Sidebar';
import Header from '../components/GeneralComp/Header';

const Settings = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="grid grid-cols-12 min-h-screen">
      {/* Sidebar - takes 3 columns when expanded, 1 when collapsed */}
      <div className={`${isCollapsed ? 'col-span-1' : 'col-span-3'}`}>
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>

      {/* Main Content - takes 9 columns when sidebar expanded, 11 when collapsed */}
      <div className={`${isCollapsed ? 'col-span-11' : 'col-span-9'} bg-gray-100 flex flex-col`}>
        {/* Header */}
        <Header 
          title="Settings" 
          subtitle="Configure TrakLinks to your liking." 
        />

        {/* Settings Content will go here */}
        <div className="p-6">
          <p className="text-gray-500">Settings content will be implemented here.</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;