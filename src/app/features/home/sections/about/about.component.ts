import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PortfolioDataService } from '../../../../core/services/portfolio-data.service';
import { SectionHeaderComponent } from '../../../../shared/components/ui/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

interface Principle {
  icon: SafeHtml;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private readonly data = inject(PortfolioDataService);
  private readonly sanitizer = inject(DomSanitizer);
  readonly personal = this.data.personal;

  private icon(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  readonly principles: Principle[] = [
    {
      icon: this.icon(`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`),
      title: 'Think Before Building',
      description: 'Good architecture comes from understanding the problem deeply before writing the first line of code.',
    },
    {
      icon: this.icon(`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`),
      title: 'Write Maintainable Code',
      description: 'Code is read far more than it is written. Clarity and consistency make software easier to evolve.',
    },
    {
      icon: this.icon(`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`),
      title: 'Optimize Performance',
      description: 'Speed is a feature. Fast applications create better experiences and drive real business value.',
    },
    {
      icon: this.icon(`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`),
      title: 'Measure Everything',
      description: 'Engineering decisions backed by data are more reliable than those based on assumptions alone.',
    },
    {
      icon: this.icon(`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`),
      title: 'Collaborate Openly',
      description: 'The best products are built by teams that communicate clearly, review honestly, and learn from each other.',
    },
    {
      icon: this.icon(`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`),
      title: 'Continuously Learn',
      description: 'The best engineers stay curious. Every project is an opportunity to get better at the craft.',
    },
  ];
}
