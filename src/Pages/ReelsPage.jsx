// src/pages/ReelsPage.jsx
import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, UserPlus } from 'lucide-react';

const ReelsPage = () => {
  const newsReels = [
    {
      id: 1,
      headline: "AI Breakthrough Boosts Drug Discovery Speed by 10x",
      summary: "Researchers unveiled an AI algorithm identifying drug candidates 10x faster. This could drastically cut R&D time, accelerating medical innovation and potentially leading to faster cures for diseases.",
      source: "TechDaily",
      profilePic: "https://images.unsplash.com/photo-1549692520-27a964319a31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxhdSUyMGNvbXBhbnl8ZW58MHx8fHwxNzE4MTgwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080",
      link: "https://www.google.com/search?q=AI+Breakthrough+drug+discovery",
      image: "https://images.unsplash.com/photo-1579547625126-ef8023791d29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw1fHxhbGwlMjBhYm91dCUyMGFpJTIwY2Fyc3xlbnwwfHx8fDE3MTgxMjk4OTV8MA&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      id: 2,
      headline: "Global Heatwave Alert: Southern Europe Braces for Record 40°C+",
      summary: "A severe heatwave is forecast for Southern Europe next week, with temperatures potentially exceeding 40°C. Authorities advise extreme caution, hydration, and limiting outdoor activity.",
      source: "WorldWeather News",
      profilePic: "https://images.unsplash.com/photo-1596700078864-4e4125b290c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw3fHxhdSUyMGNvbXBhbnl5fGVufDB8fHx8MTcxODE4MDA3MHww&ixlib=rb-4.0.3&q=80&w=1080",
      link: "https://www.google.com/search?q=Europe+heatwave",
      image: "https://images.unsplash.com/photo-1506790429765-a83d1c1692df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWF0d2F2ZSUyMGNpdHl8ZW58MHx8fHwxNzE4MTI5OTUyfDA&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      id: 3,
      headline: "New E-Vehicle Policy Offers Subsidies for Urban Commuters",
      summary: "Government announces substantial subsidies for electric two-wheelers and small cars for urban commuting. Aims to reduce pollution and promote sustainable transport, saving money for commuters.",
      source: "Govt. Gazette",
      profilePic: "https://images.unsplash.com/photo-1589578132711-64d509f6920d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxNXx8YnJhbmQlMjBsb2dvfGVufDB8fHx8MTcxODE4MDA3MHww&ixlib=rb-4.0.3&q=80&w=1080",
      link: "https://www.google.com/search?q=EV+subsidies+India",
      image: "https://images.unsplash.com/photo-1580227184285-8f6452243d4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNlbnRyYWwlMjBjYXJ8ZW58MHx8fHwxNzE4MTMwMDE3fDA&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      id: 4,
      headline: "Bollywood Blockbuster 'Shaurya' Shatters Box Office Records",
      summary: "The latest Bollywood action-thriller 'Shaurya' had a record-breaking opening weekend, signaling strong recovery for the film industry. Indicates economic recovery in the entertainment sector.",
      source: "FilmFare",
      profilePic: "https://images.unsplash.com/photo-1580870932594-b2c53a7a67f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw0fHxiYXNpYyUyMGJyYW5kfGVufDB8fHx8MTcxODE4MDA3MHww&ixlib=rb-4.0.3&q=80&w=1080",
      link: "https://www.google.com/search?q=Bollywood+Shaurya+box+office",
      image: "https://images.unsplash.com/photo-1549449339-16ac6f50b86a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtb3ZpZSUyMHRoZWF0ZXJ8ZW58MHx8fHwxNzE4MTMwMDc2fDA&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      id: 5,
      headline: "Mars Rover Finds Evidence of Ancient Underground Water Lakes",
      summary: "NASA's Perseverance rover discovered strong evidence of ancient underground water on Mars. This groundbreaking finding significantly increases the possibility of past microbial life.",
      source: "Space.com",
      profilePic: "https://images.unsplash.com/photo-1563207436-a36c927f80f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw1fHxhdSUyMGNvbXBhbnl8ZW58MHx8fHwxNzE4MTgwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080",
      link: "https://www.google.com/search?q=Mars+rover+water+discovery",
      image: "https://images.unsplash.com/photo-1541243171-872f23594b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXJzJTIwcm92ZXIlMjBsYW5kc2NhcGV8ZW58MHx8fHwxNzE4MTMwMTA4fDA&ixlib=rb-4.0.3&q=80&w=1080"
    },
  ];

  // Calculate dynamic height based on Navbar heights
  const calculateReelHeight = () => {
    let height = '100vh'; // Default for desktop
    const mobileTopNavHeight = 56; // h-14
    const mobileBottomNavHeight = 80; // approximate h-20 for the actual nav, adjust if needed
    const tabletTopNavHeight = 64; // h-16

    if (window.innerWidth < 768) { // Mobile
      height = `calc(100vh - ${mobileTopNavHeight}px - ${mobileBottomNavHeight}px)`;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) { // Tablet
      height = `calc(100vh - ${tabletTopNavHeight}px)`;
    }
    // For desktop (>=1024px), height remains 100vh, as sidebar is beside content.
    return height;
  };

  const [reelHeight, setReelHeight] = useState(calculateReelHeight());

  useEffect(() => {
    const handleResize = () => {
      setReelHeight(calculateReelHeight());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    // Main container for the Reels feed
    // It takes full available screen height after accounting for desktop sidebar (lg:ml-64)
    // Background is now white
    <div
      className="relative w-full h-full flex justify-center items-center lg:ml-64 bg-white"
      style={{ height: reelHeight }} // Set dynamic height based on calculation
    >
      {/* Scrollable container for individual reels */}
      <div
        className="w-full max-w-md h-full mx-auto
                   overflow-y-scroll snap-y snap-mandatory scroll-smooth
                   no-scrollbar bg-white" // Consistent white background for seamless transitions
      >
        {newsReels.map((news) => (
          <div
            key={news.id}
            className="relative flex-shrink-0 w-full h-full snap-center
                       flex items-end justify-start text-gray-900 bg-white" // Text is dark, background white for item
          >
            {/* Background Image - fills the entire reel item */}
            <img
              src={news.image}
              alt={news.headline}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Top Overlay for controls/header (optional, subtle) */}
            <div className="absolute top-0 left-0 right-0 h-16 md:h-20 flex items-center px-4 md:px-6 z-20">
                <span className="text-xl md:text-2xl font-bold text-gray-900">Reels</span>
                {/* Add other top icons like camera, search if desired */}
            </div>

            {/* Content & Interaction Buttons */}
            <div className="relative z-20 flex w-full h-full p-4 md:p-6">
                {/* Text Content (Left Side) - with Frosted White Glass Effect */}
                <div
                    className="flex flex-col justify-end w-4/5 pr-4
                               glass-effect rounded-lg p-3 md:p-4 self-end mb-4 mr-2"
                    style={{
                      // Using arbitrary values for backdrop-filter for a subtle frosted look over image
                      backdropFilter: 'blur(10px) saturate(180%)',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)' // More opaque white for better text readability
                    }}
                >
                    {/* Source/Profile Info */}
                    <div className="flex items-center mb-2">
                        <img src={news.profilePic} alt="Source Profile" className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-gray-400 mr-3" />
                        <span className="font-semibold text-lg md:text-xl text-gray-900">{news.source}</span>
                        <button className="ml-3 px-3 py-1 text-sm md:text-base border border-gray-400 rounded-full flex items-center text-gray-800 hover:bg-gray-100 transition-colors">
                            <UserPlus size={16} className="mr-1" /> Follow
                        </button>
                    </div>

                    {/* Headline & Summary */}
                    <h2 className="text-xl md:text-2xl font-bold mb-1 leading-tight text-gray-900">
                        {news.headline}
                    </h2>
                    <p className="text-sm md:text-base mb-3 leading-snug text-gray-800">
                        {news.summary}
                    </p>
                    <a
                        href={news.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm md:text-base font-medium"
                    >
                        Read More &rarr;
                    </a>
                </div>

                {/* Interaction Buttons (Right Side) - Dark Icons */}
                <div className="flex flex-col justify-end items-center space-y-5 md:space-y-6 w-1/5 pb-4">
                    <button className="flex flex-col items-center text-gray-700 hover:text-red-500 transition-colors">
                        <Heart size={32} fill="currentColor" strokeWidth={1} />
                        <span className="text-xs mt-1">2.5K</span>
                    </button>
                    <button className="flex flex-col items-center text-gray-700 hover:text-blue-500 transition-colors">
                        <MessageCircle size={32} fill="currentColor" strokeWidth={1} />
                        <span className="text-xs mt-1">123</span>
                    </button>
                    <button className="flex flex-col items-center text-gray-700 hover:text-green-500 transition-colors">
                        <Share2 size={32} fill="currentColor" strokeWidth={1} />
                        <span className="text-xs mt-1">Share</span>
                    </button>
                    <button className="flex flex-col items-center text-gray-700 hover:text-purple-500 transition-colors">
                        <Bookmark size={32} fill="currentColor" strokeWidth={1} />
                        <span className="text-xs mt-1">Save</span>
                    </button>
                    <button className="mt-4 text-gray-700 hover:text-gray-900 transition-colors">
                        <MoreHorizontal size={28} />
                    </button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReelsPage;