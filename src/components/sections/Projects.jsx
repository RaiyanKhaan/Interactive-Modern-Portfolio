import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub, FaExternalLinkAlt, FaStar, FaTimes,
  FaSeedling, FaMicrochip, FaLeaf, FaDatabase,
  FaImage, FaCar, FaPaw, FaCalculator, FaRobot, FaBoxes, FaCode,
} from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';
import projects from '../../data/projects';

const iconMap = {
  FaSeedling, FaMicrochip, FaLeaf, FaDatabase,
  FaImage, FaCar, FaPaw, FaCalculator, FaRobot, FaBoxes, FaCode,
};

const allCategories = ['All', ...new Set(projects.map((p) => p.category))];

function ProjectImage({ project, className = '', large = false }) {
  const [imgError, setImgError] = useState(false);
  const Icon = iconMap[project.icon] || FaCode;

  if (!project.image || imgError) {
    return (
      <div className={`flex items-center justify-center w-full h-full bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10 ${className}`}>
        <Icon className="text-primary/60 dark:text-primary-light/50" size={large ? 64 : 48} />
      </div>
    );
  }
  return (
    <img
      src={project.image}
      alt={project.title}
      className={`w-full h-full object-cover ${className}`}
      loading="lazy"
      onError={() => setImgError(true)}
    />
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-[#0e060a]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="My Projects"
          subtitle="A showcase of my work in AI, ML, and Web Development"
        />

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md shadow-primary/20'
                  : 'bg-white dark:bg-dark-card text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`group bg-white dark:bg-dark-card rounded-xl border overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer ${
                  project.featured
                    ? 'border-primary/30 dark:border-primary/30'
                    : 'border-gray-200 dark:border-gray-700/50'
                }`}
                onClick={() => setSelected(project)}
                whileHover={{ y: -4 }}
              >
                {/* Image / Icon Fallback */}
                <div className="relative h-48 overflow-hidden">
                  <ProjectImage
                    project={project}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 bg-accent/90 text-white text-xs font-medium rounded-full">
                      <FaStar size={10} />
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} className="text-[11px] px-2 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge className="text-[11px] px-2 py-0.5">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FaGithub size={16} />
                      Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt size={14} />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white dark:bg-dark-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-56">
                  <ProjectImage project={selected} large />
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-dark-card/80 rounded-full hover:bg-white dark:hover:bg-dark-card transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <FaTimes className="text-gray-700 dark:text-gray-300" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selected.title}
                    </h3>
                    {selected.featured && (
                      <span className="flex items-center gap-1 px-2.5 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                        <FaStar size={10} />
                        Featured
                      </span>
                    )}
                  </div>
                  <Badge className="mb-4">{selected.category}</Badge>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {selected.description}
                  </p>
                  {selected.highlights && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Key Highlights
                      </h4>
                      <ul className="space-y-1">
                        {selected.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selected.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-900 dark:bg-gray-700 text-white text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                    >
                      <FaGithub size={16} />
                      View on GitHub
                    </a>
                    {selected.live && (
                      <a
                        href={selected.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
                      >
                        <FaExternalLinkAlt size={14} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
