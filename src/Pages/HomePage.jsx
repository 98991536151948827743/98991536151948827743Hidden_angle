import React from 'react';
import { Zap , } from 'lucide-react';
import { motion } from "motion/react"
import Footer from '../Components/footer';

const HomePage = () => {
  return (
    <>
      <div className=" rounded-lg p-6 shadow-md text-center mb-1 bg-white w-full  max-w-none lg:max-w-6xl transition-all duration-500 ease-in-out">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          SwiftRead: Your News, In Seconds.
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Tired of endless scrolling and information overload? SwiftRead delivers the essence of the news you need, exactly when you need it.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Why SwiftRead is Needed:</h3>
            <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
              <li><strong>Save Time:</strong> Get concise summaries, not lengthy articles.</li>
              <li><strong>Combat Overload:</strong> Focus on essential information, filtered from the noise.</li>
              <li><strong>Understand Relevance:</strong> We highlight *why* each story matters to you.</li>
              <li><strong>Unbiased Facts:</strong> AI-powered summaries for a neutral perspective.</li>
            </ul>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Benefits You'll Enjoy:</h3>
            <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
              <li><strong>Increased Productivity:</strong> More time for what truly matters.</li>
              <li><strong>Informed Decisions:</strong> Quick understanding of key global and local events.</li>
              <li><strong>Spot Trends Instantly:</strong> Stay ahead with social media insights.</li>
              <li><strong>Personalized Feed:</strong> News tailored to *your* interests.</li>
            </ul>
          </div>
        </div>
        <motion.button   initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }} className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 ">
          Get Started Now!
        </motion.button>
      </div>

      {/* Section: trending Page */}


  <div className="bg-white m-0 mx-4 my-8  rounded-xl shadow-2xl pt-8 p-6 sm:p-8  w-full  max-w-none lg:max-w-6xl border border-gray-200 transition-all duration-500 ease-in-out">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 text-center">
     Why Check the Trending Page?
    </h2>
    <p className="text-gray-700 leading-relaxed mb-6 text-center">
      Our trending page offers a quick, insightful glance into what's currently
      captivating the online world.
    </p>

    <div className="bg-gray-50 rounded-lg p-5 sm:p-6 mb-6 border border-gray-100 transition-shadow duration-300 hover:shadow-md w-full">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 flex items-center justify-center sm:justify-start">
        What's Trending?
      </h3>
      <ul className="list-disc list-inside text-gray-600 space-y-2 text-left text-sm sm:text-base">
        <li>
          Stay updated on viral topics and discussions across social media.
        </li>
        <li>
          Understand popular movements on platforms like{" "}
          <span className="font-medium text-blue-600">X (formerly Twitter)</span>{" "}
          and <span className="font-medium text-red-600">YouTube</span>.
        </li>
        <li>
          Discover the latest news, memes, and cultural phenomena in short, easy-to-digest explanations.
        </li>
      </ul>
    </div>

    <p className="text-gray-700 leading-relaxed text-center mb-6">
      It's your shortcut to staying informed and engaged with the pulse of online conversation.
    </p>

    <div className="flex justify-center">
      <motion.button initial={{ scale: 0, opacity: 0, y: 50  }} animate={{ scale: 1 }} transition={{ delay: 0.3 }}   whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 1 }} 
        onClick={() => window.location.href = '/trending'}
        className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-3 px-6 rounded-full shadow-lg "
      >
        Go to Trending Page
      </motion.button>
    </div>
  </div>

      <Footer className="w-full  max-w-none lg:max-w-6xl" />
    </>
  );
};

export default HomePage;