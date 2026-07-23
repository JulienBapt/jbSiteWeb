import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../../core/animation.service';

@Component({
  selector: 'app-cta-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section-cta" aria-label="Appel à l'action">
      <div class="cta-parent">
        <div class="cta-bg-text" aria-hidden="true">CORONA</div>
        <div class="cta-inner cta-child">
          <p class="cta-eyebrow fade-up" #fadeEl>Prêt à commencer ?</p>
          <h2 class="cta-headline fade-up" #fadeEl>Le premier pas,<br>c'est maintenant.</h2>
          <p class="cta-sub fade-up" #fadeEl>
            Un appel de 20 minutes pour faire le point sur ta situation.<br>
            Gratuit, sans engagement, sans prise de tête.
          </p>
          <a routerLink="/contact" class="btn-dark fade-up" #fadeEl>Réserve ton bilan gratuit →</a>
          <p class="cta-note fade-up" #fadeEl>Appel de 20 min · Gratuit · Sans engagement</p>
        </div>
        <div class="approche-photo fade-up" #fadeEl>
          <img
              src="/assets/images/jb-approche.jpg"
              alt="Jean-Baptiste Corona, coach sportif, en salle de musculation"
              loading="lazy"
              width="800"
              height="1000"
          />
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-cta {
      background: var(--gold);
      /*padding: 9rem 5rem;*/
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .cta-bg-text {
      position: absolute;
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 800;
      font-size: 18rem;
      color: rgba(255,255,255,0.07);
      top: 50%;
      left: 33%;
      transform: translate(-50%, -50%);
      letter-spacing: 0.1em;
      pointer-events: none;
      user-select: none;
      white-space: nowrap;
    }

    .cta-inner {
      position: relative;
      z-index: 1;
      max-width: 620px;
      margin: 0 auto;
    }

    .cta-eyebrow {
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--dark-mid);
      margin-bottom: 1.5rem;
    }

    .cta-headline {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 800;
      font-size: clamp(2.5rem, 5vw, 4.5rem);
      text-transform: uppercase;
      color: var(--dark);
      line-height: 0.95;
      letter-spacing: 0.02em;
      margin-bottom: 1.5rem;
    }

    .cta-sub {
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.7;
      color: var(--dark-mid);
      margin-bottom: 3rem;
    }

    .btn-dark {
      display: inline-block;
      background: var(--dark);
      color: #fff;
      font-family: 'Barlow', sans-serif;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      text-decoration: none;
      padding: 1.1rem 2.8rem;
      transition: background 0.2s, transform 0.15s;

      &:hover { background: var(--khaki); transform: translateY(-2px); }
    }

    .cta-note {
      margin-top: 1.2rem;
      font-size: 0.75rem;
      color: var(--dark-mid);
    }

    .cta-parent {
      display: flex;
      flex-direction: row;
    }

    .cta-child {
      width: 50%;
      align-items: center;
      align-content: center;
    }

    @media (max-width: 1800px) {
        .cta-bg-text {
          left: calc(0.5 * (100vw - 800px));
          font-size: 14rem;
        }
    }
    @media (max-width: 1280px) {
        .cta-bg-text {
            left: 50%;
            font-size: 14rem;
        }
      .approche-photo { display: none; }
    }
    @media (max-width: 900px) {
      .section-cta { padding: 5rem 1.5rem; }
      .cta-bg-text { font-size: 8rem; }
      .cta-parent { flex-direction: column; }
    }
  `]
})
export class CtaHomeComponent implements AfterViewInit {
  @ViewChildren('fadeEl') fadeEls!: QueryList<ElementRef>;
  private platformId = inject(PLATFORM_ID);

  constructor(private anim: AnimationService) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.anim.observe(this.fadeEls.map(el => el.nativeElement));
    }
  }
}
