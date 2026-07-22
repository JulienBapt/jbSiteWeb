import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-presentiel',
  standalone: true,
  template: `
    <!-- Preload tells the browser: "this image is important, load it early with high priority" -->
    <link rel="preload" as="image" href="/assets/images/jb-presentiel-hero.jpg" fetchpriority="high">
    <link rel="preload" as="image" href="/assets/images/jb-presentiel-hero-min2.jpg" fetchpriority="high">
    <section class="hero" aria-label="Coaching présentiel">
      <div class="hero-left">
        <span class="eyebrow">Coaching Présentiel · Fresnes &amp; Antony</span>
        <h1 class="hero-title">En salle.<br>Côte à <em>côte.</em><br>Sans filtre.</h1>
        <p class="hero-sub">Certaines personnes progressent mieux quand quelqu'un est là, en face, pour les encourager, les corriger et leur rappeler leurs engagements quand elles commencent à s'en éloigner.</p>
        <div class="hero-disclaimer">
          <strong>Ce coaching n'est pas fait pour tout le monde.</strong>
          Il demande un investissement réel : en temps, en énergie, en engagement.
          Si tu cherches une solution miracle et facile, tu ne trouveras pas ça ici.
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero { background: var(--dark); padding-top: 80px; }
    .hero-left { min-height: 900px; display: flex; flex-direction: column; justify-content: center; padding: 5rem 4rem 5rem 5rem;
      background-size: cover;
      background-image: url('/assets/images/jb-presentiel-hero.jpg'); }
    .eyebrow { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.5rem; display: block; }
    .hero-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: clamp(3rem, 5.5vw, 5rem); line-height: 0.95; text-transform: uppercase; color: #fff; letter-spacing: 0.01em; margin-bottom: 2rem; em { font-style: normal; color: var(--gold); } }
    .hero-sub { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.3rem; line-height: 1.65; color: rgba(255,255,255,0.55); max-width: 480px; margin-bottom: 3rem; }
    .hero-disclaimer { font-size: 0.82rem; font-weight: 300; line-height: 1.7; color: rgba(255,255,255,0.3); max-width: 420px; padding-top: 2rem; border-top: 1px solid rgba(201,168,76,0.2); strong { color: rgba(255,255,255,0.6); font-weight: 500; } }
    .hero-right { position: relative; overflow: hidden; img { width: 100%; height: 100%; object-fit: cover; object-position: center top; display: block; filter: grayscale(20%) brightness(0.6); } &::before { content: ''; position: absolute; inset: 0; background: linear-gradient(to right, var(--dark) 0%, transparent 30%); z-index: 1; } }
    @media (max-width: 900px) {
      .hero { grid-template-columns: 1fr; min-height: auto; }
      .hero-left { padding: 5rem 1.5rem 3rem; background-image: url('/assets/images/jb-presentiel-hero-min2.jpg'); }
      .hero-right { height: 65vw; } }
  `]
})
export class HeroPresentielComponent {}
