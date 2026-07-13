import { Injectable, signal } from '@angular/core';
import { Experience } from '../../models/experience.model';
import { Project } from '../../models/project.model';
import { Skill, SkillCategory } from '../../models/skill.model';
import { Achievement } from '../../models/achievement.model';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  // ─── Personal Info ─────────────────────────────────────────────────────────
  readonly personal = signal({
    name: 'Gurusudhan V',
    title: 'Software Engineer',
    titles: [
      'Software Engineer',
      'Frontend Engineer',
      'Angular Specialist',
      'Full Stack Developer',
    ],
    tagline: 'Building software that scales.',
    summary:
      'Software Engineer with 3+ years of experience building enterprise-grade web applications. Specializing in Angular, TypeScript, and modern frontend engineering — with full-stack experience in Node.js and MongoDB.',
    philosophy:
      'Great software isn\'t measured by the amount of code written — it is measured by the problems it solves.',
    location: 'Chennai, Tamil Nadu, India',
    availability: 'Open to Opportunities',
    email: 'Gurusudhan@email.com',
    linkedin: 'https://linkedin.com/in/Gurusudhan',
    github: 'https://github.com/Gurusudhan',
    resumeUrl:
      'https://drive.google.com/file/d/1q4EX7OoipeisloiWsIoxBj0CWiU6ybns/view?usp=sharing',
  });

  // ─── Stats ─────────────────────────────────────────────────────────────────
  readonly stats = signal([
    { label: 'Years of Experience', value: '3+', suffix: '' },
    { label: 'Enterprise Applications', value: '3', suffix: '' },
    { label: 'Unit Test Coverage', value: '90', suffix: '%' },
    { label: 'Recognition', value: 'Best Performer', suffix: '' },
  ]);

  // ─── Experience ────────────────────────────────────────────────────────────
  readonly experiences = signal<Experience[]>([
    {
      id: 'consource',
      company: 'Consource',
      companyUrl: 'https://consource.io/',
      role: 'Full Stack Developer',
      type: 'Full-time',
      location: 'Chennai, Tamil Nadu, India',
      startDate: '2025-07',
      endDate: 'Present',
      summary:
        'Working on Consource — an enterprise consulting procurement platform used by large organizations to manage sourcing, governance, and ROI tracking for consulting engagements. Building full-stack features end to end with Angular on the frontend and Node.js on the backend.',
      responsibilities: [
        'Design and build Angular components for procurement workflows including demand management and sourcing modules',
        'Develop and maintain Node.js backend services and REST APIs powering procurement data flows',
        'Implement responsive UI designs ensuring consistent experience across device types',
        'Collaborate with product and backend teams to translate business requirements into reliable full-stack features',
        'Maintain code quality through reviews and adherence to Angular and Node.js best practices',
      ],
      technologies: [
        'Angular', 'TypeScript', 'RxJS', 'Node.js', 'Express.js', 'REST APIs', 'SCSS', 'HTML5', 'Git',
      ],
      highlights: [
        'Contributing to an enterprise procurement platform used by large organizations',
        'Building full-stack features spanning Angular frontend and Node.js backend',
        'Delivering complex sourcing and governance workflows end to end',
      ],
    },
    {
      id: 'graphicsflow',
      company: 'GraphicsFlow',
      companyUrl: 'https://www.graphicsflow.com/',
      role: 'Software Development Engineer',
      type: 'Full-time',
      location: 'Chennai, Tamil Nadu, India (Remote)',
      startDate: '2024-07',
      endDate: '2025-06',
      summary:
        'Worked on GraphicsFlow, an art management platform for the print and apparel industry, primarily on the frontend with Angular while also contributing to backend services in .NET.',
      responsibilities: [
        'Designed and built scalable Angular components for GraphicsFlow, used by thousands of businesses',
        'Contributed to backend services and APIs in .NET supporting core platform features',
        'Integrated REST APIs and managed application state using RxJS for predictable data flows',
        'Collaborated with product, design, and backend teams in agile sprints to deliver features on schedule',
        'Conducted code reviews to maintain quality standards across frontend and backend changes',
      ],
      technologies: [
        'Angular', 'TypeScript', 'RxJS', '.NET', 'C#', 'REST APIs', 'SCSS', 'HTML5', 'Git', 'Azure DevOps',
      ],
      highlights: [
        'Delivered production features across both frontend and backend of GraphicsFlow',
        'Built Angular UI used by thousands of print and apparel businesses',
        'Gained full-stack exposure working across Angular and .NET',
      ],
    },
    {
      id: 'inksoft',
      company: 'InkSoft',
      companyUrl: 'https://www.inksoft.com/',
      role: 'Frontend Developer',
      type: 'Full-time',
      location: 'Chennai, Tamil Nadu, India (Remote)',
      startDate: '2023-07',
      endDate: '2024-06',
      summary:
        'Worked on InkSoft, an e-commerce platform for the print and apparel industry, focused primarily on frontend development with Angular.',
      responsibilities: [
        'Built and maintained Angular components across the InkSoft e-commerce platform',
        'Integrated complex REST APIs and managed application state using RxJS',
        'Implemented unit tests to improve coverage on critical application modules',
        'Collaborated with product and design teams in agile sprints to deliver features on schedule',
        'Optimized rendering performance and bundle size to improve user experience across devices',
      ],
      technologies: [
        'Angular', 'TypeScript', 'RxJS', 'REST APIs', 'SCSS', 'HTML5', 'Git', 'Jasmine', 'Karma',
      ],
      highlights: [
        'Focused on frontend development for an e-commerce platform used by thousands of businesses',
        'Improved unit test coverage on core modules',
        'Optimized performance and bundle size across the application',
      ],
    },
    {
      id: 'maxis-assets',
      company: 'Maxis',
      companyUrl: '',
      role: 'Software Engineer Intern',
      type: 'Full-time',
      location: 'Chennai, Tamil Nadu, India',
      startDate: '2023-01',
      endDate: '2023-06',
      summary:
        'Built Maxis Assets, an internal application for tracking and managing company assets, from scratch as a full-stack developer using React and Node.js.',
      responsibilities: [
        'Developed the application from scratch, covering both frontend and backend',
        'Built the frontend UI in React for tracking and managing company assets',
        'Designed and implemented REST APIs and backend services using Node.js',
        'Worked directly with stakeholders to gather requirements and iterate on features',
      ],
      technologies: [
        'React', 'JavaScript', 'Node.js', 'Express.js', 'REST APIs', 'HTML5', 'CSS3', 'Git',
      ],
      highlights: [
        'Built an internal asset management application from scratch as a full-stack developer',
        'Delivered both frontend and backend independently during a 6-month internship',
      ],
    },
  ]);

  // ─── Projects ──────────────────────────────────────────────────────────────
  readonly projects = signal<Project[]>([
    {
      id: 'consource',
      slug: 'consource',
      company: 'Consource',
      companyUrl: 'https://consource.io/',
      name: 'Consource',
      tagline: 'Enterprise consulting procurement platform for demand management, sourcing, and ROI tracking.',
      industry: 'Enterprise SaaS / Procurement',
      role: 'Full Stack Developer',
      startDate: '2025-07',
      endDate: 'Present',
      summary:
        'Consource is an end-to-end consulting procurement solution built for enterprises. It helps organizations manage consulting demand, run competitive sourcing, govern delivery, and track consulting ROI — all in one platform.',
      problem:
        'Large enterprises struggle to manage consulting spend strategically. Traditional procurement approaches rely on spreadsheets, fragmented communications, and ad-hoc decisions — leading to poor ROI visibility and governance gaps.',
      solution:
        'Building full-stack features spanning Angular frontend workflows for demand management and sourcing, backed by Node.js services and REST APIs that power enterprise procurement data flows.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Node.js', 'Express.js', 'REST APIs', 'SCSS', 'HTML5', 'Git'],
      highlights: [
        'Building procurement workflow features end to end, frontend and backend',
        'Developing Node.js APIs for demand and sourcing data management',
        'Delivering responsive, accessible interfaces for complex enterprise workflows',
      ],
      featured: true,
    },
    {
      id: 'graphicsflow',
      slug: 'graphicsflow',
      company: 'GraphicsFlow',
      companyUrl: 'https://www.graphicsflow.com/',
      name: 'GraphicsFlow',
      tagline: 'Art management and graphics platform for decorated apparel and print businesses.',
      industry: 'SaaS / Art Management / Print',
      role: 'Software Development Engineer',
      startDate: '2024-07',
      endDate: '2025-06',
      summary:
        'GraphicsFlow is an all-in-one art management platform for print, promotional, and decorated apparel businesses. It enables businesses to store, organize, and manage customer logos, graphics, and print files — and provides tools for artwork creation, customer approvals, and design workflows.',
      problem:
        'Art departments at print shops waste hours managing files across email, Dropbox, and disconnected tools. They need a purpose-built platform to organize customer artwork, generate mockups, and streamline approvals.',
      solution:
        'Built Angular-driven features for art management dashboards, file organization, and workflow interfaces, while also contributing to backend services in .NET supporting core platform functionality.',
      technologies: [
        'Angular', 'TypeScript', 'RxJS', '.NET', 'C#', 'REST APIs',
        'SCSS', 'HTML5', 'Git', 'Azure DevOps',
      ],
      highlights: [
        'Built art management features used by thousands of print businesses',
        'Implemented file organization and customer approval workflow interfaces',
        'Contributed to both frontend Angular and backend .NET services',
      ],
      featured: true,
    },
    {
      id: 'inksoft',
      slug: 'inksoft',
      company: 'InkSoft',
      companyUrl: 'https://www.inksoft.com/',
      name: 'InkSoft',
      tagline: 'E-commerce platform for custom branded merchandise and web-to-print businesses.',
      industry: 'E-Commerce / Print & Apparel',
      role: 'Frontend Developer',
      startDate: '2023-07',
      endDate: '2024-06',
      summary:
        'InkSoft is the industry-leading e-commerce platform for branded merchandise. It gives print shops, apparel decorators, and promotional product businesses everything they need to sell custom merchandise online — from a web-to-print designer to storefront management and order workflows.',
      problem:
        'Print businesses need complex, custom e-commerce workflows that standard platforms can\'t support. Managing designs, products, stores, and orders for thousands of customers requires scalable, purpose-built software.',
      solution:
        'Engineered Angular features across the InkSoft platform including store management, product configuration, and order processing interfaces. Maintained high test coverage and optimized performance.',
      technologies: [
        'Angular', 'TypeScript', 'RxJS', 'REST APIs',
        'SCSS', 'HTML5', 'Git', 'Jasmine', 'Karma',
      ],
      highlights: [
        'Built features used by thousands of print and apparel businesses daily',
        'Improved unit test coverage on core modules',
        'Optimized rendering performance and bundle size',
      ],
      featured: true,
    },
    {
      id: 'maxis-assets',
      slug: 'maxis-assets',
      company: 'Maxis',
      companyUrl: '',
      name: 'Maxis Assets',
      tagline: 'Internal application for tracking and managing company assets.',
      industry: 'Internal Tools / Asset Management',
      role: 'Software Engineer Intern (Full Stack)',
      startDate: '2023-01',
      endDate: '2023-06',
      summary:
        'Maxis Assets is an internal application built to track and manage company assets, replacing manual, ad-hoc tracking with a single source of truth for the organization.',
      problem:
        'The company had no centralized way to track its assets, relying on manual records that were slow to update and easy to lose track of.',
      solution:
        'Designed and built the application from scratch as a full-stack developer — a React frontend for browsing and managing assets, backed by a Node.js REST API and database layer.',
      technologies: ['React', 'JavaScript', 'Node.js', 'Express.js', 'REST APIs', 'HTML5', 'CSS3', 'Git'],
      highlights: [
        'Built an internal asset management tool from scratch, frontend and backend',
        'Delivered a working full-stack application within a 6-month internship',
      ],
      featured: false,
      hasCaseStudy: false,
    },
  ]);

  // ─── Skills ────────────────────────────────────────────────────────────────
  readonly skills = signal<Skill[]>([
    // Frontend
    { name: 'Angular', description: 'Enterprise frontend framework — components, routing, forms, animations, and performance optimization across production applications.', category: 'Frontend', projects: ['consource', 'inksoft', 'graphicsflow'], icon: 'angular' },
    { name: 'TypeScript', description: 'Strictly typed JavaScript for scalable, maintainable codebases. Used across all production projects with strict mode enabled.', category: 'Languages', projects: ['consource', 'inksoft', 'graphicsflow'], icon: 'typescript' },
    { name: 'JavaScript', description: 'Core language for web development — ES2022+ features, async patterns, and DOM manipulation.', category: 'Languages', icon: 'javascript' },
    { name: 'HTML5', description: 'Semantic markup, accessibility best practices, and modern HTML features for structured, meaningful content.', category: 'Frontend', icon: 'html5' },
    { name: 'CSS3 / SCSS', description: 'Advanced styling with custom properties, animations, grid, flexbox, and component-scoped SCSS architecture.', category: 'Frontend', projects: ['consource', 'inksoft', 'graphicsflow'], icon: 'css' },
    { name: 'RxJS', description: 'Reactive programming with Observables for managing async data streams, event handling, and complex state flows.', category: 'State Management', projects: ['consource', 'inksoft', 'graphicsflow'], icon: 'reactivex' },
    { name: 'NgRx', description: 'Redux-inspired global state management for complex Angular applications — store, effects, selectors, and actions.', category: 'State Management', projects: ['inksoft', 'graphicsflow'], icon: 'ngrx' },
    { name: 'Angular Signals', description: 'Fine-grained reactive state management using Angular\'s modern Signals API for predictable, performant UI updates.', category: 'State Management', icon: 'angular' },
    // Backend
    { name: 'Node.js', description: 'Backend JavaScript runtime for building REST APIs and server-side services supporting frontend applications.', category: 'Backend', projects: ['inksoft', 'graphicsflow'], icon: 'nodedotjs' },
    { name: 'Express.js', description: 'Minimal Node.js framework for building RESTful APIs with middleware, routing, and error handling.', category: 'Backend', icon: 'express' },
    { name: 'REST APIs', description: 'Designing, consuming, and integrating RESTful APIs with proper error handling, typing, and interceptor patterns.', category: 'Backend', projects: ['consource', 'inksoft', 'graphicsflow'] },
    // Database
    { name: 'MongoDB', description: 'Document-based NoSQL database for flexible data modeling in Node.js-powered backend services.', category: 'Database', icon: 'mongodb' },
    // Testing
    { name: 'Jasmine / Karma', description: 'Angular unit testing with Jasmine for component, service, and integration tests — maintaining 90%+ coverage on critical modules.', category: 'Testing', projects: ['inksoft', 'graphicsflow'], icon: 'jasmine' },
    // DevOps
    { name: 'Git', description: 'Version control for collaborative development — branching strategies, code reviews, and clean commit history.', category: 'DevOps', projects: ['consource', 'inksoft', 'graphicsflow'], icon: 'git' },
    { name: 'Azure DevOps', description: 'CI/CD pipelines, sprint planning, work items, and deployment management for enterprise development workflows.', category: 'DevOps', projects: ['inksoft', 'graphicsflow'] },
    // Tools
    { name: 'VS Code', description: 'Primary development environment with Angular-optimized extensions, debugging, and productivity workflows.', category: 'Tools' },
    { name: 'Postman', description: 'API testing and documentation tool for verifying REST endpoints during development and integration.', category: 'Tools', icon: 'postman' },
    { name: 'Chrome DevTools', description: 'Performance profiling, debugging, network analysis, and accessibility testing directly in the browser.', category: 'Tools', icon: 'googlechrome' },
    // AI
    { name: 'GitHub Copilot', description: 'AI pair-programming tool for accelerating development velocity while maintaining code quality and review standards.', category: 'AI Tools', icon: 'githubcopilot' },
    { name: 'Claude / ChatGPT', description: 'AI assistants for exploring architecture patterns, debugging complex issues, and improving documentation quality.', category: 'AI Tools', icon: 'claude' },
  ]);

  // ─── Achievements ──────────────────────────────────────────────────────────
  readonly achievements = signal<Achievement[]>([
    {
      id: 'best-performer',
      title: 'Best Performer Award',
      category: 'Award',
      date: 'June 2025',
      description: 'Recognized for consistent engineering contributions, product quality, collaboration, and performance throughout the year.',
      impact: 'Acknowledged as top performer within the engineering team for delivering high-quality features, maintaining reliability, and contributing to team success.',
    },
    {
      id: 'angular-migration',
      title: 'Angular Version Migration',
      category: 'Technical',
      description: 'Successfully migrated production Angular applications through multiple major version upgrades while maintaining platform stability and zero downtime.',
      impact: 'Kept the platform on the latest Angular release, unlocking performance improvements, modern features, and long-term maintainability for the engineering team.',
      technologies: ['Angular', 'TypeScript', 'RxJS'],
    },
    {
      id: 'test-coverage',
      title: '90% Unit Test Coverage',
      category: 'Quality',
      description: 'Implemented comprehensive unit test suites achieving above 90% coverage across critical application modules.',
      impact: 'Significantly reduced regression risk, improved deployment confidence, and established a quality baseline for ongoing development.',
      technologies: ['Jasmine', 'Karma', 'Angular'],
      metric: '90%+',
    },
    {
      id: 'performance-optimization',
      title: 'Application Performance Optimization',
      category: 'Performance',
      description: 'Identified and resolved performance bottlenecks in Angular applications including bundle size reduction, lazy loading improvements, and rendering optimizations.',
      impact: 'Improved perceived load time and runtime performance for end users, contributing to better product experience and engagement.',
      technologies: ['Angular', 'TypeScript', 'Chrome DevTools'],
    },
  ]);

  // ─── Skills by category ────────────────────────────────────────────────────
  getSkillsByCategory(): Map<SkillCategory, Skill[]> {
    const map = new Map<SkillCategory, Skill[]>();
    for (const skill of this.skills()) {
      const list = map.get(skill.category) ?? [];
      list.push(skill);
      map.set(skill.category, list);
    }
    return map;
  }
}
