import React, { useState, useEffect } from 'react';

import ReelCard from '../Components/Cards/News.jsx';

const NewsPage = () => {
    const reelCardData = [
    {
      username: "insight_digest",
      avatarUrl: "https://placehold.co/40x40/5DADE2/FFFFFF?text=ID1",
      subContentTitle: "Daily Insights: Understanding Trends",
      subContentText: "Dive deep into the latest market trends and their potential impact on future innovations. Our daily digest brings you concise, actionable insights.",
    },
    {
      username: "tech_explorers",
      avatarUrl: "https://placehold.co/40x40/27AE60/FFFFFF?text=TE",
      subContentTitle: "The Future of AI in Healthcare",
      subContentText: "Explore how artificial intelligence is revolutionizing diagnostics, personalized medicine, and patient care globally.",
    },
    {
      username: "eco_warriors",
      avatarUrl: "https://placehold.co/40x40/E74C3C/FFFFFF?text=EW",
      subContentTitle: "Sustainable Living Tips",
      subContentText: "Simple yet effective ways to reduce your carbon footprint and contribute to a healthier planet. Start your green journey today!",
    },
    {
      username: "creative_minds",
      avatarUrl: "https://placehold.co/40x40/8E44AD/FFFFFF?text=CM",
      subContentTitle: "Unleash Your Inner Artist",
      subContentText: "Discover new techniques and inspiration to fuel your creativity. From painting to digital art, find your unique style.",
    },
  ];

  return (
    <>
      {reelCardData.map((data, index) => (
        <ReelCard
          key={index}
          className={index < reelCardData.length - 1 ? "mb-4" : ""}
          username={data.username}
          avatarUrl={data.avatarUrl}
          subContentTitle={data.subContentTitle}
          subContentText={data.subContentText}
        />
      ))}
    </>
  );
};

export default NewsPage;