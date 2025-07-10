import { Bell, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import DateRangeSelector from './DateRangeSelector';

const Header = ({ title, subtitle }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Check if current page is dashboard or links
  const showDateSelector = location.pathname === '/dashboard' || location.pathname === '/links';
  
  // Check if current page is settings
  const isSettingsPage = location.pathname === '/settings';

  // Handle date range change
  const handleDateRangeChange = (range) => {
    // Here you can add any additional logic needed when date range changes
    // For example, fetch new data based on the selected date range
    console.log('Date range changed:', range);
  };
  
  // Navigate to settings page
  const navigateToSettings = () => {
    navigate('/settings');
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
        <div 
          className={`flex items-center cursor-pointer ${
            isSettingsPage 
              ? 'bg-[#2B2376] rounded-full p-1.5' 
              : 'p-1.5 border border-gray-200 rounded-full hover:bg-[#DAD7F4]/20 hover:border-[#9488DD] transition-colors'
          }`}
          onClick={navigateToSettings}
        >
          <div className={`w-5 h-5 flex items-center justify-center ${isSettingsPage ? 'text-white' : 'text-gray-700'}`}>
            <User size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 