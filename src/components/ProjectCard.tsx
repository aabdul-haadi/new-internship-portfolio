import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  github: string;
  demo: string;
  onDemoClick?: () => void;
  maintenanceMessage?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  github,
  demo,
  onDemoClick
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex space-x-4">
        <motion.a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-police-blue dark:hover:text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github className="h-5 w-5" />
        </motion.a>
        {demo === 'maintenance' ? (
          <motion.button
            onClick={onDemoClick}
            className="text-gray-600 dark:text-gray-400 hover:text-police-blue dark:hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="h-5 w-5" />
          </motion.button>
        ) : (
          <motion.a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-police-blue dark:hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="h-5 w-5" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};