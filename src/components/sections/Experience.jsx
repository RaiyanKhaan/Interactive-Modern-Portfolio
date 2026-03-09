import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCertificate, FaTrophy } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import experience from '../../data/experience';

const typeIcons = {
  Academic: FaGraduationCap,
  Training: FaBriefcase,
  Certification: FaCertificate,
  Achievement: FaTrophy,
};

const typeColors = {
  Academic: 'bg-blue-500',
  Training: 'bg-emerald-500',
  Certification: 'bg-amber-500',
  Achievement: 'bg-primary',
};

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey, achievements and training"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-secondary/30 to-transparent md:-translate-x-px" />

          <div className="space-y-8 md:space-y-12">
            {experience.map((exp, i) => {
              const Icon = typeIcons[exp.type] || FaBriefcase;
              const color = typeColors[exp.type] || 'bg-primary';
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Icon */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${color} flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-dark-bg`}>
                      <Icon className="text-white" size={16} />
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <motion.div
                      className={`bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-sm border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 ${
                        exp.type === 'Achievement'
                          ? 'border-primary/30 dark:border-primary/20'
                          : 'border-gray-100 dark:border-gray-700/50'
                      }`}
                      whileHover={{ y: -2 }}
                    >
                      {/* Image */}
                      {exp.image && (
                        <div className="h-40 overflow-hidden">
                          <img
                            src={exp.image}
                            alt={exp.role}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                          />
                        </div>
                      )}

                      <div className="p-6">
                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full text-white ${color} mb-3`}>
                          {exp.type}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-primary dark:text-primary-light font-medium mb-1">
                          {exp.institution || exp.organization || exp.course}
                        </p>
                        {exp.department && (
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                            {exp.department}
                          </p>
                        )}
                        {exp.program && (
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                            {exp.program}
                          </p>
                        )}
                        {exp.instructor && (
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                            Instructor: {exp.instructor}
                          </p>
                        )}
                        <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mb-2">
                          {exp.duration}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {exp.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
