import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  template: `
    <div class="section-header">
      @if (label) {
        <span class="section-header__label">{{ label }}</span>
      }
      <h2 class="section-header__title">{{ title }}</h2>
      @if (subtitle) {
        <p class="section-header__subtitle">{{ subtitle }}</p>
      }
    </div>
  `,
  styles: [`
    .section-header {
      text-align: center;
      max-width: 640px;
      margin-inline: auto;
      margin-bottom: var(--space-16);

      @media (max-width: 640px) {
        margin-bottom: var(--space-10);
      }
    }

    .section-header__label {
      position: relative;
      display: inline-block;
      font-size: var(--text-xs);
      font-weight: var(--weight-semibold);
      letter-spacing: var(--tracking-widest);
      text-transform: uppercase;
      color: var(--color-accent-primary);
      margin-bottom: var(--space-6);
      padding-bottom: var(--space-3);

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        translate: -50% 0;
        width: 32px;
        height: 2px;
        border-radius: var(--radius-full);
        background: var(--gradient-accent);
      }
    }

    .section-header__title {
      font-size: var(--text-display-lg);
      font-weight: var(--weight-extrabold);
      letter-spacing: var(--tracking-tight);
      color: var(--color-text-primary);
      line-height: var(--leading-tight);
      margin-bottom: var(--space-4);
    }

    .section-header__subtitle {
      font-size: var(--text-lg);
      color: var(--color-text-secondary);
      line-height: var(--leading-relaxed);
      max-width: 56ch;
      margin-inline: auto;
    }
  `],
})
export class SectionHeaderComponent {
  @Input() label = '';
  @Input({ required: true }) title = '';
  @Input() subtitle = '';
}
