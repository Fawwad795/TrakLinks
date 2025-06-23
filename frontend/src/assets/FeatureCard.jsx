// Feature Card Component
export const FeatureCard = ({ card }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
      <div className="flex flex-col md:flex-row items-center px-6 flex-grow">
        {/* Left side with icon */}
        <div className="w-full md:w-1/3 flex justify-center items-center p-6">
          <div className="bg-[#F6F4FF] p-6 rounded-full transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
            <img
              src={card.icon}
              alt={card.title}
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>

        {/* Right side with content */}
        <div className="w-full md:w-3/5 pt-5">
          <div className="relative md:mb-3 mb-4 md:w-6/5">
            <h3 className="lg:text-2xl text-xl font-bold text-[#27215B] mb-1 sm:text-center md:text-left">
              {card.title}
            </h3>
          </div>
          <p className="text-gray-700 lg:text-lg md:text-[11px] sm:text-sm lg:mb-6 md:mb-3 sm:mb-3 leading-relaxed">
            {card.description}
          </p>
          <div className="flex flex-wrap lg:gap-3 gap-2 sm:w-full">
            {card.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#F6F4FF] text-[#695BC4] px-3 py-1 rounded-full md:text-[8px] lg:text-sm sm:text-xs font-medium transition-all duration-300 hover:bg-[#695BC4] hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card footer with gradient border top */}
      <div className="border-t border-gray-100 bg-[#27215B]/20 px-4 py-2 flex justify-between items-center">
        <span className="lg:text-sm sm:text-xs text-gray-600">
          Available on all plans
        </span>
        <button className="bg-[#27215B] text-white lg:text-sm sm:text-xs px-4 py-2 rounded-lg hover:bg-[#695BC4] transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group">
          Learn more
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transform transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
