import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Gurusudhan V | Software Engineer | Angular & Full Stack Developer',
  },
  {
    path: 'projects/:slug',
    loadComponent: () =>
      import('./features/projects/project-case-study/project-case-study.component').then(
        m => m.ProjectCaseStudyComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: '404 — Page Not Found | Gurusudhan V',
  },
];
