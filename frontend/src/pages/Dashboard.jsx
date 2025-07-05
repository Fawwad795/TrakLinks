import { useState } from 'react';
import Sidebar from '../components/DashboardComp/Sidebar';
import Header from '../components/DashboardComp/Header';
import EmptyState from '../components/DashboardComp/EmptyState';

const Dashboard = () => {
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
          title="Dashboard" 
          subtitle="Check how your links are performing." 
        />

        {/* Empty State Content */}
        <EmptyState />
      </div>
    </div>
  );
};

export default Dashboard;
