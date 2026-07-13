import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../../../core/services/portfolio-data.service';
import { SectionHeaderComponent } from '../../../../shared/components/ui/section-header/section-header.component';
import { BadgeComponent } from '../../../../shared/components/ui/badge/badge.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { Achievement } from '../../../../models/achievement.model';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [SectionHeaderComponent, BadgeComponent, ScrollRevealDirective],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss',
})
export class AchievementsComponent {
  private readonly data = inject(PortfolioDataService);
  readonly achievements = this.data.achievements;

  readonly categoryIcons: Record<Achievement['category'], string> = {
    Award: '🏆',
    Technical: '⚙️',
    Performance: '⚡',
    Quality: '✅',
    Growth: '📈',
  };

  readonly categoryVariants: Record<Achievement['category'], 'accent' | 'success' | 'warning' | 'default'> = {
    Award: 'warning',
    Technical: 'accent',
    Performance: 'accent',
    Quality: 'success',
    Growth: 'default',
  };
}
