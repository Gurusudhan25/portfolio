import { Component, inject, signal, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { PortfolioDataService } from '../../../../core/services/portfolio-data.service';
import { ScrollService } from '../../../../core/services/scroll.service';
import { BadgeComponent } from '../../../../shared/components/ui/badge/badge.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [BadgeComponent, NgOptimizedImage],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  private readonly data = inject(PortfolioDataService);
  private readonly scrollService = inject(ScrollService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly personal = this.data.personal;
  readonly stats = this.data.stats;

  readonly currentTitleIndex = signal(0);
  readonly visible = signal(false);

  readonly technologies = [
    'Angular', 'TypeScript', 'RxJS', 'NgRx', 'Node.js', 'MongoDB',
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.visible.set(true), 100);
      this.cycleTitles();
    }
  }

  private cycleTitles(): void {
    const titles = this.personal().titles;
    setInterval(() => {
      this.currentTitleIndex.update(i => (i + 1) % titles.length);
    }, 3000);
  }

  scrollToProjects(): void {
    this.scrollService.scrollToSection('projects');
  }

  scrollToContact(): void {
    this.scrollService.scrollToSection('contact');
  }

  openResume(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.open(this.personal().resumeUrl, '_blank', 'noopener,noreferrer');
    }
  }

  openLink(url: string): void {
    if (isPlatformBrowser(this.platformId)) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }
}
