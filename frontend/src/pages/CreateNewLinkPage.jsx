import { useState } from 'react';
import Sidebar from '../components/GeneralComp/Sidebar';
import Header from '../components/GeneralComp/Header';
import { FiLink, FiTag, FiInfo, FiCheck, FiImage, FiUpload } from 'react-icons/fi';

const CreateNewLinkPage = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    destination: '',
    internalName: '',
    thumbnail: null,
    title: '',
    description: ''
  });
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [hoveredStep, setHoveredStep] = useState(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle thumbnail upload
  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, thumbnail: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Trigger file input click
  const triggerFileInput = () => {
    document.getElementById('thumbnail-upload').click();
  };

  // Handle step navigation
  const handleNextStep = () => {
    if (activeStep < 2) {
      setActiveStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would send the data to your backend API
  };

  return (
    <div className="grid grid-cols-12 h-screen relative">
      {/* Sidebar - takes 3 columns when expanded, 1 when collapsed */}
      <div className={`${isCollapsed ? 'col-span-1' : 'col-span-3'} h-screen sticky top-0 z-[200]`}>
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>

      {/* Main Content - takes 9 columns when sidebar expanded, 11 when collapsed */}
      <div className={`${isCollapsed ? 'col-span-11' : 'col-span-9'} bg-gradient-to-br from-gray-50 to-white flex flex-col h-screen overflow-hidden`}>
        {/* Header - Fixed at the top */}
        <div className="sticky top-0 z-[90] bg-white shadow-sm">
          <Header 
            title="New Link" 
            subtitle="Create a new, shortened link." 
          />
        </div>

        {/* Create Link Form - Scrollable content */}
        <div className="flex-1 p-6 overflow-auto custom-scrollbar">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden mb-6">
            <form onSubmit={handleSubmit}>
              <div className="flex">
                {/* Left side - Vertical Stepper */}
                <div className="w-24 bg-gradient-to-b from-[#312e81] to-[#1E1B4B] py-8 flex flex-col items-center">
                  {/* Step 1 - Destination */}
                  <div 
                    className={`relative w-full py-4 flex flex-col items-center cursor-pointer`}
                    onClick={() => setActiveStep(0)}
                    onMouseEnter={() => setHoveredStep(0)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activeStep === 0 
                          ? 'bg-white text-[#1E1B4B]' 
                          : activeStep > 0 
                            ? 'bg-green-500 text-white' 
                            : 'bg-white/30 text-white'
                      }`}
                    >
                      <div className="relative w-5 h-5 flex items-center justify-center">
                        <FiCheck 
                          size={20} 
                          className={`absolute transition-all duration-300 ${
                            activeStep > 0 && hoveredStep !== 0
                              ? 'opacity-100 rotate-0 scale-100' 
                              : 'opacity-0 rotate-90 scale-0'
                          }`}
                        />
                        <FiLink 
                          size={20} 
                          className={`absolute transition-all duration-300 ${
                            activeStep > 0 && hoveredStep !== 0
                              ? 'opacity-0 rotate-90 scale-0' 
                              : 'opacity-100 rotate-0 scale-100'
                          }`}
                        />
                      </div>
                    </div>
                    <span className="text-xs text-white mt-2">Destination</span>
                    {activeStep === 0 && (
                      <div className="absolute right-0 w-1 h-10 bg-white rounded-l-md"></div>
                    )}
                  </div>

                  {/* Connector Line */}
                  <div className="w-0.5 h-8 bg-white/30"></div>

                  {/* Step 2 - Internal Name */}
                  <div 
                    className={`relative w-full py-4 flex flex-col items-center cursor-pointer ${
                      activeStep >= 0 ? '' : 'opacity-50'
                    }`}
                    onClick={() => formData.destination && setActiveStep(1)}
                    onMouseEnter={() => setHoveredStep(1)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activeStep === 1 
                          ? 'bg-white text-[#1E1B4B]' 
                          : activeStep > 1 
                            ? 'bg-green-500 text-white' 
                            : 'bg-white/30 text-white'
                      }`}
                    >
                      <div className="relative w-5 h-5 flex items-center justify-center">
                        <FiCheck 
                          size={20} 
                          className={`absolute transition-all duration-300 ${
                            activeStep > 1 && hoveredStep !== 1
                              ? 'opacity-100 rotate-0 scale-100' 
                              : 'opacity-0 rotate-90 scale-0'
                          }`}
                        />
                        <FiTag 
                          size={20} 
                          className={`absolute transition-all duration-300 ${
                            activeStep > 1 && hoveredStep !== 1
                              ? 'opacity-0 rotate-90 scale-0' 
                              : 'opacity-100 rotate-0 scale-100'
                          }`}
                        />
                      </div>
                    </div>
                    <span className="text-xs text-white mt-2">Internal</span>
                    <span className="text-xs text-white">Name</span>
                    {activeStep === 1 && (
                      <div className="absolute right-0 w-1 h-10 bg-white rounded-l-md"></div>
                    )}
                  </div>

                  {/* Connector Line */}
                  <div className="w-0.5 h-8 bg-white/30"></div>

                  {/* Step 3 - Metadata */}
                  <div 
                    className={`relative w-full py-4 flex flex-col items-center cursor-pointer ${
                      activeStep >= 1 ? '' : 'opacity-50'
                    }`}
                    onClick={() => formData.internalName && setActiveStep(2)}
                    onMouseEnter={() => setHoveredStep(2)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activeStep === 2 
                          ? 'bg-white text-[#1E1B4B]' 
                          : activeStep > 2 
                            ? 'bg-green-500 text-white' 
                            : 'bg-white/30 text-white'
                      }`}
                    >
                      <div className="relative w-5 h-5 flex items-center justify-center">
                        <FiCheck 
                          size={20} 
                          className={`absolute transition-all duration-300 ${
                            activeStep > 2 && hoveredStep !== 2
                              ? 'opacity-100 rotate-0 scale-100' 
                              : 'opacity-0 rotate-90 scale-0'
                          }`}
                        />
                        <FiInfo 
                          size={20} 
                          className={`absolute transition-all duration-300 ${
                            activeStep > 2 && hoveredStep !== 2
                              ? 'opacity-0 rotate-90 scale-0' 
                              : 'opacity-100 rotate-0 scale-100'
                          }`}
                        />
                      </div>
                    </div>
                    <span className="text-xs text-white mt-2">Metadata</span>
                    {activeStep === 2 && (
                      <div className="absolute right-0 w-1 h-10 bg-white rounded-l-md"></div>
                    )}
                  </div>
                </div>

                {/* Right side - Form Content */}
                <div className="flex-1 p-6 max-h-[calc(100vh-160px)] overflow-y-auto custom-scrollbar">
                  {/* Step 1 Content - Destination */}
                  {activeStep === 0 && (
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium text-[#1E1B4B]">Destination</h3>
                        <p className="text-sm text-gray-500">Enter the target URL of the link you want to shorten</p>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          URL
                        </label>
                        <input
                          type="url"
                          name="destination"
                          value={formData.destination}
                          onChange={handleInputChange}
                          placeholder="https://your-target-url.com"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition-all duration-200"
                          required
                        />
                      </div>
                      <div className="pt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={handleNextStep}
                          disabled={!formData.destination}
                          className={`px-6 py-2 rounded-lg text-white ${
                            formData.destination
                              ? 'bg-[#1E1B4B] hover:bg-[#312e81] cursor-pointer'
                              : 'bg-gray-300 cursor-not-allowed'
                          } transition-colors duration-200`}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2 Content - Internal Name */}
                  {activeStep === 1 && (
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium text-[#1E1B4B]">Internal Name</h3>
                        <p className="text-sm text-gray-500">Give a name for this link you want to save it as in this app</p>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          My Platform's URL/Link
                        </label>
                        <input
                          type="text"
                          name="internalName"
                          value={formData.internalName}
                          onChange={handleInputChange}
                          placeholder="My Youtube's Link"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition-all duration-200"
                          required
                        />
                      </div>
                      <div className="pt-4 flex justify-between">
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={handleNextStep}
                          disabled={!formData.internalName}
                          className={`px-6 py-2 rounded-lg text-white ${
                            formData.internalName
                              ? 'bg-[#1E1B4B] hover:bg-[#312e81] cursor-pointer'
                              : 'bg-gray-300 cursor-not-allowed'
                          } transition-colors duration-200`}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3 Content - Metadata */}
                  {activeStep === 2 && (
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium text-[#1E1B4B]">Metadata</h3>
                        <p className="text-sm text-gray-500">Customize the link's metadata as you want other viewer's to see</p>
                      </div>
                      
                      {/* Thumbnail Upload */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Thumbnail
                        </label>
                        <div 
                          className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-[#6366F1] transition-colors duration-200"
                          onClick={triggerFileInput}
                        >
                          {thumbnailPreview ? (
                            <div className="relative">
                              <img 
                                src={thumbnailPreview} 
                                alt="Thumbnail preview" 
                                className="mx-auto h-40 object-contain"
                              />
                              <button 
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation(); // Prevent triggering the parent onClick
                                  setThumbnailPreview(null);
                                  setFormData(prev => ({ ...prev, thumbnail: null }));
                                }}
                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 cursor-pointer"
                              >
                                &times;
                              </button>
                            </div>
                          ) : (
                            <div className="py-10">
                              <FiImage className="mx-auto h-12 w-12 text-gray-400" />
                              <div className="mt-4 flex text-sm text-gray-600 justify-center">
                                <div className="relative cursor-pointer bg-white rounded-md font-medium text-[#6366F1] hover:text-[#4F46E5] focus-within:outline-none">
                                  <span>Drag & drop your image here</span>
                                  <span className="block text-xs">or click to select a file</span>
                                  <input
                                    id="thumbnail-upload"
                                    name="thumbnail"
                                    type="file"
                                    className="sr-only"
                                    accept="image/*"
                                    onChange={handleThumbnailChange}
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Title */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Title
                        </label>
                        <input
                          type="text"
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          placeholder="10 ways to use UTM tags in your links"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition-all duration-200"
                        />
                      </div>
                      
                      {/* Description */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Description
                        </label>
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder="In this article, we will show you how to use the UTM tags to increase your link's click-through rate."
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition-all duration-200"
                        />
                      </div>
                      
                      <div className="pt-4 flex justify-between">
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-2 rounded-lg text-white bg-[#1E1B4B] hover:bg-[#312e81] transition-colors duration-200 cursor-pointer"
                        >
                          Create New Link
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewLinkPage;