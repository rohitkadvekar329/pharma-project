import React from 'react';
import { FaTimes, FaCopy, FaStar } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { DataVizModalProps } from '../../lib/types'; 

const DataVizModal = ({ isOpen, onClose, asset, isFavorite, toggleFavorite }: DataVizModalProps) => {
  const router = useRouter();

  if (!isOpen || !asset || !asset.dataViz) return null;

  const handleCopyLink = () => {
    const link = `${window.location.origin}/?modal=${asset.id}`;
    navigator.clipboard.writeText(link);
    alert('Link copied to clipboard!');
  };

  const handleKPIClick = (kpiId: string | null) => {
    router.push(`/?modal=${kpiId}`);
  };

  const { dataViz } = asset;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 sm:p-6">
      <div className="bg-white p-4 sm:p-5 rounded-xl shadow-2xl w-full max-w-lg sm:max-w-2xl overflow-y-auto max-h-[80vh] relative">
        {/* Top Right Controls */}
        <div className="absolute top-3 right-3 flex items-center space-x-2">
          <button
            onClick={handleCopyLink}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <FaCopy size={16} />
          </button>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-3 sm:mb-4 text-gray-800">{asset.name}</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 text-center leading-snug">{asset.description}</p>

        {/* Styled Placeholder Background */}
        <div className="w-full h-28 sm:h-32 mb-4 sm:mb-5 bg-gradient-to-r from-purple-200 via-blue-200 to-indigo-300 rounded-lg border border-gray-300 shadow-lg flex items-center justify-center">
          <p className="text-gray-600 text-xs sm:text-sm italic">Future Chart Placeholder</p>
        </div>

        <div className="mb-4 sm:mb-5">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Asset Info Context</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{dataViz.asset_info_context}</p>
        </div>

        <div className="mb-4 sm:mb-5">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Applicable KPI Favorites</h3>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {dataViz.applicable_kpi_favourite.map((kpi, index) => (
              <div
                key={index}
                onClick={() => handleKPIClick(kpi.assetId)} // Open the KPI modal with the corresponding id
                className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs shadow-sm cursor-pointer hover:bg-blue-200 transition-all duration-200"
              >
                {kpi.name}
              </div>
            ))}
          </div>
        </div>

        {/* Last Updated Section */}
        <div className="mb-4 sm:mb-5">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Last Updated</h3>
          <p className="text-sm text-gray-600">
            17-08-2024
          </p>
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => toggleFavorite(asset.id)}
          className={`w-full px-4 py-2 sm:px-5 sm:py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 ${isFavorite ? 'bg-yellow-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
        >
          <FaStar
            className={`text-lg ${isFavorite ? 'text-white' : 'text-gray-300'}`}
          />
          <span className="text-sm sm:text-base font-medium truncate">
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default DataVizModal;
