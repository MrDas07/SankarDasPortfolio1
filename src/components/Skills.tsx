import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Settings } from 'lucide-react';
import { mockSkills } from '../data/mockData';
import type { SkillCategory } from '../types';

const categoryIcons: Record<SkillCategory, typeof Code> = {
  frontend: Code,
  backend: Database,
  tools: Settings,
  language: Code,
};

const categoryNames: Record<SkillCategory, string> = {
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  tools: 'Tools & Platforms',
  language: 'programming languages',
};

function SkillBadge({ name, proficiency, index }: { name: string; proficiency: number; index: number }) {
  return (
    <motion.div
      className="glass-card glass-card-hover p-4 rounded-xl relative overflow-hidden group"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ scale: 1.05, y: -4 }}
    >
      {/* Progress Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
        initial={{ width: 0 }}
        whileInView={{ width: `${proficiency}%` }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 + 0.3, duration: 0.8 }}
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="font-medium text-sm sm:text-base">{name}</span>
        <span className="text-xs sm:text-sm text-cyan-400 font-semibold">{proficiency}%</span>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Group skills by category
  const skillsByCategory = mockSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<SkillCategory, typeof mockSkills>);

  return (
    <section id="skills" className="relative py-20 sm:py-32 bg-gradient-to-b from-bg-dark to-bg-darker">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {(Object.entries(skillsByCategory) as [SkillCategory, typeof mockSkills][]).map(
            ([category, skills], categoryIndex) => {
              const Icon = categoryIcons[category];
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="glass-card p-3 rounded-lg">
                      <Icon size={24} className="text-cyan-400" style={{ width: '24px', height: '24px', color: 'var(--color-cyan-primary)' }} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {categoryNames[category]}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skills.map((skill, index) => (
                      <SkillBadge
                        key={skill.id}
                        name={skill.name}
                        proficiency={skill.proficiency}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}