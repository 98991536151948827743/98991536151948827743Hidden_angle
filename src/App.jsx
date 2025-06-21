// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import NavBar from './Pages/NavBar';
import TrendingPage from './Pages/TrendingPage';
import SearchPage from './Pages/SearchPage';
import ProfilePage from './Pages/ProfilePage';

import NewsPage from './Pages/NewsPage';

import CareersPage from './Pages/Career';
import Mission from './Pages/Mission';


const App = () => { 
  return (
    <Router>
      <NavBar />
      <div className="lg:ml-64 min-h-screen bg-gray-50 flex flex-col items-center mt-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/search" element={<SearchPage />} />

          <Route path="/NewsPage" element={<NewsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/mission" element={<Mission />} />

          {/* Fallback route for 404 */}
          <Route path="*" element={
            <div className="w-full bg-white rounded-lg p-6 shadow-md text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">404 - Page Not Found</h2>
              <p className="text-gray-600">The page you are looking for does not exist.</p>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;