export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}