export type ProjectCategory = "web" | "mobile" | "design" | "fullstack";
export type SkillCategory = "frontend" | "backend" | "tools" | "language";
export type ProjectStatus = "completed" | "in-progress" | "upcoming";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  status: ProjectStatus;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: number; // 1-100
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}