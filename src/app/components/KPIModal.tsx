import React from 'react';
import { FaTimes, FaCopy, FaStar } from 'react-icons/fa';
import { KPIModalProps } from '../../lib/types';  // Import the KPIModalProps type

const KPIModal = ({ isOpen, onClose, asset, isFavorite, toggleFavorite }: KPIModalProps) => {
  if (!isOpen || !asset || !asset.kpi) return null;

  const handleCopyLink = () => {
    const link = `${window.location.origin}/?modal=${asset.id}`;
    navigator.clipboard.writeText(link);
    alert('Link copied to clipboard!');
  };

  const { kpi } = asset;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-md shadow-lg w-full max-w-4xl lg:mx-8 max-h-[90vh] relative flex flex-col lg:flex-row">
        {/* Left Side: Gradient Background */}
        <div className="w-full lg:w-1/2 h-48 lg:h-auto bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 flex items-center justify-center overflow-hidden rounded-t-md lg:rounded-l-md lg:rounded-t-none">
          <div className="text-gray-700 text-base font-medium">KPI Image Placeholder</div>
        </div>

        {/* Right Side: Content */}
        <div className="p-4 lg:p-6 w-full lg:w-1/2 overflow-y-auto">
          {/* Top Right Controls */}
          <div className="absolute top-3 right-3 lg:top-5 lg:right-5 flex items-center space-x-2">
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
              <FaTimes size={20} />
            </button>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mb-2">{asset.name}</h2>
          <p className="text-sm text-gray-700 mb-4">{asset.description}</p>

          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Business Questions</h3>
            <div className="flex flex-wrap gap-2">
              {kpi.businessQuestions.map((question) => (
                <div key={question.question} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs shadow-sm">
                  {question.question}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Metrics</h3>
            <div className="flex flex-wrap gap-2">
              {kpi.metrics.map((metric) => (
                <div key={metric.name} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs shadow-sm">
                  {metric.name}: {metric.value}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Calculation</h3>
            <p className="text-sm text-gray-600 mb-2">{kpi.calculation}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Visuals Available</h3>
            <p className="text-sm text-gray-600">
              {kpi.visuals_available ? 'Visuals are available.' : 'No visuals available.'}
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Affiliate Applicability</h3>
            <p className={`text-sm ${kpi.affiliate_applicable ? 'text-green-600' : 'text-red-600'}`}>
              {kpi.affiliate_applicable ? 'Applicable' : 'Not Applicable'}
            </p>
          </div>

          {/* Last Updated Section */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Last Updated</h3>
            <p className="text-sm text-gray-600">
              17-08-2024
            </p>
          </div>

          {/* Favorite Button */}
          <button
            onClick={() => toggleFavorite(asset.id)}
            className={`w-full px-3 py-2 rounded-md transition-colors duration-300 flex items-center justify-center space-x-2 ${isFavorite ? 'bg-yellow-500 text-white hover:bg-yellow-600' : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
          >
            <FaStar
              className={`text-lg ${isFavorite ? 'text-white' : 'text-gray-300'}`}
            />
            <span className="text-sm font-medium truncate">
              {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default KPIModal;
