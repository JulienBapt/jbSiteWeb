import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AnimationService } from '../../../core/animation.service';

@Component({
  selector: 'app-temoignages-presentiel',
  standalone: true,
  template: `
    <section class="section-temoignages" aria-label="Témoignages coaching présentiel">
      <div class="header fade-up" #fadeEl>
        <span class="eyebrow">Ils l'ont fait</span>
        <h2 class="section-title">Des mots qui valent<br>mieux que les miens.</h2>
      </div>
      <div class="temoignages-grid">
        @for (t of temoignages; track t.author) {
          <article class="temoignage-card fade-up" #fadeEl>
            <p class="stars" aria-label="5 étoiles">★★★★★</p>
            <blockquote class="text">"{{ t.text }}"</blockquote>
            <footer>
              <p class="author">{{ t.author }}</p>
              <p class="detail">{{ t.detail }}</p>
            </footer>
          </article>
        }
      </div>
    </section>
  `,
  styles: [`
    .section-temoignages { background: var(--dark); padding: 7rem 5rem; }
    .header { margin-bottom: 4rem; }
    .eyebrow { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin-bottom: 1rem; display: block; }
    .section-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: clamp(2rem, 3.5vw, 3rem); text-transform: uppercase; color: #fff; }
    .temoignages-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
    .temoignage-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(201,168,76,0.15); padding: 2.5rem 2rem; display: flex; flex-direction: column; gap: 1.2rem; }
    .stars { color: var(--gold); font-size: 0.85rem; letter-spacing: 0.1em; }
    .text { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.05rem; line-height: 1.65; color: rgba(255,255,255,0.75); flex: 1; }
    .author { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); }
    .detail { font-size: 0.7rem; font-weight: 300; color: rgba(255,255,255,0.3); font-style: italic; margin-top: 0.2rem; }
    @media (max-width: 900px) { .section-temoignages { padding: 5rem 1.5rem; } .temoignages-grid { grid-template-columns: 1fr; } }
  `]
})
export class TemoignagesPresentielComponent implements AfterViewInit {
  @ViewChildren('fadeEl') fadeEls!: QueryList<ElementRef>;
  private platformId = inject(PLATFORM_ID);
  temoignages = [
    { text: "JB a été pour moi une source de motivation mais aussi de reconstruction. Il est à l'écoute sur le plan physique comme mental. +++confiance en moi, appris à écouter mon corps, repousser mes limites. Mon meilleur investissement 2025.", author: 'Marie-Stéphanie', detail: 'Coaching présentiel · Avis Google vérifié' },
    { text: "JB s'est adapté à mon profil et ma pathologie, et m'a permis de progresser rapidement. Je suis plus tonique et je me sens en meilleure forme.", author: 'Sacha', detail: 'Coaching présentiel · Avis Google vérifié' },
    { text: "Très bon coach qui est là pour te pousser jusqu'au bout de ton objectif. Je le recommande fortement. Merci beaucoup Patron !", author: 'Vincent', detail: 'Coaching présentiel · Avis Google vérifié' },
    { text: "Un grand merci à JB ! Coach très à l'écoute, motivant et capable de s'adapter à toutes les situations. Le suivi sportif et nutritionnel est vraiment de qualité.", author: 'Carina', detail: 'Coaching présentiel · Avis Google vérifié' },
  ];
  constructor(private anim: AnimationService) {}
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) this.anim.observe(this.fadeEls.map(el => el.nativeElement));
  }
}
