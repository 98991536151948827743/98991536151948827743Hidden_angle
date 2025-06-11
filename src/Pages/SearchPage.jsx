// src/Pages/SearchPage.jsx
import React from 'react';
import { Search } from 'lucide-react'; // CORRECT

const SearchPage = () => {
  return (
    <div className="w-full bg-white rounded-lg p-6 shadow-md text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Search SwiftRead</h2>
      <div className="flex">
        <input
          type="text"
          placeholder="Search for keywords, topics, or sources..."
          className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button className="bg-purple-600 text-white px-5 py-3 rounded-r-lg hover:bg-purple-700 transition-colors duration-300">
          <Search size={20} />
        </button>
      </div>
      <p className="text-gray-500 text-sm mt-3">Find concise news on anything you need.</p>
    </div>
  );
};

export default SearchPage;