import { Component, inject, OnInit, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PortfolioDataService } from '../../../core/services/portfolio-data.service';
import { SeoService } from '../../../core/services/seo.service';
import { BadgeComponent } from '../../../shared/components/ui/badge/badge.component';
import { NavigationComponent } from '../../../shared/components/navigation/navigation.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { ScrollProgressComponent } from '../../../shared/components/ui/scroll-progress/scroll-progress.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-project-case-study',
  standalone: true,
  imports: [RouterLink, BadgeComponent, NavigationComponent, FooterComponent, ScrollProgressComponent],
  templateUrl: './project-case-study.component.html',
  styleUrl: './project-case-study.component.scss',
})
export class ProjectCaseStudyComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly data = inject(PortfolioDataService);
  private readonly seo = inject(SeoService);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map(p => p.get('slug') ?? '')),
    { initialValue: '' }
  );

  readonly project = computed(() => {
    const p = this.data.projects().find(p => p.slug === this.slug()) ?? null;
    return p?.hasCaseStudy === false ? null : p;
  });

  ngOnInit(): void {
    const p = this.project();
    if (p) {
      this.seo.updateMetadata({
        title: `${p.name} Case Study | Gurusudhan V`,
        description: p.tagline,
        canonicalUrl: `https://Gurusudhan.dev/projects/${p.slug}`,
      });
    }
  }
}
