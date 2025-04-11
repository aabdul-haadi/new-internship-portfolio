import React from 'react';
import { FaGithub, FaLinkedin, FaMailBulk, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-12 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.img
            src="https://www.pngaaa.com/api-download/4681127"
            alt="Sindh Police Logo"
            className="h-16 w-16 mb-6 object-contain"
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="flex space-x-6 mb-6">
            <motion.a
              href="https://github.com/aabdul-haadi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-police-blue dark:hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="h-6 w-6" />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/abdul-haadi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-police-blue dark:hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="h-6 w-6" />
            </motion.a>

            <motion.a
              href="mailto:contact@abdulhaadi.dev"
              className="text-gray-600 dark:text-gray-400 hover:text-police-blue dark:hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaMailBulk className="h-6 w-6" />
            </motion.a>

            {/* Portfolio Icon */}
            <motion.a
              href="https://haadi-s-portfolio.vercel.app/" // Replace with your actual portfolio link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-police-blue dark:hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGlobe className="h-6 w-6" />
            </motion.a>
          </div>

          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
              © {new Date().getFullYear()} Abdul Haadi. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs">
              Developed during internship at Central Police Office (CPO)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
