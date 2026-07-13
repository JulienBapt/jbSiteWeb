import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AnimationService } from '../../../core/animation.service';

@Component({
  selector: 'app-process',
  standalone: true,
  template: `
    <section class="section-process" aria-label="Comment ça se passe">
      <div class="process-header">
        <span class="eyebrow">Comment ça se passe</span>
        <h2 class="section-title fade-up" #fadeEl>Simple. Concret.<br>Sans surprise.</h2>
      </div>
      <div class="process-steps">
        @for (step of steps; track step.num) {
          <div class="process-step fade-up" #fadeEl>
            <span class="process-num" aria-hidden="true">{{ step.num }}</span>
            <p class="process-name">{{ step.name }}</p>
            <p class="process-desc">{{ step.desc }}</p>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .section-process { background: var(--dark); padding: 8rem 5rem; }
    .process-header { margin-bottom: 5rem; max-width: 560px; }
    .eyebrow { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin-bottom: 1rem; display: block; }
    .section-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: clamp(2rem, 3.5vw, 3rem); text-transform: uppercase; color: #fff; line-height: 1.05; }
    .process-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: rgba(201,168,76,0.15); }
    .process-step { background: var(--dark); padding: 2.5rem 2rem; position: relative; &::after { content: '→'; position: absolute; right: -0.4rem; top: 2.5rem; color: rgba(201,168,76,0.35); font-size: 1.1rem; z-index: 1; } &:last-child::after { display: none; } }
    .process-num { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 4rem; font-weight: 600; color: rgba(201,168,76,0.18); line-height: 1; margin-bottom: 1.2rem; display: block; }
    .process-name { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 1.2rem; text-transform: uppercase; color: #fff; letter-spacing: 0.05em; margin-bottom: 0.8rem; }
    .process-desc { font-size: 0.82rem; font-weight: 300; line-height: 1.7; color: rgba(255,255,255,0.4); }
    @media (max-width: 900px) { .section-process { padding: 5rem 1.5rem; } .process-steps { grid-template-columns: 1fr 1fr; } }
  `]
})
export class ProcessComponent implements AfterViewInit {
  @ViewChildren('fadeEl') fadeEls!: QueryList<ElementRef>;
  private platformId = inject(PLATFORM_ID);
  steps = [
    { num: '01', name: 'Le questionnaire', desc: "Tu remplis le questionnaire afin que je puisse mieux comprendre ta <strong>situation</strong>, tes <strong>habitudes</strong> et ce que tu aimerais changer avant notre appel." },
    { num: '02', name: 'Le bilan', desc: "Un appel de <strong>30 min</strong>. On échange sur <strong>tes objectifs</strong> et ce que tu recherches vraiment, tout en voyant si le courant passe : un accompagnement, ça reste avant tout une <strong>relation de confiance</strong>." },
    { num: '03', name: 'Le programme', desc: "Grâce aux informations que j’ai récoltées, je construis ton programme d’entraînement et ta stratégie nutritionnelle sur mesure. Le but : créer quelque chose qui <strong>s’intègre pleinement dans ton quotidien</strong>." },
    { num: '04', name: 'Le suivi', desc: "Au cours de ta transformation, on <strong>avance ensemble</strong>. Un pépin ? Une réussite ? On s’adapte, on ajuste et on continue d’avancer jusqu’à <strong>atteindre tes objectifs</strong> !" },
  ];
  constructor(private anim: AnimationService) {}
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) this.anim.observe(this.fadeEls.map(el => el.nativeElement));
  }
}
