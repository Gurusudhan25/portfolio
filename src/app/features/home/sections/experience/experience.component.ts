import { Component, inject, signal } from '@angular/core';
import { PortfolioDataService } from '../../../../core/services/portfolio-data.service';
import { SectionHeaderComponent } from '../../../../shared/components/ui/section-header/section-header.component';
import { BadgeComponent } from '../../../../shared/components/ui/badge/badge.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { Experience } from '../../../../models/experience.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionHeaderComponent, BadgeComponent, ScrollRevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  private readonly data = inject(PortfolioDataService);
  readonly experiences = this.data.experiences;
  readonly expandedId = signal<string | null>(null);

  toggle(id: string): void {
    this.expandedId.update(v => (v === id ? null : id));
  }

  isExpanded(id: string): boolean {
    return this.expandedId() === id;
  }

  formatDate(date: string | 'Present'): string {
    if (date === 'Present') return 'Present';
    const [year, month] = date.split('-');
    const d = new Date(+year, +month - 1);
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }

  getDuration(start: string, end: string | 'Present'): string {
    const startDate = new Date(start);
    const endDate = end === 'Present' ? new Date() : new Date(end);
    const months =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    if (years === 0) return `${remainingMonths}mo`;
    if (remainingMonths === 0) return `${years}yr`;
    return `${years}yr ${remainingMonths}mo`;
  }
}
