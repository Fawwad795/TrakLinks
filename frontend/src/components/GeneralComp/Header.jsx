import { Bell, User } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import DateRangeSelector from './DateRangeSelector';

const Header = ({ title, subtitle }) => {
  const location = useLocation();
  
  // Check if current page is dashboard or links
  const showDateSelector = location.pathname === '/dashboard' || location.pathname === '/links';

  // Handle date range change
  const handleDateRangeChange = (range) => {
    // Here you can add any additional logic needed when date range changes
    // For example, fetch new data based on the selected date range
    console.log('Date range changed:', range);
  };

  return (
    <div className="bg-white py-4 px-6 flex justify-between items-center border-b border-gray-100 shadow-sm">
      <div className="flex items-center">
        <div className="mr-8">
          <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        {/* Date Range Selector - Only show on Dashboard and Links pages */}
        {showDateSelector && (
          <DateRangeSelector onRangeChange={handleDateRangeChange} />
        )}

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