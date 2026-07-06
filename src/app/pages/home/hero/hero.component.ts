import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../../core/animation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  template: `<!--
    style="background-image: url('/assets/images/jb-hero.jpg');"-->
    <section class="hero" aria-label="Présentation principale">
      <div class="hero-left">
        <span class="hero-tag fade-up" #fadeEl>Coach Sportif Certifié · En ligne & Présentiel</span>
        <p class="hero-cormorant fade-up" #fadeEl>
          <em>Parce que chaque transformation commence par une décision.</em>
        </p>
        <h1 class="hero-headline fade-up" #fadeEl>
          La dernière<br>transformation<br>dont tu auras<br><em>besoin.</em>
        </h1>
        <p class="hero-sub fade-up" #fadeEl>
          Un accompagnement personnalisé — entraînement, nutrition, suivi continu —
          construit pour que tu <strong>n'aies plus jamais besoin de coach.</strong>
        </p>
        <div class="hero-actions fade-up" #fadeEl>
          <a routerLink="/contact" class="btn-gold">Réserve ton bilan gratuit →</a>
          <a routerLink="/a-propos" class="btn-ghost">Me découvrir</a>
        </div>
      </div>
      <!--<div class="hero-right fade-up" #fadeEl>
        <img
          src="/assets/images/jb-hero.jpg"
          alt="Jean-Baptiste Corona, coach sportif certifié, en salle de musculation"
          loading="eager"
          fetchpriority="high"
          width="800"
          height="1000"
        />
      </div>-->
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding-top: 80px;
      background: var(--cream);
    }

    .hero-left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 4rem 4rem 4rem 5rem;
    }

    .hero-right {
      position: relative;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
        display: block;
        filter: grayscale(10%);
      }

      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(to right, var(--cream) 0%, transparent 25%);
      }
    }

    .hero-tag {
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--gold-dark);
      margin-bottom: 1rem;
      display: block;
    }

    .hero-cormorant {
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
      font-size: 1.1rem;
      color: var(--text-muted);
      margin-bottom: 1.5rem;
    }

    .hero-headline {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 800;
      font-size: clamp(3rem, 5.5vw, 5.5rem);
      line-height: 0.95;
      text-transform: uppercase;
      color: var(--text);
      letter-spacing: 0.01em;
      margin-bottom: 1.8rem;

      em {
        font-style: normal;
        color: var(--gold-dark);
      }
    }

    .hero-sub {
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.8;
      color: var(--text-muted);
      max-width: 420px;
      margin-bottom: 2.5rem;

      strong { font-weight: 600; color: var(--text); }
    }

    .hero-actions {
      display: flex;
      align-items: center;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .btn-gold {
      display: inline-block;
      background: var(--gold);
      color: var(--dark);
      font-family: 'Barlow', sans-serif;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      text-decoration: none;
      padding: 1.1rem 2.5rem;
      transition: background 0.2s, transform 0.15s;

      &:hover { background: var(--gold-dark); color: #fff; transform: translateY(-2px); }
    }

    .btn-ghost {
      font-size: 0.8rem;
      font-weight: 500;
      color: var(--text-muted);
      text-decoration: none;
      letter-spacing: 0.08em;
      border-bottom: 1px solid var(--text-muted);
      padding-bottom: 2px;
      transition: color 0.2s;

      &:hover { color: var(--gold-dark); border-color: var(--gold-dark); }
    }

    @media (max-width: 900px) {
      .hero { grid-template-columns: 1fr; min-height: auto; }
      .hero-left { padding: 6rem 1.5rem 3rem; }
      .hero-right { height: 65vw; &::after { background: linear-gradient(to bottom, var(--cream) 0%, transparent 20%); } }
    }
  `]
})
export class HeroComponent implements AfterViewInit {
  @ViewChildren('fadeEl') fadeEls!: QueryList<ElementRef>;
  private platformId = inject(PLATFORM_ID);

  constructor(private anim: AnimationService) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.anim.observe(this.fadeEls.map(el => el.nativeElement));
    }
  }
}
