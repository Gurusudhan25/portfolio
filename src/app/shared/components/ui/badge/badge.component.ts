import { Component, Input } from '@angular/core';

export type BadgeVariant = 'default' | 'accent' | 'success' | 'warning' | 'muted';
export type BadgeSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-badge',
  standalone: true,
  template: `
    <span class="badge" [class]="'badge--' + variant + ' badge--' + size">
      <ng-content />
    </span>
  `,
  styles: [`
    .badge {
      display: inline-flex;
      align-items: center;
      gap: var(--space-1);
      border-radius: var(--radius-full);
      font-weight: var(--weight-medium);
      white-space: nowrap;
      transition: var(--transition-fast);
      transition-property: background, color, border-color;
    }

    /* Sizes */
    .badge--sm {
      font-size: var(--text-xs);
      padding: 2px var(--space-3);
    }
    .badge--md {
      font-size: var(--text-xs);
      padding: var(--space-1) var(--space-3);
    }
    .badge--lg {
      font-size: var(--text-sm);
      padding: var(--space-2) var(--space-4);
    }

    /* Variants */
    .badge--default {
      background: rgba(255,255,255,0.06);
      color: var(--color-text-secondary);
      border: 1px solid var(--color-border-subtle);
    }
    .badge--accent {
      background: var(--color-accent-primary-muted);
      color: var(--color-accent-primary-hover);
      border: 1px solid var(--color-accent-primary-border);
    }
    .badge--success {
      background: var(--color-success-muted);
      color: var(--color-success);
      border: 1px solid rgba(16,185,129,0.20);
    }
    .badge--warning {
      background: var(--color-warning-muted);
      color: var(--color-warning);
      border: 1px solid rgba(245,158,11,0.20);
    }
    .badge--muted {
      background: transparent;
      color: var(--color-text-muted);
      border: 1px solid var(--color-border-subtle);
    }
  `],
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'default';
  @Input() size: BadgeSize = 'md';
}
