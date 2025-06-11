// src/pages/TrendingPage.jsx
import React from 'react';
import { Zap, Compass } from 'lucide-react';

const TrendingPage = () => {
  // ... your trendingTopics data ...

  return (
    // Add padding here
    <div className="w-full p-6 max-w-4xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Trending Now (Social & News)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* ... your map function ... */}
      </div>
    </div>
  );
};
export default TrendingPage;