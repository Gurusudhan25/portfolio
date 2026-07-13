import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

const DEFAULTS: SeoConfig = {
  title: 'Gurusudhan V | Software Engineer | Angular & Full Stack Developer',
  description:
    'Software Engineer with 3+ years building enterprise web applications. Specializing in Angular, TypeScript, Node.js, and performance-focused frontend engineering.',
  keywords:
    'Software Engineer, Frontend Engineer, Angular Developer, TypeScript, JavaScript, Node.js, RxJS, NgRx, Full Stack Developer, Enterprise Applications',
  ogImage: '/assets/images/og-image.png',
  ogType: 'website',
};

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly titleService = inject(Title);
  private readonly document = inject(DOCUMENT);

  updateMetadata(config: SeoConfig = {}): void {
    const resolved = { ...DEFAULTS, ...config };

    // Title
    const pageTitle = resolved.title!;
    this.titleService.setTitle(pageTitle);
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });

    // Description
    const desc = resolved.description!;
    this.meta.updateTag({ name: 'description', content: desc });
    this.meta.updateTag({ property: 'og:description', content: desc });
    this.meta.updateTag({ name: 'twitter:description', content: desc });

    // Keywords
    if (resolved.keywords) {
      this.meta.updateTag({ name: 'keywords', content: resolved.keywords });
    }

    // OG Image
    if (resolved.ogImage) {
      this.meta.updateTag({ property: 'og:image', content: resolved.ogImage });
      this.meta.updateTag({ name: 'twitter:image', content: resolved.ogImage });
    }

    // OG Type
    this.meta.updateTag({ property: 'og:type', content: resolved.ogType ?? 'website' });

    // Twitter card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

    // Robots
    const robots = resolved.noIndex ? 'noindex, nofollow' : 'index, follow';
    this.meta.updateTag({ name: 'robots', content: robots });

    // Canonical
    if (resolved.canonicalUrl) {
      this.setCanonical(resolved.canonicalUrl);
    }
  }

  private setCanonical(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
