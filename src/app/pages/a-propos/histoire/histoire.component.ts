import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AnimationService } from '../../../core/animation.service';

@Component({
  selector: 'app-histoire',
  standalone: true,
  template: `
    <section class="section-histoire" aria-label="Mon histoire">
      <div class="histoire-photo fade-up" #fadeEl>
        <img src="/assets/images/jb-enfant-escrime.jpg"
          alt="Jean-Baptiste enfant pratiquant l'escrime"
          loading="lazy" width="600" height="800" />
        <span class="photo-label">Avant</span>
      </div>
      <div class="histoire-text">
        <p class="eyebrow fade-up" #fadeEl>Mon histoire</p>
        <div class="body-text fade-up" #fadeEl>
          <p>Mon histoire commence à <strong>17 ans, 115kg</strong> pour moins d'1m80, mort de fatigue après avoir couru derrière un bus.</p>
          <p>Ce jour-là, je ne reconnais pas le petit garçon plein d'énergie et sportif que j'étais.</p>
          <p class="accent-line"><em>La réalité m'a rattrapé.</em></p>
          <p>Alors je décide de changer, de tout réapprendre. Comment manger, bouger, progresser. Sans personne pour m'épauler — mais quand je fonce dans le mur, je réitère.</p>
          <p><strong>En 8 mois, je perds 30kg. Ça y est, la passion est née.</strong></p>
        </div>
      </div>
      <div class="histoire-photo-right fade-up" #fadeEl>
        <img src="/assets/images/jb-avant.jpg"
          alt="Jean-Baptiste avant sa transformation, en surpoids"
          loading="lazy" width="600" height="800" />
        <span class="photo-label">Le déclic</span>
      </div>
    </section>
  `,
  styles: [`
    .section-histoire {
      display: grid;
      grid-template-columns: 1fr 1.4fr 1fr;
      min-height: 80vh;
      background: var(--cream);
    }
    .histoire-photo, .histoire-photo-right {
      position: relative;
      overflow: hidden;
      img { width: 100%; height: 100%; object-fit: cover; display: block; filter: grayscale(20%); transition: filter 0.4s; }
      &:hover img { filter: grayscale(0%); }
    }
    .photo-label {
      position: absolute; bottom: 1rem; left: 1rem;
      font-size: 0.6rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase;
      color: #fff; background: rgba(28,28,26,0.7); padding: 0.3rem 0.7rem;
    }
    .histoire-text {
      padding: 5rem 3.5rem;
      display: flex; flex-direction: column; justify-content: center;
      border-left: 1px solid rgba(201,168,76,0.2);
      border-right: 1px solid rgba(201,168,76,0.2);
    }
    .eyebrow {
      font-size: 0.65rem; font-weight: 700; letter-spacing: 0.25em;
      text-transform: uppercase; color: var(--gold-dark); margin-bottom: 2rem;
    }
    .body-text {
      font-size: 0.95rem; font-weight: 300; line-height: 1.85; color: var(--text-muted);
      p { margin-bottom: 1.2rem; }
      strong { font-weight: 600; color: var(--text); }
    }
    .accent-line {
      border-left: 2px solid var(--gold); padding-left: 1rem;
      em { font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; color: var(--text); }
    }
    @media (max-width: 900px) {
      .section-histoire { grid-template-columns: 1fr; }
      .histoire-photo, .histoire-photo-right { height: 100vw; }
      .histoire-text { padding: 3rem 1.5rem; border: none; border-top: 1px solid rgba(201,168,76,0.2); }
    }
  `]
})
export class HistoireComponent implements AfterViewInit {
  @ViewChildren('fadeEl') fadeEls!: QueryList<ElementRef>;
  private platformId = inject(PLATFORM_ID);
  constructor(private anim: AnimationService) {}
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) this.anim.observe(this.fadeEls.map(el => el.nativeElement));
  }
}
