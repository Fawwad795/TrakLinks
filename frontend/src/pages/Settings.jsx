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
      <div className={`${isCollapsed ? 'col-span-11' : 'col-span-9'} bg-gray-100 flex flex-col h-screen`}>
        {/* Header */}
        <Header 
          title="Settings" 
          subtitle="Configure TrakLinks to your liking." 
        />

        {/* Settings Content - Added custom-scrollbar class and flex-grow to make it scrollable */}
        <div className="p-6 space-y-6 custom-scrollbar overflow-y-auto flex-grow">
          {/* Account Settings Section */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-[#2B2376]">Account settings</h2>
          </div>

          {/* Profile Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
            <div className="space-y-1">
              <h3 className="text-base font-medium text-[#2B2376]">Profile</h3>
              <p className="text-xs text-gray-500">User details</p>
            </div>

            <div className="flex items-center justify-between border-b pb-6">
              <div className="flex items-center space-x-4">
                <div className="p-1.5 bg-[#2B2376] rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 flex items-center justify-center text-white">
                    <User size={24} />
                  </div>
                </div>
                <div>
                  <p className="font-medium">{userData.name}</p>
                  <p className="text-sm text-gray-500">{userData.email}</p>
                </div>
              </div>
              <div className="p-1.5 border border-gray-200 rounded-full hover:bg-[#DAD7F4]/20 hover:border-[#9488DD] transition-colors cursor-pointer">
                <div className="w-5 h-5 flex items-center justify-center text-gray-700">
                  <Edit2 size={20} />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-3">
                <span className="font-medium">Account plan</span>
              </div>
              <p className="text-gray-700">{userData.plan}</p>
            </div>
          </div>

          {/* Danger Zone Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <AlertTriangle size={20} className="text-red-500" />
                <h3 className="text-base font-medium text-[#2B2376]">Danger Zone</h3>
              </div>
              <p className="text-xs text-gray-500">Be careful what you do here!</p>
            </div>

            <div className="border-t pt-4">
              <p className="text-sm text-gray-600 mb-4">
                This action will delete your TrakLinks account entirely, including all posts, labels, workspaces, and all other
                data associated with it.
              </p>
              <button className="flex items-center space-x-2 px-4 py-2 border border-red-300 text-red-500 rounded-md hover:bg-red-50 transition-colors cursor-pointer">
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