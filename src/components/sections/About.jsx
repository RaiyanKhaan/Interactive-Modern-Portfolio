import { motion } from 'framer-motion';
import { FaDownload, FaMapMarkerAlt, FaGraduationCap, FaCode } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import personalInfo from '../../data/personalInfo';

const stats = [
  { label: 'CGPA', value: '3.50', icon: FaGraduationCap },
  { label: 'Credits', value: '119', icon: FaCode },
  { label: 'Projects', value: '7+', icon: FaCode },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-[#0e060a]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Me"
          subtitle="Get to know me better"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-xl border-2 border-gray-100 dark:border-gray-700">
                <img
                  src="/images/profile_pic.jpeg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 sm:w-80 sm:h-80 rounded-2xl border-2 border-primary/30 -z-10" />
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-primary dark:text-primary-light font-medium mb-4 flex items-center gap-2">
              <FaMapMarkerAlt size={14} />
              {personalInfo.location}
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {personalInfo.bio}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map(({ label, value, icon: Icon }) => (
                <motion.div
                  key={label}
                  className="text-center p-4 rounded-xl bg-white dark:bg-dark-card shadow-sm border border-gray-100 dark:border-gray-700/50"
                  whileHover={{ y: -2 }}
                >
                  <Icon className="mx-auto mb-2 text-primary" size={20} />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
                </motion.div>
              ))}
            </div>

            <Button href="/docs/_SanjanaMariaResumeForECE_TA1.pdf" download>
              <FaDownload size={14} />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
