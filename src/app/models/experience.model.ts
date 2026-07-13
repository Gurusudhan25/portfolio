export interface Experience {
  id: string;
  company: string;
  companyUrl: string;
  role: string;
  type: 'Full-time' | 'Contract' | 'Part-time' | 'Freelance';
  location: string;
  startDate: string;
  endDate: string | 'Present';
  summary: string;
  responsibilities: string[];
  technologies: string[];
  highlights: string[];
  achievements?: string[];
}
