import { motion } from 'framer-motion';

export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      className={`bg-white dark:bg-dark-card rounded-xl shadow-md border border-gray-100 dark:border-gray-700/50 overflow-hidden ${hover ? 'hover:shadow-xl hover:-translate-y-1' : ''} transition-all duration-300 ${className}`}
      whileHover={hover ? { y: -4 } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}
