import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';

export default function Hero() {
  const floatingRef1 = useRef<HTMLDivElement>(null);
  const floatingRef2 = useRef<HTMLDivElement>(null);
  const floatingRef3 = useRef<HTMLDivElement>(null);

  // GSAP floating animation for background elements
  useEffect(() => {
    const elements = [floatingRef1.current, floatingRef2.current, floatingRef3.current];
    
    elements.forEach((el, index) => {
      if (el) {
        gsap.to(el, {
          y: index % 2 === 0 ? -30 : 30,
          x: index % 2 === 0 ? 20 : -20,
          duration: 3 + index,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      }
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-bg-darker via-bg-dark to-bg-darker">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={floatingRef1}
          className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #00CCCC 0%, transparent 70%)' }}
        ></div>
        <div
          ref={floatingRef2}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 sm:w-[32rem] sm:h-[32rem] rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #8A2BE2 0%, transparent 70%)' }}
        ></div>
        <div
          ref={floatingRef3}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[28rem] sm:h-[28rem] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #1560BD 0%, transparent 70%)' }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.p
            className="text-cyan-400 text-2xl sm:text-base md:text-4xl font-medium mb-4 tracking-wider uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm 
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Sankar Das
          </motion.h1>

          {/* Title */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white/90 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
              Full Stack Developer 
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Crafting beautiful, performant digital experiences
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href="#projects"
              className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowUpRight size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              className="glass-card glass-card-hover px-6 py-3 rounded-lg font-medium w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, repeat: Infinity, duration: 1.5, repeatType: 'reverse' }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}