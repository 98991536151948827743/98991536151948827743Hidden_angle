import React from 'react';

const ReelCard = ({ username, avatarUrl, subContentTitle, subContentText }) => {
  return (
    <div className="h-screen relative  bg-gray-100 rounded-none md:rounded-lg mb-8  shadow-lg overflow-hidden flex flex-col mx-auto w-full md:max-w-lg">
      <div className="flex items-center p-4 bg-gray-800 text-white rounded-t-xl">
        <img
          src={avatarUrl}
          alt={`${username}'s avatar`}
          className="w-10 h-10 rounded-full border-2 border-white object-cover"
        />
        <span className="ml-3 text-white font-semibold text-lg">{username}</span>
      </div>
      <div className="w-full bg-gray-100 text-gray-800 p-6 flex flex-col items-center justify-center rounded-b-xl flex-grow">
        <h2 className="text-xl font-bold mb-3 text-center">{subContentTitle}</h2>
        <p className="text-base text-center mb-6 max-w-xs leading-relaxed">
          {subContentText}
        </p>
        <button className="w-full max-w-[200px] py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-md hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
          Learn More
        </button>
      </div>
    </div>

  );
}

export default ReelCard;
