import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  inject,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type RevealAnimation = 'fade-up' | 'fade-in' | 'blur-reveal' | 'slide-left' | 'slide-right' | 'scale-in';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() appScrollReveal: RevealAnimation = 'fade-up';
  @Input() revealDelay = 0;
  @Input() revealThreshold = 0.15;

  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'will-change', 'opacity, transform');

    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => this.reveal(), this.revealDelay);
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: this.revealThreshold, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(this.el.nativeElement);
  }

  private reveal(): void {
    const el = this.el.nativeElement as HTMLElement;
    el.classList.add(`reveal-${this.appScrollReveal}`);
    this.renderer.setStyle(el, 'opacity', '1');
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
