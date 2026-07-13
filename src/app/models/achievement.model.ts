export interface Achievement {
  id: string;
  title: string;
  category: 'Award' | 'Technical' | 'Performance' | 'Quality' | 'Growth';
  date?: string;
  description: string;
  impact: string;
  technologies?: string[];
  metric?: string;
}
