import { motion } from "motion/react"
import Footer from '../Components/footer';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const spaceIntelligenceItems = [
    { text: "<strong>Quick Digests:</strong> Get concise updates on new missions and discoveries." },
    { text: "<strong>Impactful Insights:</strong> Understand key cosmic events without the fluff." },
    { text: "<strong>Stay Ahead:</strong> Monitor commercial space trends for strategic awareness." },
    { text: "<strong>Retain More:</strong> Focused summaries for better knowledge absorption." },
  ];
  const techProductivityItems = [
    { text: "<strong>Rapid Updates:</strong> Swiftly grasp AI, software, and hardware innovations." },
    { text: "<strong>Actionable Knowledge:</strong> Apply tech insights directly to your work." },
    { text: "<strong>Innovation at Speed:</strong> Identify emerging trends for competitive advantage." },
    { text: "<strong>Streamlined Information:</strong> Connect dots across diverse tech sectors efficiently." },
  ];
  return (
    <>
    <div className="rounded-lg p-6 shadow-md text-center mb-6 bg-white w-full max-w-none lg:max-w-6xl mx-auto transition-all duration-500 ease-in-out font-sans">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        SwiftRead: The Latest Space & Tech News, Delivered for Peak Productivity.
      </h1>
      <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
        Stop wasting time sifting through endless feeds. SwiftRead brings you the most crucial breakthroughs in space and technology, expertly summarized to save you time and boost your daily productivity. Get informed, stay efficient.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="font-bold text-xl text-indigo-700 mb-4">Latest in Space Intelligence</h3>
          <ul className="list-none space-y-3 text-gray-700">
            {spaceIntelligenceItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <span dangerouslySetInnerHTML={{ __html: item.text }} />
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="font-bold text-xl text-teal-700 mb-4">Cutting-Edge Tech for Maximized Productivity</h3>
          <ul className="list-none space-y-3 text-gray-700">
            {techProductivityItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <span dangerouslySetInnerHTML={{ __html: item.text }} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button onClick={() => navigate("/NewsPage")} className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform duration-200 transform hover:scale-105">
        Get Your Daily Productivity Boost!
      </button>
    </div>

    {/* Section: trending Page */}
  <div className="bg-white m-0 mx-4 my-8  rounded-xl shadow-sm pt-8 p-6 sm:p-8  w-full  max-w-none lg:max-w-6xl border border-gray-200 transition-all duration-500 ease-in-out">
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
        onClick={() => navigate("/trending")}
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