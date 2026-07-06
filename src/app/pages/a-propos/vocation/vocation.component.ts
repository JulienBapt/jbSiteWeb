import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AnimationService } from '../../../core/animation.service';

@Component({
  selector: 'app-vocation',
  standalone: true,
  template: `
    <section class="section-vocation" aria-label="Ma vocation">
      <div class="vocation-text">
        <p class="eyebrow fade-up" #fadeEl>Ma vocation</p>
        <h2 class="section-title fade-up" #fadeEl>Être le guide que j'aurais aimé avoir</h2>
        <div class="body-text fade-up" #fadeEl>
          <p>Comme tu as pu le comprendre, fût un temps j'étais comme toi. Je cherchais des réponses partout, en espérant des résultats sans vraiment savoir par où commencer.</p>
          <p class="accent"><em>Parce qu'en réalité, la plupart des gens sont capables de changer. Ils ne savent simplement pas comment s'y prendre.</em></p>
          <p>Désormais je possède ces réponses. Construites sur ma propre expérience, celle de mes clients, et la littérature scientifique.</p>
          <p>Coacher, ce n'est pas juste transmettre des exercices. C'est transmettre des valeurs. Une méthode. Une vision.</p>
          <p><strong>Je veux être cette personne — celle que j'aurais aimé avoir à mes côtés.</strong></p>
        </div>
      </div>
      <div class="vocation-photo fade-up" #fadeEl>
        <img src="/assets/images/jb-coaching.jpg"
          alt="Jean-Baptiste Corona en train de coacher un client en salle"
          loading="lazy" width="700" height="900" />
      </div>
    </section>
  `,
  styles: [`
    .section-vocation {
      display: grid; grid-template-columns: 1.2fr 1fr;
      min-height: 80vh; background: var(--cream-dark);
    }
    .vocation-text {
      padding: 6rem 4.5rem; display: flex; flex-direction: column; justify-content: center;
    }
    .eyebrow {
      font-size: 0.65rem; font-weight: 700; letter-spacing: 0.25em;
      text-transform: uppercase; color: var(--gold-dark); margin-bottom: 1.2rem;
    }
    .section-title {
      font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
      font-size: clamp(1.8rem, 3vw, 2.8rem); text-transform: uppercase;
      color: var(--text); margin-bottom: 2rem; line-height: 1.05;
    }
    .body-text {
      font-size: 0.95rem; font-weight: 300; line-height: 1.85; color: var(--text-muted);
      p { margin-bottom: 1.1rem; }
      strong { font-weight: 600; color: var(--text); }
    }
    .accent {
      border-left: 2px solid var(--gold); padding-left: 1rem;
      em { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; color: var(--text); font-style: italic; }
    }
    .vocation-photo {
      overflow: hidden;
      img { width: 100%; height: 100%; object-fit: cover; object-position: center top; display: block; }
    }
    @media (max-width: 900px) {
      .section-vocation { grid-template-columns: 1fr; }
      .vocation-photo { height: 60vw; order: -1; }
      .vocation-text { padding: 3rem 1.5rem; }
    }
  `]
})
export class VocationComponent implements AfterViewInit {
  @ViewChildren('fadeEl') fadeEls!: QueryList<ElementRef>;
  private platformId = inject(PLATFORM_ID);
  constructor(private anim: AnimationService) {}
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) this.anim.observe(this.fadeEls.map(el => el.nativeElement));
  }
}
