import { Link as LinkIcon } from 'lucide-react';
import CreateLinkButtonAlt from './CreateLinkButtonAlt';
import SpotlightCard from '../../lib/SpotlightCard';

const EmptyState = () => {
  return (
    <div className="flex mt-5 h-auto justify-center">
      <SpotlightCard 
        className="w-full mx-4"
        spotlightColor="rgba(99, 102, 241, 0.3)"
        spotlightSize={250}
      >
        <div className="bg-[#2B2376] rounded-lg p-16 w-full flex flex-col items-center shadow-xl shadow-indigo-500/25">
          <div className="bg-white rounded-full p-8 mb-6 z-10">
            <LinkIcon size={40} className="text-indigo-900" />
          </div>
          <h3 className="text-white z-10 text-2xl font-semibold mb-2">You have not created any links yet!</h3>
          <p className="text-gray-300 z-10 text-center mb-8">
            Looks like there's no data available to display analytics at the moment.<br />
            This is where your project links will be displayed once you add them.
          </p>
          <div className="w-60 z-10">
            <CreateLinkButtonAlt />
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
};

export default EmptyState; 