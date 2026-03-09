import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import education from '../../data/education';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-[#0e060a]/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Education"
          subtitle="My academic background"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary" />

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FaGraduationCap className="text-primary" size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-primary dark:text-primary-light font-medium mb-2">
                    {edu.university || edu.institution}
                  </p>
                  {edu.minor && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      Minor: {edu.minor}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-3 mt-3">
                    {(edu.cgpa || edu.gpa) && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold rounded-full">
                        {edu.cgpa ? `CGPA: ${edu.cgpa}` : `GPA: ${edu.gpa}`}
                      </span>
                    )}
                    {edu.completedCredits && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full">
                        {edu.completedCredits} Credits
                      </span>
                    )}
                    {edu.status && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 text-xs font-semibold rounded-full">
                        {edu.status}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 mt-3 text-xs text-gray-400 dark:text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt size={10} />
                      {edu.location}
                    </span>
                    {(edu.semester || edu.passingYear) && (
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt size={10} />
                        {edu.semester || edu.passingYear}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
