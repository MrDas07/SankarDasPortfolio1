import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { mockSocialLinks } from '../data/mockData';
import type { ContactFormData } from '../types';

const socialIcons: Record<string, typeof Mail> = {
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build mailto link with prefilled content
    const mailtoLink = `mailto:sankardas1627@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open the default email client
    window.location.href = mailtoLink;

    // Optional: Show success state temporarily
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus('idle');
      // Keep the form filled or uncomment next line to reset
      // setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative py-20 sm:py-32 bg-bg-darker">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 rounded-2xl space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-text-secondary"
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-text-secondary"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-text-secondary resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="btn-primary w-full cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {formStatus === 'success' ? '✓ Message Ready to Send!' : 'Send Message'}
              </motion.button>

              {/* Success Message */}
              {formStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center text-sm"
                >
                  Email draft opened! Review and send in your mail client.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Contact Info Card */}
            <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Or reach me at</h3>
              <a
                href="mailto:sankardas1627@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg sm:text-xl"
              >
                sankardas1627@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Connect with me</h3>
              <div className="grid grid-cols-2 gap-4">
                {mockSocialLinks.map((link, index) => {
                  const Icon = socialIcons[link.platform];
                  return (
                    <motion.a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card glass-card-hover p-4 rounded-xl flex items-center gap-3 group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -4 }}
                    >
                      <Icon
                        size={24}
                        className="text-cyan-400 group-hover:text-cyan-300 transition-colors"
                        style={{ width: '24px', height: '24px', color: 'var(--color-cyan-primary)' }}
                      />
                      <span className="font-medium text-sm sm:text-base">{link.platform}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
