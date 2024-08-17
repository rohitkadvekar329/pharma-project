import { useState } from 'react';
import { FaTimes, FaStar, FaLock, FaChevronLeft, FaChevronRight, FaCopy } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { StoryboardModalProps } from '../../lib/types';  

const StoryboardModal = ({ isOpen, onClose, asset, isFavorite, toggleFavorite }: StoryboardModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();
  const imagesCount = asset?.storyboard?.kpis_being_used.length || 10; // Default to 10 images if not provided

  if (!isOpen || !asset || !asset.storyboard) return null;

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imagesCount - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === imagesCount - 1 ? 0 : prevIndex + 1));
  };

  const handleCopyLink = () => {
    const link = `${window.location.origin}/?modal=${asset.id}`;
    navigator.clipboard.writeText(link);
    alert('Link copied to clipboard!');
  };

  const handleKpiClick = (assetId: string | null) => {
    router.push(`/?modal=${assetId}`, { scroll: false });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 sm:p-0">
      <div className="bg-white rounded-md shadow-lg max-w-[560px] w-full lg:max-w-4xl overflow-hidden max-h-[80vh] relative flex flex-col lg:flex-row">
        {/* Left Side: Image Carousel */}
        <div className="relative w-full lg:w-1/2 h-60 lg:h-auto bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-700 text-base font-medium italic">
              Storyboard Preview Layout - {currentImageIndex + 1}
            </p>
          </div>
          <button
            onClick={handlePrevClick}
            className="absolute top-1/2 transform -translate-y-1/2 left-3 bg-gray-700 text-white p-2 rounded-full opacity-80 hover:opacity-90 transition-opacity duration-200"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={handleNextClick}
            className="absolute top-1/2 transform -translate-y-1/2 right-3 bg-gray-700 text-white p-2 rounded-full opacity-80 hover:opacity-90 transition-opacity duration-200"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Right Side: Content */}
        <div className="p-4 lg:p-6 w-full lg:w-1/2 overflow-y-auto">
          {/* Top Right Controls */}
          <div className="absolute top-2 right-2 lg:top-4 lg:right-4 flex items-center space-x-2">
            <button
              onClick={handleCopyLink}
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <FaCopy size={18} />
            </button>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <FaTimes size={18} />
            </button>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mb-3">{asset.name}</h2>
          <p className="text-sm text-gray-700 mb-4">{asset.description}</p>

          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">KPIs Being Used</h3>
            <div className="flex flex-wrap gap-2">
              {asset.storyboard.kpis_being_used.map((kpi, index) => (
                <div
                  key={index}
                  onClick={() => handleKpiClick(kpi.assetId)}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs shadow-sm cursor-pointer hover:bg-blue-200 transition-all duration-200"
                >
                  {kpi.name}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Applicable Affiliates</h3>
            <div className="flex flex-wrap gap-2">
              <div
                onClick={() => onClose()}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs shadow-sm cursor-pointer hover:bg-blue-200 transition-all duration-200"
              >
                {asset.storyboard.affiliate_applicable}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Last Updated</h3>
            <p className="text-sm text-gray-700">
              17-08-2024
            </p>
          </div>

          {/* Favorite and Request Access Buttons */}
          <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3">
            <button
              onClick={() => toggleFavorite(asset.id)}
              className={`w-full lg:w-[48%] px-4 py-2 rounded-md transition-colors duration-300 flex items-center justify-center space-x-2 ${isFavorite ? 'bg-yellow-500 text-white hover:bg-yellow-600' : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
            >
              <FaStar
                className={`text-lg ${isFavorite ? 'text-white' : 'text-gray-300'}`}
              />
              <span className="text-sm font-medium truncate">
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
              </span>
            </button>

            <button
              onClick={() => alert('Request Access')}
              className="w-full lg:w-[48%] px-4 py-2 rounded-md bg-gray-500 text-white hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center"
            >
              <FaLock className="mr-2" />
              <span className="text-sm font-medium truncate">Request Access</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryboardModal;
