import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PortfolioDataService } from '../../../../core/services/portfolio-data.service';
import { SectionHeaderComponent } from '../../../../shared/components/ui/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  private readonly data = inject(PortfolioDataService);
  private readonly platformId = inject(PLATFORM_ID);
  readonly personal = this.data.personal;

  readonly highlights = [
    '3+ Years Professional Experience',
    'Enterprise Software Development',
    'Angular Specialist',
    'Full Stack (Node.js + MongoDB)',
    'Performance Optimization',
    'Unit Testing (90%+ Coverage)',
    'Best Performer Award',
  ];

  readonly snapshot = [
    { label: 'Total Experience', value: '3+ Years' },
    { label: 'Primary Stack', value: 'Angular' },
    { label: 'Secondary Stack', value: 'Node.js' },
    { label: 'Industry', value: 'Enterprise SaaS' },
    { label: 'Test Coverage', value: '90%+' },
    { label: 'Recognition', value: 'Best Performer' },
  ];

  openResume(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.open(this.personal().resumeUrl, '_blank', 'noopener,noreferrer');
    }
  }

  downloadResume(): void {
    if (isPlatformBrowser(this.platformId)) {
      const link = document.createElement('a');
      link.href = 'https://drive.google.com/uc?export=download&id=1q4EX7OoipeisloiWsIoxBj0CWiU6ybns';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.click();
    }
  }
}
