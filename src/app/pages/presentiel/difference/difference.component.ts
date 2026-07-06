import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AnimationService } from '../../../core/animation.service';

@Component({
  selector: 'app-difference',
  standalone: true,
  template: `
    <section class="section-diff" aria-label="Pourquoi le présentiel">
      <div class="diff-inner">
        <div class="diff-text fade-up" #fadeEl>
          <span class="eyebrow">Pourquoi le présentiel</span>
          <h2 class="section-title">Ce que la présence<br>change vraiment.</h2>
          <div class="body-text">
            <p>En ligne, tu t'entraînes seul. C'est bien — si tu as la discipline pour ça. En présentiel, tu ne peux pas te mentir. Je vois ton dos qui s'arrondit, ta respiration qui déraille, le moment où tu pourrais pousser encore mais tu t'arrêtes.</p>
            <p>Ce regard externe — bienveillant mais précis — c'est souvent ce qui fait la différence entre stagner et progresser.</p>
            <p>Je ne suis pas là pour t'épuiser. Je suis là pour que chaque séance compte vraiment.</p>
          </div>
        </div>
        <div class="diff-stats fade-up" #fadeEl>
          @for (stat of stats; track stat.value) {
            <div class="diff-stat">
              <p class="stat-value">{{ stat.value }}</p>
              <p class="stat-label">{{ stat.label }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-diff { background: var(--cream-dark); padding: 7rem 5rem; }
    .diff-inner { display: grid; grid-template-columns: 1.2fr 1fr; gap: 6rem; align-items: center; }
    .eyebrow { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold-dark); margin-bottom: 1.2rem; display: block; }
    .section-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: clamp(1.8rem, 3vw, 2.8rem); text-transform: uppercase; color: var(--text); margin-bottom: 2rem; }
    .body-text { font-size: 0.95rem; font-weight: 300; line-height: 1.85; color: var(--text-muted); p { margin-bottom: 1rem; } }
    .diff-stats { display: flex; flex-direction: column; gap: 1.5rem; }
    .diff-stat { border-left: 2px solid var(--gold); padding: 1.2rem 0 1.2rem 1.8rem; }
    .stat-value { font-family: 'Cormorant Garamond', serif; font-size: 2.5rem; font-weight: 600; color: var(--gold-dark); line-height: 1; margin-bottom: 0.3rem; }
    .stat-label { font-size: 0.75rem; font-weight: 300; color: var(--text-muted); }
    @media (max-width: 900px) { .section-diff { padding: 5rem 1.5rem; } .diff-inner { grid-template-columns: 1fr; gap: 3rem; } }
  `]
})
export class DifferenceComponent implements AfterViewInit {
  @ViewChildren('fadeEl') fadeEls!: QueryList<ElementRef>;
  private platformId = inject(PLATFORM_ID);
  stats = [
    { value: 'Fresnes', label: 'Basic-Fit · Accès salle pendant la séance' },
    { value: '1 à 3', label: 'séances par semaine selon ta formule' },
    { value: 'Solo ou duo', label: 'Formules individuelles et en binôme disponibles' },
    { value: '6j/7', label: 'Disponibilité WhatsApp entre les séances' },
  ];
  constructor(private anim: AnimationService) {}
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) this.anim.observe(this.fadeEls.map(el => el.nativeElement));
  }
}
