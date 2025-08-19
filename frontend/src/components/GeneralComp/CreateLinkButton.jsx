import { FiLink, FiPlus } from "react-icons/fi";
import SpotlightCard from "../../lib/SpotlightCard";
import { Link } from "react-router-dom";

const CreateLinkButton = () => {
  return (
    <div className="w-full rounded-md overflow-hidden">
      <SpotlightCard
        spotlightColor="rgba(99, 102, 241, 0.3)"
        spotlightSize={80}
        className="w-full"
      >
        <Link to="/create-new-link">
          <button className="w-full bg-[#2B2376] text-white py-3 px-4 rounded-md flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:bg-[#352a8e]">
            <span className="z-10">Create New Link</span>
          </button>
        </Link>
      </SpotlightCard>
    </div>
  );
};

export default CreateLinkButton;
