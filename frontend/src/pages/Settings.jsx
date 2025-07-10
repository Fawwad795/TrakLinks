import { useState } from 'react';
import Sidebar from '../components/GeneralComp/Sidebar';
import Header from '../components/GeneralComp/Header';
import { User, Clock, Globe, AlertTriangle, Edit2, Trash2 } from 'lucide-react';

const Settings = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  // Mock user data - replace with actual user data in a real implementation
  const userData = {
    name: 'Fawwad Ahmed',
    email: 'rehmanov.siddique@gmail.com',
    plan: 'Basic'
  };

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

        {/* Settings Content */}
        <div className="p-6 space-y-6 custom-scrollbar overflow-y-auto">
          {/* Account Settings Section */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-800">Account settings</h2>
          </div>

          {/* Profile Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
            <div className="space-y-1">
              <h3 className="text-base font-medium text-gray-700">Profile</h3>
              <p className="text-xs text-gray-500">User details</p>
            </div>

            <div className="flex items-center justify-between border-b pb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <User size={24} className="text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">{userData.name}</p>
                  <p className="text-sm text-gray-500">{userData.email}</p>
                </div>
              </div>
              <button className="p-2 rounded-full bg-[#DAD7F4] text-[#2B2376] hover:bg-[#9488DD]/20 transition-colors">
                <Edit2 size={16} />
              </button>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-3">
                <div className="text-amber-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-dollar-sign">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
                    <path d="M12 18V6"/>
                  </svg>
                </div>
                <span className="font-medium">Account plan</span>
              </div>
              <div className="text-gray-700">{userData.plan}</div>
            </div>
          </div>

          {/* Danger Zone Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <AlertTriangle size={18} className="text-red-500" />
                <h3 className="text-base font-medium text-gray-700">Danger Zone</h3>
              </div>
              <p className="text-xs text-gray-500">Be careful what you do here!</p>
            </div>

            <div className="border-t pt-4">
              <p className="text-sm text-gray-600 mb-4">
                This action will delete your TrakLinks account entirely, including all posts, labels, workspaces, and all other
                data associated with it.
              </p>
              <button className="flex items-center space-x-2 px-4 py-2 border border-red-300 text-red-500 rounded-md hover:bg-red-50 transition-colors">
                <Trash2 size={18} />
                <span>Delete account</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;