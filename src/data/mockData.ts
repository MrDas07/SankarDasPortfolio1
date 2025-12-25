import type { Project, Skill, SocialLink } from '../types';
import pl from "../assets/Police.png";

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Case Management System',
    description: 'Dhubri Police (dhubripoliceinfo.com).  Sole developer of a MERN Stack Case Management System with dashboard, filters, case tracking, and status-based UI. Used in real environment by Assam Police',
    longDescription: 'A comprehensive analytics platform featuring real-time data processing, interactive charts, and customizable dashboards. Built with modern web technologies for optimal performance.',
    category: 'fullstack',
    status: 'completed',
    image: pl,
    technologies: ['React', 'TypeScript', 'Express.js', 'Node.js', 'MongoDB','Firebase','JWT','Chart.js'],
    liveUrl: 'https://dhubripoliceinfo.com',
    // githubUrl: 'https://github.com/example/project',
    featured: true,
  },
  {
    id: '2',
    title: 'Servbox Multiservice Platform',
    description: 'Modern Multiservice Platform  with seamless user experience',
    longDescription: 'A feature-rich mobile shopping application with smooth animations, secure payments, and personalized recommendations. Optimized for both iOS and Android platforms.',
    category: 'fullstack',
    status: 'completed',
    image: 'https://images.pexels.com/photos/17561405/pexels-photo-17561405.jpeg',
    technologies: ['React', 'REST API', 'Firebase', 'Stripe'],
    liveUrl: 'https://servbox.in',
    featured: true,
  },
  {
    id: '3',
    title: 'Freelanco',
    description: 'Full-featured online Freelancing Platform with advanced gigs filtering',
    longDescription: 'A scalable e-commerce solution with inventory management, order tracking, and integrated payment gateways. Features a clean, minimal design focused on conversion.',
    category: 'web',
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1657256031812-4702fe316f1b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxFLWNvbW1lcmNlJTIwd2Vic2l0ZSUyMHByb2R1Y3QlMjBwYWdlJTIwd2l0aCUyMGNsZWFuJTIwbWluaW1hbCUyMG1vZGVybiUyMGRlc2lnbiUyMG9uJTIwbGFwdG9wJTIwc2NyZWVufGVufDB8MHx8fDE3NjY2NDQwMzZ8MA&ixlib=rb-4.1.0&q=85',
    technologies: ['Next.js', 'Tailwind CSS', 'Stripe API','Supabase','JWT','Socket-IO','Node.js','Express.js'],
    githubUrl: 'https://github.com/example/project',
    featured: true,
  },
];

export const mockSkills: Skill[] = [
  // Frontend
  { id: '1', name: 'React', category: 'frontend', proficiency: 95 },
  { id: '2', name: 'TypeScript', category: 'frontend', proficiency: 90 },
  { id: '3', name: 'Next.js', category: 'frontend', proficiency: 88 },
  { id: '4', name: 'Tailwind CSS', category: 'frontend', proficiency: 92 },
  { id: '5', name: 'Gsap', category: 'frontend', proficiency: 85 },
  { id: '6', name: 'Framer Motion', category: 'frontend', proficiency: 87 },
  { id: '7', name: 'Bootstrap', category: 'frontend', proficiency: 90 },
  { id: '8', name: 'Chart.js', category: 'frontend', proficiency: 90 },
  
  // Backend
  { id: '7', name: 'Node.js', category: 'backend', proficiency: 88 },
  { id: '8', name: 'PostgreSQL', category: 'backend', proficiency: 85 },
  { id: '9', name: 'MongoDB', category: 'backend', proficiency: 83 },
  { id: '10', name: 'Express.js', category: 'backend', proficiency: 80 },
  { id: '11', name: 'REST APIs', category: 'backend', proficiency: 90 },
  { id: '12', name: 'FireAuth', category: 'backend', proficiency: 90 },
  { id: '13', name: 'JWT', category: 'backend', proficiency: 90 },
  
  // Tools
  { id: '12', name: 'Git', category: 'tools', proficiency: 93 },
  { id: '13', name: 'Postman', category: 'tools', proficiency: 82 },
  { id: '14', name: 'Figma', category: 'tools', proficiency: 88 },
  { id: '15', name: 'FireBase', category: 'tools', proficiency: 95 },
  { id: '16', name: 'VS Code', category: 'tools', proficiency: 95 },
  { id: '17', name: 'Cursor', category: 'tools', proficiency: 95 },


//Programming Languages
{ id: '18', name: 'C++', category: 'language', proficiency: 90 },
{ id: '19', name: 'C', category: 'language', proficiency: 90 },
{ id: '20', name: 'Java', category: 'language', proficiency: 87 },
{ id: '21', name: 'JavaScript', category: 'language', proficiency: 92 },
{ id: '22', name: 'Python', category: 'language', proficiency: 87 },


];

export const mockSocialLinks: SocialLink[] = [
  { id: '1', platform: 'GitHub', url: 'https://github.com/MrDas07' },
  { id: '2', platform: 'LinkedIn', url: 'https://www.linkedin.com/in/sankar-das-425715275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app '},
  { id: '3', platform: 'Twitter', url: 'https://x.com/Sankardas080' },
  { id: '4', platform: 'Email', url: 'mailto:sankardas1627@gmail.com' },
];