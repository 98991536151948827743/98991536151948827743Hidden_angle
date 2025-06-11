// src/Pages/HomePage.jsx
import React from 'react';
import { Zap } from 'lucide-react'; // Only need Zap here if you plan to use it for 'News' source,
                                  // but generally this page only uses data, not icons for platform

const HomePage = () => {
  // --- CORRECTED: Mock Data for SwiftBriefs - DEFINED HERE ---
  const swiftBriefs = [
    {
      id: 1,
      headline: "AI Breakthrough: New Algorithm Boosts Drug Discovery Speed",
      summary: "Researchers at TechLab have unveiled an AI algorithm capable of identifying potential drug candidates 10x faster than traditional methods. This could drastically cut down R&D time for new medicines.",
      whyNeeded: "Accelerates medical innovation, potentially leading to faster cures for diseases.",
      sourceLink: "https://https://www.google.com/search?q=AI+Breakthrough%3A+New+Algorithm+Boosts+Drug+Discovery+Speed&sca_esv=c37190e24ec173d1&rlz=1C1ONGR_enIN1099IN1099&sxsrf=ADLYWILF8iQjV13a96kC69sWw4yM66W5bQ%3A1718087968560&ei=0397Zrq9E4-PseMPrYyM6Ak&ved=0ahUKEwi5hLq0mcaGAxWPxGEAHa1GA50Q4dUDCA8&uact=5&oq=AI+Breakthrough%3A+New+Algorithm+Boosts+Drug+Discovery+Speed&gs_lp=Egxnd3Mtd2l6LXNlcnAiQUFJIEJyZWFrdGhyb3VnaDooIE5ldyBBbGdvcml0aG0gQm9vc3RzIERydWcgRGlzY292ZXJ5IFNwZWVkMgUQIRigATIFEAEYkgMyBRAAGJIDMggQABiABBiwAzIIEAAYgAQYsAMyCBAAGIAEGLEDMgkQABiGAxiwAzIJEAAYhgMYsAMyCBAAGIAEGLEDMggQABiABBiGA0jgTVD5Clj_S3ABeACQAQCYAYoBoAGeDqoBAzAuOVgBAKABAKIEAzAuOLgBA8gGAQ&sclient=gws-wiz-serp.com/ai-drug-discovery", // Changed to a more plausible mock link structure
      category: "Technology",
      tags: ["AI", "Healthcare", "Innovation"]
    },
    {
      id: 2,
      headline: "Global Heatwave Alert: Southern Europe Braces for Record Temperatures",
      summary: "A severe heatwave is expected to hit Southern Europe next week, with temperatures potentially exceeding 40°C. Authorities advise extreme caution and hydration.",
      whyNeeded: "Crucial for public safety and health; informs travel plans and local precautions.",
      sourceLink: "https://www.google.com/search?q=Global+Heatwave+Alert%3A+Southern+Europe+Braces+for+Record+Temperatures&sca_esv=c37190e24ec173d1&rlz=1C1ONGR_enIN1099IN1099&sxsrf=ADLYWILjN9Fm291dJ8hC7Y367Z3yN8gNMQ%3A1718087998634&ei=E397Zt76I5-DseMPtL-aIA&ved=0ahUKEwiy6M7EmcaGAxWfgGMGHbTfBhAQ4dUDCA8&uact=5&oq=Global+Heatwave+Alert%3A+Southern+Europe+Braces+for+Record+Temperatures&gs_lp=Egxnd3Mtd2l6LXNlcnAiTEdsb2JhbCBIZWF0d2F2ZSBBbGVydDooIFNvdXRoZXJuIEV1cm9wZSBCcmFjZXMgZm9yIFJlY29yZCBUZW1wZXJhdHVyZXMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEUPEhUNsBWP0UcA-gAYABwAEAkB8gEBoAGIAaoBAYAChA_CAgoEAAYgAQYhgPCAggQABiABBiwA8ICChAAGIAEGLEDGIMBwgIIEAAYgAQYkgOYAQGyAQCoAgs&sclient=gws-wiz-serp.com/europe-heatwave",
      category: "World",
      tags: ["Climate", "Europe", "Weather"]
    },
    {
        id: 3,
        headline: "New E-Vehicle Policy to Offer Subsidies for Urban Commuters",
        summary: "The government has announced a new policy offering substantial subsidies for individuals purchasing electric two-wheelers and small cars for urban commuting, aiming to reduce pollution.",
        whyNeeded: "Saves money for commuters, reduces city pollution, promotes sustainable transport.",
        sourceLink: "https://www.google.com/search?q=New+E-Vehicle+Policy+to+Offer+Subsidies+for+Urban+Commuters&rlz=1C1ONGR_enIN1099IN1099&oq=New+E-Vehicle+Policy+to+Offer+Subsidies+for+Urban+Commuters&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQABhAMgYIAhBFGEAyBggDEEUYPdIBCjE0ODU2ajBqMTWoAgiAAgA&sourceid=chrome&ie=UTF-8",
        category: "India",
        tags: ["Government", "EV", "Sustainability"]
    },
    {
        id: 4,
        headline: "Bollywood Box Office Breaks Records with Summer Blockbuster Opening",
        summary: "The latest Bollywood action-thriller 'Shaurya' has shattered box office records on its opening weekend, signaling a strong recovery for the film industry post-pandemic.",
        whyNeeded: "Indicates economic recovery in the entertainment sector, offers popular cultural insights.",
        sourceLink: "https://www.google.com/search?q=Bollywood+Box+Office+Breaks+Records+with+Summer+Blockbuster+Opening&sca_esv=c37190e24ec173d1&rlz=1C1ONGR_enIN1099IN1099&sxsrf=ADLYWIL0z9d2mH2zJc199NfN-zJ3bK8xQ%3A1718088019951&ei=H397ZqjGNoO9seMP9e2K0AQ&ved=0ahUKEwip6P_EmcaGAxWDnmwGHfVtAsIQ4dUDCA8&uact=5&oq=Bollywood+Box+Office+Breaks+Records+with+Summer+Blockbuster+Opening&gs_lp=Egxnd3Mtd2l6LXNlcnAiQUJvbGx5d29vZCBCb3ggT2ZmaWNlIEJyZWFrcyBSZWNvcmRzIHdpdGggU3VtbWVyIEJsb2NrYnVzdGVyIE9wZW5pbmcyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEUOQhUOQhWJQccAF4AJABAJgBdaABdaABAoAEAsgGAQ&sclient=gws-wiz-serp",
        category: "Entertainment",
        tags: ["Bollywood", "Film", "Culture"]
    },
  ];

  return (
    <>
      {/* Section: Web App Introduction & Benefits */}
      <div className="bg-white rounded-lg p-6 shadow-md text-center">
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
              <li>**Save Time:** Get concise summaries, not lengthy articles.</li>
              <li>**Combat Overload:** Focus on essential information, filtered from the noise.</li>
              <li>**Understand Relevance:** We highlight *why* each story matters to you.</li>
              <li>**Unbiased Facts:** AI-powered summaries for a neutral perspective.</li>
            </ul>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Benefits You'll Enjoy:</h3>
            <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
              <li>**Increased Productivity:** More time for what truly matters.</li>
              <li>**Informed Decisions:** Quick understanding of key global and local events.</li>
              <li>**Spot Trends Instantly:** Stay ahead with social media insights.</li>
              <li>**Personalized Feed:** News tailored to *your* interests.</li>
            </ul>
          </div>
        </div>
        <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors duration-300">
          Get Started Now!
        </button>
      </div>

      {/* Section: Today's SwiftBriefs */}
      <div className="w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Today's SwiftBriefs</h2>
        <div className="space-y-6">
          {/* This map function now correctly references the swiftBriefs array */}
          {swiftBriefs.map((brief) => (
            <div key={brief.id} className="bg-white rounded-lg p-5 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{brief.headline}</h3>
              <p className="text-gray-700 mb-3">{brief.summary}</p>
              <p className="text-sm text-gray-600 font-medium mb-3">
                <span className="text-purple-600">Why it matters:</span> {brief.whyNeeded}
              </p>
              <div className="flex flex-wrap items-center justify-between text-sm text-gray-500">
                <div className="flex space-x-2">
                  {brief.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
                <a
                  href={brief.sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Read Full Story &rarr;
                </a>
              </div>
            </div>
          ))}
          <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300">
            Load More SwiftBriefs
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;