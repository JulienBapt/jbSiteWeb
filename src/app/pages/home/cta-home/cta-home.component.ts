import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, PLATFORM_ID, inject } from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../../core/animation.service';

@Component({
  selector: 'app-cta-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section-cta" aria-label="Appel à l'action">
      <div class="cta-parent">
      <div class="cta-inner cta-child">
        <div class="cta-bg-text" aria-hidden="true">CORONA</div>
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
            height="700"
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
      position: relative;
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 800;
      font-size: 14rem;
      color: rgba(255,255,255,0.07);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      letter-spacing: 0.1em;
      pointer-events: none;
      user-select: none;
      white-space: nowrap;
    }

    .cta-inner {
      display: flex;
      flex-direction: column;
      z-index: 1;
      margin: 0 auto;
      justify-content: center;
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
      padding: 20px;
    }
    
    .approche-photo { 
      display: flex;
      justify-content: end;
    }

    @media (max-width: 1600px) {
      .cta-bg-text { font-size: 10vw; }
      .approche-photo { display: none; }
    }
    
    @media (max-width: 900px) {
      .section-cta { padding: 5rem 1.5rem; }
      .cta-bg-text { font-size: 8rem;top: 50%;
        position: absolute;
        left: 50%; }
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
