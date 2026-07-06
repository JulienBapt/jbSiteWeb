import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AnimationService } from '../../../core/animation.service';

@Component({
  selector: 'app-piliers-coaching',
  standalone: true,
  template: `
    <section class="section-piliers" aria-label="Ce que tu retrouves dans le coaching">
      <div class="piliers-intro fade-up" #fadeEl>
        <span class="eyebrow">Ce que tu retrouves</span>
        <h2 class="section-title">Tout ce qu'il te faut.<br>Rien de superflu.</h2>
      </div>
      <div class="piliers-detail">
        @for (p of piliers; track p.num) {
          <div class="pilier-row fade-up" #fadeEl>
            <span class="pilier-index" aria-hidden="true">{{ p.num }}</span>
            <div class="pilier-header">
              <p class="pilier-title">{{ p.name }}</p>
              <p class="pilier-tag">{{ p.tag }}</p>
            </div>
            <div class="pilier-body">
              <p>{{ p.desc }}</p>
              <ul role="list">
                @for (item of p.items; track item) { <li>{{ item }}</li> }
              </ul>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .section-piliers { padding: 8rem 5rem; background: var(--cream); }
    .piliers-intro { max-width: 560px; margin-bottom: 5rem; }
    .eyebrow { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold-dark); margin-bottom: 1.2rem; display: block; }
    .section-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: clamp(2rem, 3.5vw, 3rem); text-transform: uppercase; color: var(--text); line-height: 1.05; }
    .pilier-row { display: grid; grid-template-columns: 80px 1fr 1fr; gap: 0; border-top: 1px solid rgba(201,168,76,0.25); padding: 3rem 0; align-items: start; &:last-child { border-bottom: 1px solid rgba(201,168,76,0.25); } }
    .pilier-index { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 3.5rem; font-weight: 600; color: rgba(201,168,76,0.35); line-height: 1; }
    .pilier-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 1.6rem; text-transform: uppercase; color: var(--text); letter-spacing: 0.05em; margin-bottom: 0.5rem; }
    .pilier-tag { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold-dark); }
    .pilier-body { font-size: 0.9rem; font-weight: 300; line-height: 1.8; color: var(--text-muted); padding-left: 2rem; p { margin-bottom: 0.8rem; } ul { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; margin-top: 0.8rem; } li { padding-left: 1rem; position: relative; &::before { content: ''; position: absolute; left: 0; top: 0.6em; width: 5px; height: 1px; background: var(--gold); } } }
    @media (max-width: 900px) { .section-piliers { padding: 5rem 1.5rem; } .pilier-row { grid-template-columns: 50px 1fr; } .pilier-body { padding-left: 0; grid-column: 1/-1; margin-top: 1rem; } }
  `]
})
export class PiliersCoachingComponent implements AfterViewInit {
  @ViewChildren('fadeEl') fadeEls!: QueryList<ElementRef>;
  private platformId = inject(PLATFORM_ID);
  piliers = [
    { num: '01', name: 'Entraînement', tag: 'Sur-mesure · Évolutif', desc: "Un programme 100% personnalisé, construit autour de ta vie réelle — ton emploi du temps, ton niveau, tes contraintes et tes objectifs précis.", items: ["Exercices adaptés à ton niveau et ton matériel", "Progression structurée semaine après semaine", "Ajustements en continu selon tes retours", "Explication des mouvements et de leur intérêt"] },
    { num: '02', name: 'Nutrition', tag: 'Sans frustration · Durable', desc: "Pas de liste d'aliments interdits. Pas de programme rigide. Une approche pragmatique qui part de ce que tu aimes et de comment tu vis.", items: ["Conseils adaptés à ton objectif — prise, perte ou maintien", "Stratégies concrètes pour manger bien sans frustration", "Comprendre ce que tu manges, pas juste le peser", "Ajustements selon tes préférences et ton mode de vie"] },
    { num: '03', name: 'Suivi continu', tag: 'WhatsApp · 6j/7 · Humain', desc: "Pas de bot, pas de réponse automatique. Quand tu m'écris, c'est moi qui réponds. Tu n'es jamais seul face à tes doutes.", items: ["Disponibilité WhatsApp 6 jours sur 7", "Validation des repas et des séances en temps réel", "Point hebdomadaire le week-end", "Réajustements du programme dès que nécessaire"] },
  ];
  constructor(private anim: AnimationService) {}
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) this.anim.observe(this.fadeEls.map(el => el.nativeElement));
  }
}
