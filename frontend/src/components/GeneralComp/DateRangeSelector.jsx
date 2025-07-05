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

  // Predefined ranges
  const predefinedRanges = {
    'Today': {
      startDate: new Date(),
      endDate: new Date()
    },
    'Yesterday': {
      startDate: new Date(new Date().setDate(new Date().getDate() - 1)),
      endDate: new Date(new Date().setDate(new Date().getDate() - 1))
    },
    'Last 7 Days': {
      startDate: new Date(new Date().setDate(new Date().getDate() - 7)),
      endDate: new Date()
    },
    'Last 30 Days': {
      startDate: new Date(new Date().setDate(new Date().getDate() - 30)),
      endDate: new Date()
    },
    'This Month': {
      startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      endDate: new Date()
    }
  };

  // Apply a predefined range
  const applyPredefinedRange = (rangeName) => {
    const range = predefinedRanges[rangeName];
    if (range) {
      const newRange = {
        ...dateRange,
        startDate: range.startDate,
        endDate: range.endDate
      };
      setDateRange(newRange);
      onRangeChange && onRangeChange(newRange);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Date range selector button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-md bg-[hsl(246,55%,20%)] text-white hover:bg-[hsl(246,55%,25%)] transition-colors duration-200"
      >
        <FiCalendar className="text-white/70" />
        <span className="text-sm">{formatDateRange()}</span>
        <FiChevronDown className={`text-white/70 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Date range picker dropdown */}
      {isOpen && (
        <div className="absolute z-50 mt-2 right-0 backdrop-blur-md bg-[hsl(246,55%,15%)] rounded-lg shadow-lg p-4 animate-fade-in">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Predefined ranges */}
            <div className="w-full md:w-48 space-y-2">
              <p className="text-white/70 text-sm font-medium mb-2">Quick Select</p>
              {Object.keys(predefinedRanges).map((rangeName) => (
                <button
                  key={rangeName}
                  onClick={() => applyPredefinedRange(rangeName)}
                  className="w-full text-left px-3 py-2 text-sm text-white hover:bg-[hsl(246,55%,25%)] rounded transition-colors duration-200"
                >
                  {rangeName}
                </button>
              ))}
            </div>
            
            {/* Calendar picker */}
            <DateRangePicker
              ranges={[dateRange]}
              onChange={handleRangeChange}
              months={1}
              direction="horizontal"
              rangeColors={["hsl(246,55%,40%)"]}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
            />
          </div>
          
          {/* Apply and Cancel buttons */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-sm bg-[hsl(246,55%,40%)] text-white rounded-lg hover:bg-[hsl(246,55%,50%)] transition-colors duration-200"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangeSelector; 