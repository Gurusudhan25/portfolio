import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioDataService } from '../../../../core/services/portfolio-data.service';
import { SectionHeaderComponent } from '../../../../shared/components/ui/section-header/section-header.component';
import { BadgeComponent } from '../../../../shared/components/ui/badge/badge.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent, BadgeComponent, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private readonly data = inject(PortfolioDataService);
  readonly projects = this.data.projects;

  readonly industryColors: Record<string, string> = {
    'Enterprise SaaS / Procurement': 'accent',
    'E-Commerce / Print & Apparel': 'success',
    'SaaS / Art Management / Print': 'warning',
  };

  getBadgeVariant(industry: string): 'accent' | 'success' | 'warning' | 'default' {
    return (this.industryColors[industry] as any) ?? 'default';
  }
}
