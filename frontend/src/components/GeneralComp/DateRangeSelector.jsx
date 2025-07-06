import { useState, useRef, useEffect } from 'react';
import { DateRangePicker } from 'react-date-range';
import { format } from 'date-fns';
import { FiCalendar, FiChevronDown } from 'react-icons/fi';

// Import required styles
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DateRangeSelector = ({ onRangeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(new Date().setDate(new Date().getDate() - 7)),
    endDate: new Date(),
    key: 'selection'
  });
  
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle date range change
  const handleRangeChange = (ranges) => {
    setDateRange(ranges.selection);
    onRangeChange && onRangeChange(ranges.selection);
  };

  // Format the date range for display
  const formatDateRange = () => {
    return `${format(dateRange.startDate, 'MMM d, yyyy')} - ${format(dateRange.endDate, 'MMM d, yyyy')}`;
  };

  return (
    <>
      {/* Blur overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)}></div>
      )}
      
      <div className="relative z-50" ref={dropdownRef}>
        {/* Date range selector button */}
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-md bg-[#2B2376] text-white hover:bg-[#352a8e] transition-colors duration-200 hover:cursor-pointer"
        >
          <FiCalendar className="text-white/70" />
          <span className="text-sm">{formatDateRange()}</span>
          <FiChevronDown className={`text-white/70 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Date range picker dropdown */}
        {isOpen && (
          <div className="absolute z-50 mt-2 right-0 backdrop-blur-md bg-[hsl(246,55%,23%)]/75 rounded-lg shadow-lg p-4 animate-fade-in">
            <div className="rounded-lg overflow-hidden">
              {/* Calendar picker with rounded corners */}
              <DateRangePicker
                ranges={[dateRange]}
                onChange={handleRangeChange}
                months={1}
                direction="horizontal"
                rangeColors={["hsl(246,55%,40%)"]}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                className="rounded-lg overflow-hidden"
              />
            </div>
            
            {/* Apply and Cancel buttons */}
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 hover:cursor-pointer text-sm text-white/70 hover:text-white transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 hover:cursor-pointer text-sm bg-[hsl(246,55%,40%)] text-white rounded-lg hover:bg-[hsl(246,55%,50%)] transition-colors duration-200"
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DateRangeSelector; 