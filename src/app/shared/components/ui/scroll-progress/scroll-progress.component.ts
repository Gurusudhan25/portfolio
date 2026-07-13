import { Component, inject } from '@angular/core';
import { ScrollService } from '../../../../core/services/scroll.service';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  template: `
    <div class="scroll-progress" role="progressbar"
         [attr.aria-valuenow]="(progress() * 100).toFixed(0)"
         aria-valuemin="0" aria-valuemax="100"
         aria-label="Page scroll progress">
      <div class="scroll-progress__bar" [style.transform]="'scaleX(' + progress() + ')'"></div>
    </div>
  `,
  styles: [`
    .scroll-progress {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      z-index: 200;
      background: transparent;
    }

    .scroll-progress__bar {
      height: 100%;
      background: var(--gradient-accent);
      transform-origin: left center;
      transform: scaleX(0);
      transition: transform 80ms linear;
      will-change: transform;
    }
  `],
})
export class ScrollProgressComponent {
  private readonly scrollService = inject(ScrollService);
  readonly progress = this.scrollService.scrollProgress;
}
