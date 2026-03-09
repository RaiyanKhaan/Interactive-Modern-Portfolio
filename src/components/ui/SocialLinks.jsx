import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import personalInfo from '../../data/personalInfo';

const socials = [
  { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
  { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

export default function SocialLinks({ className = '', iconSize = 20 }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socials.map(({ icon: Icon, href, label }) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel="noopener noreferrer"
          aria-label={label}
          className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light hover:bg-primary/10 transition-colors duration-300"
          whileHover={{ scale: 1.2, y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon size={iconSize} />
        </motion.a>
      ))}
    </div>
  );
}
