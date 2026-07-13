export interface Project {
  id: string;
  slug: string;
  company: string;
  companyUrl: string;
  name: string;
  tagline: string;
  industry: string;
  role: string;
  startDate: string;
  endDate: string | 'Present';
  summary: string;
  problem: string;
  solution: string;
  technologies: string[];
  highlights: string[];
  featured: boolean;
  /** Set to false for internal/private projects with no case study page or public link. */
  hasCaseStudy?: boolean;
}
