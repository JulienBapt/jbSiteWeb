import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../../core/animation.service';

@Component({
  selector: 'app-bilan-cta',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section-bilan" id="bilan" aria-label="Bilan découverte">
      <div class="bg-text" aria-hidden="true">PRÉSENTIEL</div>
      <div class="bilan-inner">
        <p class="eyebrow fade-up" #fadeEl>Le premier contact</p>
        <h2 class="bilan-title fade-up" #fadeEl>Le bilan<br>découverte.</h2>
        <p class="bilan-sub fade-up" #fadeEl>Un premier échange d'une heure pour apprendre à te connaître, comprendre ton parcours, ce que tu as déjà essayé et ce qui pourrait réellement faire avancer ta progression.</p>
        <p class="bilan-warning fade-up" #fadeEl>
          <em>"On ne peut pas sauver quelqu'un qui ne veut pas être sauvé."<br>
          Je sélectionne mes clients. Pas par snobisme mais par intime conviction que la motivation doit venir de toi.</em>
        </p>
        <a routerLink="/contact" class="btn-dark fade-up" #fadeEl>Demander ton bilan découverte →</a>
        <p class="bilan-note fade-up" #fadeEl>Je réponds dans les 48h · Fresnes &amp; Antony</p>
      </div>
    </section>
  `,
  styles: [`
    .section-bilan { background: var(--gold); padding: 9rem 5rem; text-align: center; position: relative; overflow: hidden; }
    .bg-text { position: absolute; font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 14rem; color: rgba(255,255,255,0.07); top: 50%; left: 50%; transform: translate(-50%,-50%); letter-spacing: 0.1em; pointer-events: none; user-select: none; white-space: nowrap; }
    .bilan-inner { position: relative; z-index: 1; max-width: 640px; margin: 0 auto; }
    .eyebrow { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: var(--dark-mid); margin-bottom: 1.5rem; display: block; }
    .bilan-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: clamp(2.5rem, 5vw, 4.5rem); text-transform: uppercase; color: var(--dark); line-height: 0.95; letter-spacing: 0.02em; margin-bottom: 1.5rem; }
    .bilan-sub { font-size: 1rem; font-weight: 300; line-height: 1.7; color: var(--dark-mid); margin-bottom: 1rem; }
    .bilan-warning { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; color: rgba(28,28,26,0.6); margin-bottom: 3rem; line-height: 1.5; }
    .btn-dark { display: inline-block; background: var(--dark); color: #fff; font-family: 'Barlow', sans-serif; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none; padding: 1.1rem 2.8rem; transition: background 0.2s, transform 0.15s; &:hover { background: var(--khaki); transform: translateY(-2px); } }
    .bilan-note { margin-top: 1.2rem; font-size: 0.75rem; color: var(--dark-mid); }
    @media (max-width: 900px) { .section-bilan { padding: 5rem 1.5rem; } .bg-text { font-size: 6rem; } }
  `]
})
export class BilanCtaComponent implements AfterViewInit {
  @ViewChildren('fadeEl') fadeEls!: QueryList<ElementRef>;
  private platformId = inject(PLATFORM_ID);
  constructor(private anim: AnimationService) {}
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) this.anim.observe(this.fadeEls.map(el => el.nativeElement));
  }
}
