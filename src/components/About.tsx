import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SD from "../assets/Sankar.jpeg";

const stats = [
  { label: "Years Experience", value: "2.5+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Technologies Mastered", value: "20+" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative py-20 sm:py-32 bg-gradient-to-b from-bg-darker to-bg-dark"
    >
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="glass-card p-2 rounded-2xl">
                <img
                  src={SD}
                  alt="Professional developer headshot - Mikhail Nilov on Pexels"
                  className="w-full h-auto rounded-xl object-cover"
                  style={{ backgroundColor: "#8D888C" }}
                />
              </div>
              {/* Decorative gradient overlay */}
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl">
                <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-6">
                Im your go to full-stack web developer. who loves building
                  real, usable software. I work mainly with the MERN stack and
                  focus on clean architecture, problem solving, and scalable
                  systems. 
                </p>
                <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                I’m the sole developer of a production-grade Case
                  Management System for the Dhubri Police Department, handling
                  everything from system design and backend logic to frontend
                  and deployment. I believe understanding the problem matters
                  more than the tools used. I enjoy learning deeply, building
                  thoughtfully, and turning ideas into systems that actually
                  work.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="glass-card glass-card-hover p-4 sm:p-6 rounded-xl text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-text-secondary">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
