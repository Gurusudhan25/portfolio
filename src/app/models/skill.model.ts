export interface Skill {
  name: string;
  description: string;
  category: SkillCategory;
  projects?: string[];
  /** Simple Icons slug (https://simpleicons.org), used for the logo marquee. */
  icon?: string;
}

export type SkillCategory =
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'State Management'
  | 'Testing'
  | 'DevOps'
  | 'Tools'
  | 'Languages'
  | 'Architecture'
  | 'AI Tools';
