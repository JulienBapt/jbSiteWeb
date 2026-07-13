import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AnimationService } from '../../../core/animation.service';

@Component({
  selector: 'app-confiance',
  standalone: true,
  template: `
    <section class="section-confiance" aria-label="Ce coaching est ce qu'il est">
      <div class="confiance-header fade-up" #fadeEl>
        <span class="eyebrow">Soyons clairs</span>
        <h2 class="section-title">Ce coaching est<br>ce qu'il est.</h2>
      </div>
      <div class="confiance-grid">
        <div class="fade-up" #fadeEl>
          <p class="col-title">Ce que c'est</p>
          <ul role="list">
            @for (item of cest; track item) { <li>{{ item }}</li> }
          </ul>
        </div>
        <div class="fade-up" #fadeEl>
          <p class="col-title">Ce que ce n'est pas</p>
          <ul role="list">
            @for (item of cestPas; track item) { <li>{{ item }}</li> }
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-confiance { padding: 8rem 5rem; background: var(--cream-dark); }
    .confiance-header { margin-bottom: 4rem; }
    .eyebrow { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold-dark); margin-bottom: 1.2rem; display: block; }
    .section-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: clamp(2rem, 3.5vw, 3rem); text-transform: uppercase; color: var(--text); }
    .confiance-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; }
    .col-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text); margin-bottom: 1.5rem; padding-bottom: 0.8rem; border-bottom: 1px solid rgba(201,168,76,0.3); }
    ul { list-style: none; display: flex; flex-direction: column; gap: 1rem; li { font-size: 0.9rem; font-weight: 300; line-height: 1.65; color: var(--text-muted); padding-left: 1.5rem; position: relative; &::before { content: ''; position: absolute; left: 0; top: 0.6em; width: 8px; height: 1px; background: var(--gold); } } }
    @media (max-width: 900px) { .section-confiance { padding: 5rem 1.5rem; } .confiance-grid { grid-template-columns: 1fr; gap: 3rem; } }
  `]
})
export class ConfianceComponent implements AfterViewInit {
  @ViewChildren('fadeEl') fadeEls!: QueryList<ElementRef>;
  private platformId = inject(PLATFORM_ID);
  cest = ["Un accompagnement humain pensé pour s'adapter à ta vie réelle", "Un programme qui évolue avec toi au fil de ta progression", "Une méthode basée sur la science et mon expérience", "Un cadre précis pour t'aider à construire des habitudes saines et durables", "Un investissement dans ta santé, ton énergie et ta confiance en toi"];
  cestPas = ["Un mode de vie irréaliste centré uniquement autour du fitness", "Une transformation rapide construire au détriment de ta santé physique ou mentale", "Une course à la perfection où le moindre écart devient un échec", "Une transformation sans effort de ta part", "Un petit PDF envoyé à la va vite"];
  constructor(private anim: AnimationService) {}
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) this.anim.observe(this.fadeEls.map(el => el.nativeElement));
  }
}
