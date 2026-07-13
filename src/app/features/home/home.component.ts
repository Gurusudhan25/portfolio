import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { NavigationComponent } from '../../shared/components/navigation/navigation.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { AchievementsComponent } from './sections/achievements/achievements.component';
import { ResumeComponent } from './sections/resume/resume.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { ScrollProgressComponent } from '../../shared/components/ui/scroll-progress/scroll-progress.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavigationComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    AchievementsComponent,
    ResumeComponent,
    ContactComponent,
    FooterComponent,
    ScrollProgressComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateMetadata({
      title: 'Gurusudhan V | Software Engineer | Angular & Full Stack Developer',
      description:
        'Software Engineer with 3+ years building enterprise web applications. Angular specialist with expertise in TypeScript, RxJS, NgRx, Node.js, and performance-focused frontend engineering.',
      canonicalUrl: 'https://Gurusudhan.dev',
    });
  }
}
