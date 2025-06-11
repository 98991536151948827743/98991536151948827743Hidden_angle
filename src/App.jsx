// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';

// Import Page Components
import HomePage from './Pages/HomePage';
import TrendingPage from './Pages/TrendingPage';
import SearchPage from './Pages/SearchPage';
import ExplorePage from './Pages/ExplorePage';
import CreatePage from './Pages/CreatePage';
import SavedPage from './Pages/SavedPage';
import ProfilePage from './Pages/ProfilePage';
import MessagesPage from './Pages/MessagesPage';
import NotificationsPage from './Pages/NotificationsPage';
import ReelsPage from './Pages/ReelsPage'; // --- REVERTED IMPORT ---


const App = () => {
  return (
    <Router>
      <NavBar />

      {/* Main Content Area: Adjusted for full-height reels content */}
      {/* We remove all default padding and margins here. Each page will now handle its own layout */}
      <div className="lg:ml-64 min-h-screen bg-gray-50 flex flex-col items-center">
        <Routes>
          {/* Other Pages: add p-6 or appropriate padding within their own component JSX */}
          <Route path="/" element={<HomePage />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/explore" element={<ExplorePage />} />

          {/* ReelsPage: Designed to fill the viewport and manage its own internal spacing */}
          <Route path="/reels" element={<ReelsPage />} /> {/* --- REVERTED ROUTE --- */}

          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/saved" element={<SavedPage />} />
          <Route path="/profile" element={<ProfilePage />} />
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