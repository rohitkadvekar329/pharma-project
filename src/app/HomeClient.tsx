"use client";

import React, { useState, useEffect } from 'react';
import { FaSearch, FaStar, FaRegStar, FaCopy } from 'react-icons/fa';
import { useRouter, useSearchParams } from 'next/navigation';
import KPIModal from './components/KPIModal';
import DataVizModal from './components/DataVizModal';
import LayoutsModal from './components/LayoutsModal';
import StoryboardModal from './components/StoryBoardModal';
import { HomeClientProps, Card } from '../lib/types';

const HomeClient = ({ assets }: HomeClientProps) => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<Card | null>(null);
  const [modalType, setModalType] = useState<'KPI' | 'DATAVIZ' | 'LAYOUT' | 'STORYBOARD' | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [displayedSearchTerm, setDisplayedSearchTerm] = useState<string>('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [activeSearch, setActiveSearch] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const modalId = searchParams.get('modal');
    if (modalId) {
      const card = assets.find((c) => c.id === modalId);
      if (card) {
        setModalContent(card);
        setModalType(card.asset_type);
        setIsModalOpen(true);
      }
    } else {
      setIsModalOpen(false);
    }
  }, [searchParams, assets]);

  const openModal = (card: Card) => {
    setModalContent(card);
    setModalType(card.asset_type);
    setIsModalOpen(true);
    router.push(`/?modal=${card.id}`, { scroll: false });
  };

  const closeModal = () => {
    router.push('/', { scroll: false });
    setIsModalOpen(false);
    setModalType(null);
  };

  const handleTabClick = (event: React.MouseEvent<HTMLDivElement>, tab: string) => {
    event.preventDefault();
    setActiveTab(tab);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayedSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (displayedSearchTerm.trim()) {
      setSearchTerm(displayedSearchTerm);
      setActiveSearch(true);
      if (!recentSearches.includes(displayedSearchTerm)) {
        setRecentSearches((prev) => [displayedSearchTerm, ...prev.slice(0, 4)]);
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  const handleRecentSearchClick = (search: string) => {
    setDisplayedSearchTerm(search);
    setSearchTerm(search);
    setActiveSearch(true);
  };

  const filteredCards = assets.filter((card) => {
    const regex = new RegExp(searchTerm, 'i');
    const matchesSearchTerm = regex.test(card.name) || regex.test(card.description);
    const matchesTab = activeTab === 'All' || card.asset_type === activeTab.toUpperCase();
    return matchesSearchTerm && matchesTab;
  });

  const getTabDescription = () => {
    switch (activeTab) {
      case 'All':
        return 'Explore all available assets.';
      case 'KPI':
        return 'Key Performance Indicators to monitor your business health.';
      case 'DataViz':
        return 'Data Visualizations that bring your data to life.';
      case 'Layout':
        return 'Layouts to structure your content and presentations.';
      case 'Storyboard':
        return 'Storyboards to visualize and plan your projects.';
      default:
        return 'Explore the assets available in this category.';
    }
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(id)) {
        return prevFavorites.filter((favId) => favId !== id);
      } else {
        return [...prevFavorites, id];
      }
    });
  };

  const copyLink = (id: string) => {
    const link = `${window.location.origin}/?modal=${id}`;
    navigator.clipboard.writeText(link);
    alert('Link copied to clipboard!');
  };

  const clearSearch = () => {
    setSearchTerm('');
    setDisplayedSearchTerm('');
    setActiveSearch(false);
  };

  const isFavorite = (id: string) => favorites.includes(id);

  return (
    <div className="w-full min-h-screen bg-gray-100 font-primary">
      <div className="container mx-auto max-w-screen-lg px-6 py-8">
        <div className="text-center mt-6 mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-wide drop-shadow-sm">
            Asset Library
          </h1>
          <p className="text-lg mt-2 text-gray-600 max-w-xl mx-auto leading-relaxed">
            Browse for assets needed to report and present analysis.
          </p>
        </div>

        <div className="mt-8 flex items-center">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search assets..."
              className="w-full p-3 pl-12 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 shadow-sm transition-all duration-300"
              value={displayedSearchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
            />
            <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button
            onClick={handleSearchSubmit}
            className="bg-blue-500 text-white px-6 py-3 rounded-r-lg focus:outline-none hover:bg-blue-600 transition-colors duration-300 shadow-md"
          >
            Search
          </button>
        </div>

        {/* Recent Searches */}
        {recentSearches.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Recent Searches</h3>
            <div className="flex flex-wrap items-center gap-3">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${search === searchTerm && activeSearch
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  onClick={() => handleRecentSearchClick(search)}
                >
                  {search}
                </button>
              ))}
              {activeSearch && (
                <button
                  onClick={clearSearch}
                  className="text-sm text-gray-600 hover:text-gray-800 hover:underline transition-colors duration-300"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        )}

        {/* Responsive Tabs */}
        <div className="flex flex-wrap justify-center mt-8 gap-3">
          {['All', 'KPI', 'DataViz', 'Layout', 'Storyboard'].map((tab) => (
            <div
              key={tab}
              onClick={(event) => handleTabClick(event, tab)}
              className={`flex-1 p-3 text-center transition-colors duration-300 cursor-pointer rounded-lg shadow-md ${activeTab === tab
                ? 'bg-blue-500 text-white shadow-lg scale-105'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                } min-w-[45%] sm:min-w-[calc(33.33%-0.75rem)] lg:min-w-[calc(20%-0.75rem)]`}
            >
              {tab}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{activeTab}</h2>
          <p className="text-md text-gray-500 mb-6">{getTabDescription()}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredCards.length === 0 ? (
              <p className="text-center text-gray-600 col-span-full">No assets found. Try adjusting your search.</p>
            ) : (
              filteredCards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => openModal(card)}
                  className="flex flex-col bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                >
                  {/* Placeholder for image or content */}
                  <div className="w-full h-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mb-4"></div>

                  {/* Card Title */}
                  <h3 className="text-lg font-semibold text-gray-800">{card.name}</h3>

                  {/* Card Description */}
                  <p className="text-sm text-gray-600 mt-2 flex-grow">{card.description}</p>

                  {/* Card Actions */}
                  <div className="flex items-center justify-between mt-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(card.id);
                      }}
                      className="text-yellow-500 transition-transform transform hover:scale-110"
                    >
                      {favorites.includes(card.id) ? <FaStar /> : <FaRegStar />}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        copyLink(card.id);
                      }}
                      className="text-gray-600 transition-transform transform hover:scale-110"
                    >
                      <FaCopy />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {isModalOpen && modalType === 'KPI' && (
          <KPIModal
            isOpen={isModalOpen}
            onClose={closeModal}
            asset={modalContent}
            isFavorite={isFavorite(modalContent!.id)}
            toggleFavorite={toggleFavorite}
          />
        )}

        {isModalOpen && modalType === 'DATAVIZ' && (
          <DataVizModal
            isOpen={isModalOpen}
            onClose={closeModal}
            asset={modalContent}
            isFavorite={isFavorite(modalContent!.id)}
            toggleFavorite={toggleFavorite}
          />
        )}

        {isModalOpen && modalType === 'LAYOUT' && (
          <LayoutsModal
            isOpen={isModalOpen}
            onClose={closeModal}
            asset={modalContent}
            isFavorite={isFavorite(modalContent!.id)}
            toggleFavorite={toggleFavorite}
          />
        )}

        {isModalOpen && modalType === 'STORYBOARD' && (
          <StoryboardModal
            isOpen={isModalOpen}
            onClose={closeModal}
            asset={modalContent}
            isFavorite={isFavorite(modalContent!.id)}
            toggleFavorite={toggleFavorite}
          />
        )}
      </div>
    </div>
  );
};

export default HomeClient;
