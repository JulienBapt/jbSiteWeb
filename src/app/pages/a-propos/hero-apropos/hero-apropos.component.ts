import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-apropos',
  standalone: true,
  template: `
    <section class="hero-apropos" aria-label="À propos de Jean-Baptiste Corona">
      <img
        src="/assets/images/jb-apropos-hero.jpg"
        alt="Jean-Baptiste Corona souriant en salle de sport"
        loading="eager"
        fetchpriority="high"
        width="1440"
        height="600"
      />
      <div class="hero-overlay">
        <h1 class="hero-title">
          Avant de parler de toi,<br>laisse-moi te parler de <em>moi.</em>
        </h1>
      </div>
    </section>
  `,
  styles: [`
    .hero-apropos {
      position: relative;
      height: 70vh;
      min-height: 400px;
      overflow: hidden;
      margin-top: 80px;

      img {
        width: 100%; height: 100%;
        object-fit: cover; object-position: center top;
        display: block;
        filter: brightness(0.55);
      }
    }
    .hero-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: flex-end;
      padding: 4rem 5rem;
      background: linear-gradient(to top, rgba(28,28,26,0.7) 0%, transparent 60%);
    }
    .hero-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 800;
      font-size: clamp(2rem, 5vw, 4rem);
      text-transform: uppercase;
      color: #fff;
      line-height: 1.0;
      em { font-style: normal; color: var(--gold); }
    }
    @media (max-width: 900px) {
      .hero-overlay { padding: 2rem 1.5rem; }
    }
  `]
})
export class HeroAProposComponent {}
