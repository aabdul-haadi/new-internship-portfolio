import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  href: string;
  icon: React.ReactNode;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ href, icon, text }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center px-6 py-3 bg-police-blue hover:bg-police-blue-light text-white rounded-lg shadow-lg transition-colors duration-300"
    >
      {icon}
      <span className="ml-2">{text}</span>
    </motion.a>
  );
};