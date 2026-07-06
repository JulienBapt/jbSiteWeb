import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../../core/animation.service';

@Component({
  selector: 'app-objectif',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section-objectif" aria-label="Mon objectif">
      <div class="objectif-inner">
        <p class="eyebrow fade-up" #fadeEl>Mon objectif</p>
        <h2 class="section-title fade-up" #fadeEl>Que tu n'aies plus besoin de moi.</h2>
        <div class="body-text fade-up" #fadeEl>
          <p>Je veux que tu deviennes la personne que tu veux être. Pas juste physiquement — dans ta tête, dans ta vie.</p>
          <p>Que tu comprennes ce que tu fais. Pourquoi tu le fais. Que tu sois <strong>autonome.</strong></p>
          <p>Parce qu'en vérité, le physique n'est que le résultat de la personne que tu deviens en le construisant.</p>
        </div>
        <div class="divider fade-up" #fadeEl></div>
        <p class="miyagi fade-up" #fadeEl>
          <em>Comme Miyagi avec Daniel — je serai là le temps qu'il faut.<br>
          Puis inutile, parce que tu n'auras plus besoin de moi.<br>
          Et c'est exactement ce que je veux.</em>
        </p>
        <div class="cta fade-up" #fadeEl>
          <p class="cta-filter">Si tu veux du rapide et du facile, passe ton chemin.</p>
          <p class="cta-invite">Si tu veux construire quelque chose de durable — on est faits pour travailler ensemble.</p>
          <a routerLink="/contact" class="btn-gold">Réserve ton bilan gratuit →</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-objectif {
      background: var(--khaki); padding: 8rem 5rem; text-align: center;
    }
    .objectif-inner { max-width: 680px; margin: 0 auto; }
    .eyebrow {
      font-size: 0.65rem; font-weight: 700; letter-spacing: 0.25em;
      text-transform: uppercase; color: var(--gold); margin-bottom: 2rem;
    }
    .section-title {
      font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
      font-size: clamp(2rem, 4vw, 3.2rem); text-transform: uppercase;
      color: #fff; line-height: 1.1; margin-bottom: 2.5rem;
    }
    .body-text {
      font-size: 0.95rem; font-weight: 300; line-height: 1.9;
      color: rgba(255,255,255,0.55); text-align: left;
      p { margin-bottom: 1rem; }
      strong { color: #fff; font-weight: 600; }
    }
    .divider { width: 40px; height: 1px; background: var(--gold); margin: 2.5rem auto; }
    .miyagi {
      font-family: 'Cormorant Garamond', serif; font-style: italic;
      font-size: 1.2rem; color: rgba(255,255,255,0.75); line-height: 1.7;
      margin-bottom: 3rem;
    }
    .cta { display: flex; flex-direction: column; align-items: center; gap: 0.8rem; }
    .cta-filter { font-size: 0.85rem; font-weight: 300; color: rgba(255,255,255,0.35); }
    .cta-invite { font-size: 1rem; font-weight: 300; color: rgba(255,255,255,0.7); margin-bottom: 1.5rem; }
    .btn-gold {
      display: inline-block; background: var(--gold); color: var(--dark);
      font-family: 'Barlow', sans-serif; font-size: 0.75rem; font-weight: 700;
      letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none;
      padding: 1.1rem 2.5rem; transition: background 0.2s, transform 0.15s;
      &:hover { background: var(--gold-dark); color: #fff; transform: translateY(-2px); }
    }
    @media (max-width: 900px) {
      .section-objectif { padding: 5rem 1.5rem; }
    }
  `]
})
export class ObjectifComponent implements AfterViewInit {
  @ViewChildren('fadeEl') fadeEls!: QueryList<ElementRef>;
  private platformId = inject(PLATFORM_ID);
  constructor(private anim: AnimationService) {}
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) this.anim.observe(this.fadeEls.map(el => el.nativeElement));
  }
}
