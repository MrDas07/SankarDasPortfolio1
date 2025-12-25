import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { mockProjects } from '../data/mockData';
import type { Project } from '../types';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="glass-card overflow-hidden rounded-2xl group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden aspect-video">
        <motion.img
          src={project.image}
          alt={`${project.title} - ${project.description}`}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
          style={{ 
            backgroundColor: project.image.includes('unsplash') ? '#f3f3f3' : 
                           project.image.includes('pexels') ? '#D573BE' : '#d9c0d9' 
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
          animate={{ opacity: isHovered ? 1 : 0.6 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className="glass-card px-3 py-1 text-xs sm:text-sm font-medium text-cyan-400 border-cyan-400/30">
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 gradient-text">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm sm:text-base mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 10).map((tech) => (
            <span
              key={tech}
              className="text-xs sm:text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-white/10">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm sm:text-base text-cyan-400 hover:text-cyan-300 transition-colors"
              whileHover={{ x: 3 }}
            >
              Live Demo <ArrowUpRight size={16} />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm sm:text-base text-white/60 hover:text-white transition-colors"
              whileHover={{ x: 3 }}
            >
              Source Code <Github size={16} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-20 sm:py-32 bg-bg-darker">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            A showcase of my recent work, combining creative design with cutting-edge technology
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/MrDas07"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card glass-card-hover px-8 py-3 rounded-lg font-medium inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects <ArrowUpRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}