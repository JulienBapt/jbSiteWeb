import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../../core/animation.service';
import { EyebrowComponent } from '../../../shared/section-eyebrow/section-eyebrow.component';

@Component({
  selector: 'app-approche',
  standalone: true,
  imports: [RouterLink, EyebrowComponent],
  template: `
    <section class="section-approche" aria-label="Mon approche">
      <div class="approche-photo fade-up" #fadeEl>
        <img
          src="/assets/images/jb-approche.jpg"
          alt="Jean-Baptiste Corona, coach sportif, en salle de musculation"
          loading="lazy"
          width="800"
          height="1000"
        />
        <div class="approche-overlay">
          <span class="approche-label">MON APPROCHE</span>
        </div>
      </div>
      <div class="approche-text">
        <app-eyebrow text="Mon approche" color="light" />
        <h2 class="section-title fade-up" #fadeEl>J'ai été là où tu es.</h2>
        <div class="body-text fade-up" #fadeEl>
          <p>Mon histoire commence à <strong>17 ans, 115kg</strong> pour moins d'1m80, mort de fatigue après avoir couru derrière un bus.</p>
          <p>Ce jour-là, je ne reconnais pas le petit garçon plein d'énergie et sportif que j'étais. La réalité m'a rattrapé.</p>
          <p>Alors je décide de tout réapprendre. Comment manger, bouger, progresser. Sans personne pour m'épauler — mais quand je fonce dans le mur, je réitère.</p>
          <p><strong>En 8 mois, je perds 30kg. Ça y est, la passion est née.</strong></p>
        </div>
        <a routerLink="/a-propos" class="btn-ghost fade-up" #fadeEl>Me découvrir →</a>
      </div>
    </section>
  `,
  styles: [`
    .section-approche {
      display: grid;
      grid-template-columns: 1fr 1fr;
      min-height: 80vh;
    }

    .approche-photo {
      position: relative;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
        display: block;
        filter: grayscale(15%);
        transition: filter 0.4s;
      }

      &:hover img { filter: grayscale(0%); }
    }

    .approche-overlay {
      position: absolute;
      bottom: 2rem;
      left: 2rem;
    }

    .approche-label {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 800;
      font-size: 1.8rem;
      text-transform: uppercase;
      color: #fff;
      letter-spacing: 0.05em;
      text-shadow: 0 2px 12px rgba(0,0,0,0.5);
    }

    .approche-text {
      background: var(--khaki);
      padding: 6rem 4.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .section-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 800;
      font-size: clamp(1.8rem, 3vw, 2.8rem);
      line-height: 1.05;
      text-transform: uppercase;
      color: #fff;
      margin-bottom: 2rem;
    }

    .body-text {
      font-size: 0.95rem;
      font-weight: 300;
      line-height: 1.85;
      color: rgba(255,255,255,0.55);
      margin-bottom: 2rem;

      p { margin-bottom: 1.1rem; }
      strong { font-weight: 600; color: rgba(255,255,255,0.9); }
    }

    .btn-ghost {
      display: inline-block;
      font-size: 0.8rem;
      font-weight: 500;
      color: rgba(255,255,255,0.5);
      text-decoration: none;
      letter-spacing: 0.08em;
      border-bottom: 1px solid rgba(255,255,255,0.3);
      padding-bottom: 2px;
      transition: color 0.2s, border-color 0.2s;
      align-self: flex-start;

      &:hover { color: var(--gold); border-color: var(--gold); }
    }

    @media (max-width: 900px) {
      .section-approche { grid-template-columns: 1fr; }
      .approche-photo { height: 70vw; }
      .approche-text { padding: 3rem 1.5rem; }
    }
  `]
})
export class ApprocheComponent implements AfterViewInit {
  @ViewChildren('fadeEl') fadeEls!: QueryList<ElementRef>;
  private platformId = inject(PLATFORM_ID);

  constructor(private anim: AnimationService) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.anim.observe(this.fadeEls.map(el => el.nativeElement));
    }
  }
}
