import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AnimationService } from '../../../core/animation.service';

@Component({
  selector: 'app-empathie',
  standalone: true,
  template: `
    <section class="section-empathie" aria-label="Je comprends où tu en es">
      <div class="empathie-inner">
        <div class="empathie-left fade-up" #fadeEl>
          <span class="eyebrow">Je comprends où tu en es</span>
          <h2 class="section-title">Tu ne manques pas de volonté.<br>Il te manque un cadre.</h2>
          <div class="body-text">
            <p>Les régimes improbables, impossibles à tenir dans la vie réelle. Les programmes génériques qui ne prennent pas en compte qui tu es. Les coachs qui disparaissent entre deux séances. <strong>Ce n'est pas un manque de motivation. C'est un manque de méthode adaptée à toi.</strong></p>
            <p>J'ai été là aussi. Pas le même chemin, mais la même sensation d'essayer sans trouver ce qui tient dans la durée. C'est pour ça que j'ai construit un accompagnement qui part de toi : de ce que tu aimes manger, de comment tu vis, de ce que tu veux vraiment.</p>
            <p>Pas d'un idéal irréalisable. <strong>De toi.</strong></p>
          </div>
        </div>
        <div class="empathie-right fade-up" #fadeEl>
          @for (card of cards; track card.author) {
            <div class="empathie-card">
              <p>"{{ card.text }}"</p>
              <span>{{ card.author }}</span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-empathie { background: var(--dark); padding: 7rem 5rem; }
    .empathie-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
    .eyebrow { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.5rem; display: block; }
    .section-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: clamp(1.8rem, 3vw, 2.8rem); text-transform: uppercase; color: #fff; line-height: 1.05; margin-bottom: 2rem; }
    .body-text { font-size: 0.95rem; font-weight: 300; line-height: 1.9; color: rgba(255,255,255,0.5); p { margin-bottom: 1.1rem; } strong { font-weight: 600; color: rgba(255,255,255,0.85); } }
    .empathie-right { display: flex; flex-direction: column; gap: 1.5rem; }
    .empathie-card { border-left: 2px solid rgba(201,168,76,0.4); padding: 1rem 0 1rem 1.5rem; p { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.05rem; line-height: 1.6; color: rgba(255,255,255,0.65); } span { display: block; margin-top: 0.5rem; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); } }
    @media (max-width: 900px) { .section-empathie { padding: 5rem 1.5rem; } .empathie-inner { grid-template-columns: 1fr; gap: 3rem; } }
  `]
})
export class EmpathieComponent implements AfterViewInit {
  @ViewChildren('fadeEl') fadeEls!: QueryList<ElementRef>;
  private platformId = inject(PLATFORM_ID);
  cards = [
    { text: "Il m'a permis de dédramatiser, d'accepter le fait de faire des erreurs. Pour la première fois, quelqu'un a réussi à me faire avancer sur la nutrition.", author: 'Rime · Cliente actuelle' },
    { text: "Même après 6 mois, les routines me permettent de continuer seule sur ma lancée.", author: 'Chloé · 6 mois de coaching' },
    { text: "Cet accompagnement m'a permis de reprendre confiance en moi et de traverser une période difficile.", author: 'Carina · Cliente' },
  ];
  constructor(private anim: AnimationService) {}
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) this.anim.observe(this.fadeEls.map(el => el.nativeElement));
  }
}
