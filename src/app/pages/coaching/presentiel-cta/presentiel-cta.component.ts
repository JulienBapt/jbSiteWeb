import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-presentiel-cta',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section-presentiel" aria-label="Coaching présentiel">
      <div class="presentiel-text">
        <span class="eyebrow">Tu préfères le terrain ?</span>
        <h2 class="section-title">Le coaching présentiel,<br>pour aller plus loin.</h2>
        <p class="presentiel-desc">Si tu as besoin de corrections techniques sur tes mouvements, d'une présence en direct pour te challenger, ou d'un œil expert sur ta pratique. Je suis aussi disponible en salle à Fresnes et Antony.</p>
      </div>
      <a routerLink="/presentiel" class="btn-outline">Découvrir le présentiel →</a>
    </section>
  `,
  styles: [`
    .section-presentiel { background: var(--khaki); padding: 5rem; display: grid; grid-template-columns: 1fr auto; gap: 4rem; align-items: center; }
    .eyebrow { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.2rem; display: block; }
    .section-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: clamp(1.8rem, 3vw, 2.8rem); text-transform: uppercase; color: #fff; margin-bottom: 1rem; }
    .presentiel-desc { font-size: 0.95rem; font-weight: 300; line-height: 1.8; color: rgba(255,255,255,0.5); max-width: 560px; }
    .btn-outline { display: inline-block; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; text-decoration: none; color: #fff; border: 1px solid rgba(255,255,255,0.35); padding: 1rem 2.2rem; white-space: nowrap; transition: all 0.2s; &:hover { border-color: #fff; background: rgba(255,255,255,0.07); } }
    @media (max-width: 900px) { .section-presentiel { grid-template-columns: 1fr; padding: 4rem 1.5rem; gap: 2rem; } }
  `]
})
export class PresentielCtaComponent {}
