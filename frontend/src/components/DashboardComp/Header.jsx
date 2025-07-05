import { useState } from 'react';
import { ChevronDown, Bell, Search, User } from 'lucide-react';

const Header = ({ title, subtitle }) => {
  const [dateRange, _setDateRange] = useState('28 Dec 22 - 10 Jan 23');

  return (
    <div className="bg-white py-4 px-6 flex justify-between items-center border-b border-gray-100 shadow-sm">
      <div className="flex items-center">
        <div className="mr-8">
          <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        {/* Date Range Selector */}
        <div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 hover:bg-[#DAD7F4]/20 cursor-pointer hover:border-[#9488DD] transition-colors text-sm">
          <span className="text-gray-700">{dateRange}</span>
          <ChevronDown size={16} className="text-gray-700" />
        </div>

        {/* Notification Icon */}
        <div className="relative cursor-pointer p-1.5 border border-gray-200 rounded-full hover:bg-[#DAD7F4]/20 hover:border-[#9488DD] transition-colors">
          <Bell size={20} className="text-gray-700" />
          <span className="absolute top-0 right-0 bg-red-500 w-2 h-2 rounded-full"></span>
        </div>

        {/* User Profile */}
        <div className="flex items-center cursor-pointer">
          <div className="w-8 h-8 bg-[#2B2376] rounded-full flex items-center justify-center text-white">
            <User size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 