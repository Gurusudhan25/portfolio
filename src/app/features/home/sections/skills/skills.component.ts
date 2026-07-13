import { Component, inject, signal } from '@angular/core';
import { PortfolioDataService } from '../../../../core/services/portfolio-data.service';
import { SectionHeaderComponent } from '../../../../shared/components/ui/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { Skill, SkillCategory } from '../../../../models/skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  private readonly data = inject(PortfolioDataService);

  readonly activeCategory = signal<SkillCategory | 'All'>('All');

  readonly categoryOrder: (SkillCategory | 'All')[] = [
    'All', 'Frontend', 'State Management', 'Backend', 'Database',
    'Testing', 'DevOps', 'Tools', 'Languages', 'AI Tools',
  ];

  get filteredSkills(): Skill[] {
    const cat = this.activeCategory();
    if (cat === 'All') return this.data.skills();
    return this.data.skills().filter(s => s.category === cat);
  }

  private get iconedSkills(): Skill[] {
    return this.data.skills().filter(s => !!s.icon);
  }

  /** First half of the icon set, duplicated for a seamless leftward marquee. */
  get marqueeRowA(): Skill[] {
    const skills = this.iconedSkills;
    const half = skills.slice(0, Math.ceil(skills.length / 2));
    return [...half, ...half];
  }

  /** Second half of the icon set, duplicated for a seamless rightward marquee. */
  get marqueeRowB(): Skill[] {
    const skills = this.iconedSkills;
    const half = skills.slice(Math.ceil(skills.length / 2));
    return [...half, ...half];
  }

  iconUrl(skill: Skill): string {
    return `https://cdn.simpleicons.org/${skill.icon}/ffffff`;
  }

  setCategory(cat: SkillCategory | 'All'): void {
    this.activeCategory.set(cat);
  }

  getProjectNames(projects: string[] = []): string {
    const map: Record<string, string> = {
      consource: 'Consource',
      inksoft: 'InkSoft',
      graphicsflow: 'GraphicsFlow',
    };
    return projects.map(p => map[p] ?? p).join(', ');
  }
}
