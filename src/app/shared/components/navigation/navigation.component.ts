import {
  Component,
  inject,
  signal,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScrollService } from '../../../core/services/scroll.service';

interface NavItem {
  label: string;
  anchor: string;
}

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  host: { '(document:keydown.escape)': 'onEscape()' },
})
export class NavigationComponent {
  private readonly scrollService = inject(ScrollService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly isScrolled = this.scrollService.isScrolled;
  readonly mobileOpen = signal(false);

  readonly navItems: NavItem[] = [
    { label: 'About', anchor: 'about' },
    { label: 'Experience', anchor: 'experience' },
    { label: 'Projects', anchor: 'projects' },
    { label: 'Skills', anchor: 'skills' },
    { label: 'Achievements', anchor: 'achievements' },
    { label: 'Contact', anchor: 'contact' },
  ];

  readonly activeSection = signal('');

  scrollTo(anchor: string): void {
    this.scrollService.scrollToSection(anchor);
    this.mobileOpen.set(false);
  }

  toggleMobile(): void {
    this.mobileOpen.update(v => !v);
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
  }

  openResume(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.open(
        'https://drive.google.com/file/d/1q4EX7OoipeisloiWsIoxBj0CWiU6ybns/view?usp=sharing',
        '_blank',
        'noopener,noreferrer'
      );
    }
  }

  onEscape(): void {
    this.mobileOpen.set(false);
  }
}
