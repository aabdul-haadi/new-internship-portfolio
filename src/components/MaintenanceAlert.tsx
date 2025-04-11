import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export const MaintenanceAlert: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-md mx-4">
        <div className="flex items-center justify-center mb-4">
          <AlertTriangle className="h-12 w-12 text-yellow-500" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Under Maintenance
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
          The Safety Alerts System demo is currently undergoing maintenance and improvements. 
          Please check back later for the live demo. In the meantime, you can explore the 
          project documentation and source code.
        </p>
        <div className="flex justify-center">
          <a
            href="https://github.com/aabdul-haadi/Safety-Alerts-System"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-police-blue hover:bg-police-blue-light text-white px-6 py-2 rounded-lg transition-colors duration-300"
          >
            View Project Repository
          </a>
        </div>
      </div>
    </motion.div>
  );
};