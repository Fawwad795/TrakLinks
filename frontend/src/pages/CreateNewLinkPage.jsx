import { useState } from 'react';
import Sidebar from '../components/GeneralComp/Sidebar';
import Header from '../components/GeneralComp/Header';

const CreateNewLinkPage = () => {
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
          title="New Link" 
          subtitle="Create a new, shortened link." 
        />

        {/* Create Link Form will go here */}
        <div className="p-6">
          <p className="text-gray-500">Link creation form will be implemented here.</p>
        </div>
      </div>
    </div>
  );
};

export default CreateNewLinkPage;