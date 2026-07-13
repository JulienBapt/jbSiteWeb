import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AnimationService } from '../../../core/animation.service';

@Component({
  selector: 'app-filtre',
  standalone: true,
  template: `
    <section class="section-filtre" aria-label="Pour qui est ce coaching">
      <div class="filtre-inner">
        <div class="filtre-left fade-up" #fadeEl>
          <span class="eyebrow">Avant d'aller plus loin</span>
          <h2 class="section-title">Ce coaching est exigeant.<br>C'est voulu.</h2>
          <div class="body-text">
            <p>Je ne cherche pas à remplir un agenda. Je cherche à travailler avec des personnes <strong>vraiment prêtes à changer quelque chose</strong> dans leur vie.</p>
            <p>Pas prêtes à souffrir, prêtes à s'investir. Ce n'est pas pareil. La souffrance c'est passager. L'engagement, lui, est définitif.</p>
            <p>Si tu lis encore ces lignes, alors tu es probablement dans la bonne case.</p>
          </div>
        </div>
        <div class="filtre-right fade-up" #fadeEl>
          <span class="filtre-label">Tu es au bon endroit si</span>
          @for (item of oui; track item) {
            <div class="filtre-item">
              <span class="dot dot-gold" aria-hidden="true"></span>
              <p [innerHTML]="item"></p>
            </div>
          }
          <span class="filtre-label">Passe ton chemin si</span>
          @for (item of non; track item) {
            <div class="filtre-item">
              <span class="dot dot-muted" aria-hidden="true"></span>
              <p>{{ item }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-filtre { background: var(--khaki); padding: 6rem 5rem; }
    .filtre-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: start; }
    .eyebrow { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.2rem; display: block; }
    .section-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: clamp(2rem, 3.5vw, 3rem); text-transform: uppercase; color: #fff; line-height: 1.05; margin-bottom: 2rem; }
    .body-text { font-size: 0.95rem; font-weight: 300; line-height: 1.9; color: rgba(255,255,255,0.5); p { margin-bottom: 1.1rem; } strong { font-weight: 600; color: rgba(255,255,255,0.8); } }
    .filtre-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 1rem; display: block; margin-top: 2rem; &:first-child { margin-top: 0; } }
    .filtre-item { display: flex; align-items: flex-start; gap: 1rem; border-top: 1px solid rgba(201,168,76,0.2); padding: 1.2rem 0; &:last-child { border-bottom: 1px solid rgba(201,168,76,0.2); } p { font-size: 0.88rem; font-weight: 300; line-height: 1.6; color: rgba(255,255,255,0.55); strong { font-weight: 500; color: rgba(255,255,255,0.8); } } }
    .dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; margin-top: 0.45em; display: inline-block; }
    .dot-gold { background: var(--gold); }
    .dot-muted { background: rgba(255,255,255,0.2); }
    @media (max-width: 900px) { .section-filtre { padding: 5rem 1.5rem; } .filtre-inner { grid-template-columns: 1fr; gap: 3rem; } }
  `]
})
export class FiltreComponent implements AfterViewInit {
  @ViewChildren('fadeEl') fadeEls!: QueryList<ElementRef>;
  private platformId = inject(PLATFORM_ID);
  oui = [
    "Tu veux <strong>comprendre ce que tu fais</strong>, pas juste répéter des mouvements sans savoir pourquoi",
    "Tu as besoin d'un <strong>cadre physique et humain</strong> pour tenir dans la durée",
    "Tu es prêt à <strong>remettre en question certaines habitudes et croyances</strong> : alimentaires, sportives, mentales",
  ];
  non = [
    "Tu cherches à perdre 10kg en 3 semaines sans changer ton mode de vie",
    "Tu veux un coach qui te dira ce que tu veux entendre plutôt que ce dont tu as besoin",
    "Tu n'es pas prêt à t'investir sur la durée. Quelques semaines et puis on verra",
  ];
  constructor(private anim: AnimationService) {}
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) this.anim.observe(this.fadeEls.map(el => el.nativeElement));
  }
}
