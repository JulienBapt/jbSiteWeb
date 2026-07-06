import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-coaching',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero-coaching" aria-label="Coaching en ligne">
      <div class="hero-inner">
        <span class="eyebrow">Le coaching</span>
        <h1 class="hero-title">Un programme construit<br>pour <em>toi.</em><br>Pas pour tout le monde.</h1>
        <p class="hero-sub">
          Tu ne sais pas par où commencer, pire, tu as peut-être même déjà essayé et échoué.
          Un régime impossible à tenir, un entraînement générique, peu ou pas d'amélioration.
          <em>Cette fois, c'est différent.</em>
        </p>
        <a routerLink="/contact" fragment="questionnaire" class="hero-link">Je veux commencer →</a>
      </div>
    </section>
  `,
  styles: [`
    .hero-coaching {
      padding: 160px 5rem 100px;
      background: var(--cream-dark);
      border-bottom: 1px solid rgba(201,168,76,0.2);
    }
    .hero-inner { max-width: 820px; }
    .eyebrow {
      font-size: 0.65rem; font-weight: 700; letter-spacing: 0.25em;
      text-transform: uppercase; color: var(--gold-dark); margin-bottom: 1.5rem; display: block;
    }
    .hero-title {
      font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
      font-size: clamp(3rem, 6vw, 5.5rem); line-height: 0.95;
      text-transform: uppercase; color: var(--text); letter-spacing: 0.01em; margin-bottom: 2rem;
      em { font-style: normal; color: var(--gold-dark); }
    }
    .hero-sub {
      font-family: 'Cormorant Garamond', serif; font-size: 1.35rem;
      line-height: 1.65; color: var(--text-muted); max-width: 640px; margin-bottom: 2.5rem;
      em { font-style: italic; color: var(--text); }
    }
    .hero-link {
      font-size: 0.75rem; font-weight: 600; letter-spacing: 0.15em;
      text-transform: uppercase; color: var(--gold-dark); text-decoration: none;
      border-bottom: 1px solid var(--gold); padding-bottom: 3px;
      transition: color 0.2s;
      &:hover { color: var(--text); }
    }
    @media (max-width: 900px) {
      .hero-coaching { padding: 120px 1.5rem 60px; }
    }
  `]
})
export class HeroCoachingComponent {}
