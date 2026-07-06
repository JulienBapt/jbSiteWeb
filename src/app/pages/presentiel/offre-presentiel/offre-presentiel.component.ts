import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AnimationService } from '../../../core/animation.service';

@Component({
  selector: 'app-offre-presentiel',
  standalone: true,
  template: `
    <section class="section-offre" aria-label="Ce que tu obtiens">
      <div class="offre-header fade-up" #fadeEl>
        <span class="eyebrow">L'accompagnement</span>
        <h2 class="section-title">Ce que tu obtiens,<br>concrètement.</h2>
      </div>
      <div class="offre-grid">
        @for (card of cards; track card.name) {
          <div class="offre-card fade-up" #fadeEl>
            <span class="offre-num" aria-hidden="true">{{ card.num }}</span>
            <p class="offre-name">{{ card.name }}</p>
            <span class="offre-tag">{{ card.tag }}</span>
            <p class="offre-desc">{{ card.desc }}</p>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .section-offre { background: var(--cream); padding: 8rem 5rem; }
    .offre-header { margin-bottom: 5rem; }
    .eyebrow { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold-dark); margin-bottom: 1.2rem; display: block; }
    .section-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: clamp(2rem, 3.5vw, 3rem); text-transform: uppercase; color: var(--text); }
    .offre-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(201,168,76,0.2); }
    .offre-card { background: var(--cream); padding: 3rem 2rem; border-top: 2px solid transparent; transition: border-color 0.3s, background 0.3s; &:hover { border-color: var(--gold); background: var(--cream-dark); } }
    .offre-num { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 4rem; font-weight: 600; color: rgba(201,168,76,0.3); line-height: 1; display: block; margin-bottom: 1rem; }
    .offre-name { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 1.3rem; text-transform: uppercase; color: var(--text); letter-spacing: 0.05em; margin-bottom: 0.5rem; }
    .offre-tag { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold-dark); margin-bottom: 1.2rem; display: block; }
    .offre-desc { font-size: 0.87rem; font-weight: 300; line-height: 1.75; color: var(--text-muted); }
    @media (max-width: 900px) { .section-offre { padding: 5rem 1.5rem; } .offre-grid { grid-template-columns: 1fr; } }
  `]
})
export class OffrePresentielComponent implements AfterViewInit {
  @ViewChildren('fadeEl') fadeEls!: QueryList<ElementRef>;
  private platformId = inject(PLATFORM_ID);
  cards = [
    { num: '01', name: 'Séances encadrées', tag: 'En salle · Corrections en direct', desc: "Je suis là, à côté de toi. Je vois ce que tu fais, je corrige en temps réel, je pousse quand c'est le moment. Pas de place pour les approximations." },
    { num: '02', name: 'Programme personnalisé', tag: 'Sur-mesure · Évolutif', desc: "Construit autour de tes objectifs, ton niveau et tes contraintes. Réajusté selon ta progression réelle — pas un programme générique recyclé." },
    { num: '03', name: 'Nutrition & suivi', tag: 'WhatsApp · Sans régime draconien', desc: "Conseils nutritionnels adaptés à ton objectif, disponibilité WhatsApp entre les séances. Pas d'aliments interdits — des habitudes qui tiennent." },
  ];
  constructor(private anim: AnimationService) {}
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) this.anim.observe(this.fadeEls.map(el => el.nativeElement));
  }
}
