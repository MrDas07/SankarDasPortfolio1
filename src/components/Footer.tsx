import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const linkedInUrl = 'https://www.linkedin.com/in/sankar-das-425715275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'; 

  return (
    <footer className="relative py-8 bg-bg-darker border-t border-white/5">
      <div className="section-container">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 text-xl sm:text-2xl font-bold gradient-text mb-4">
  <Code size={40} className="text-cyan-400" />
</div>
          {/* Copyright */}
          <p className="text-text-secondary text-sm">
            © {currentYear} All rights reserved
          </p>

          {/* Credit */}
          <p className="text-text-secondary text-xs sm:text-sm flex items-center justify-center gap-2 flex-wrap">
            Designed & Developed with
            <span className="text-cyan-400">❤</span>
            by{' '}
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-text font-medium hover:underline"
            >
              Sankar Das
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
