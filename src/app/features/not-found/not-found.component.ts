import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found">
      <div class="not-found__inner">
        <span class="not-found__code">404</span>
        <h1 class="not-found__title">Page not found</h1>
        <p class="not-found__desc">The page you're looking for doesn't exist or has been moved.</p>
        <a routerLink="/" class="not-found__btn">Return Home</a>
      </div>
    </div>
  `,
  styles: [`
    .not-found {
      min-height: 100dvh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-8);
    }

    .not-found__inner {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-5);
    }

    .not-found__code {
      font-size: clamp(5rem, 15vw, 10rem);
      font-weight: var(--weight-black);
      background: var(--gradient-accent);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1;
      letter-spacing: var(--tracking-tight);
    }

    .not-found__title {
      font-size: var(--text-3xl);
      font-weight: var(--weight-bold);
      color: var(--color-text-primary);
      letter-spacing: var(--tracking-snug);
    }

    .not-found__desc {
      font-size: var(--text-base);
      color: var(--color-text-secondary);
      max-width: 40ch;
      line-height: var(--leading-relaxed);
    }

    .not-found__btn {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      font-size: var(--text-sm);
      font-weight: var(--weight-semibold);
      color: #fff;
      background: var(--gradient-accent);
      padding: var(--space-3) var(--space-8);
      border-radius: var(--radius-lg);
      transition: var(--transition-normal);
      transition-property: transform, box-shadow;
      margin-top: var(--space-4);
    }

    .not-found__btn:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-glow);
    }

    .not-found__btn:focus-visible {
      outline: 2px solid var(--color-accent-primary);
      outline-offset: 3px;
    }
  `],
})
export class NotFoundComponent {}
