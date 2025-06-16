import React from 'react';
import { motion } from 'framer-motion';

export default function CareersPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-xl bg-white rounded-lg p-8 shadow-xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Career Opportunities
        </h1>
        <p className="text-xl text-gray-700 mb-4">
          While we are continually expanding our team, there are no open positions available at this time.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          We encourage you to visit this page regularly for updates. Alternatively, you may subscribe to our talent network to receive notifications about future opportunities.
        </p>
        <motion.button
        initial={{ scale: 0, opacity: 0, y: 50  }} animate={{ scale: 1 }} transition={{ delay: 0.3 }}   whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 1 }} 
        onClick={() => window.location.href = '/trending'}
        className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-3 px-6 rounded-full shadow-lg "
        >
          Subscribe for Job Alerts
        </motion.button>
        <p className="mt-6 text-sm text-gray-500">
          Discover more about our mission <a   onClick={() => window.location.href = '/mission'} className="text-blue-600 hover:underline">here</a>.
        </p>
      </div>
    </div>
  );
}
