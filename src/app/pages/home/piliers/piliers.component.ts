import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AnimationService } from '../../../core/animation.service';
import { EyebrowComponent } from '../../../shared/section-eyebrow/section-eyebrow.component';

@Component({
  selector: 'app-piliers',
  standalone: true,
  imports: [EyebrowComponent],
  template: `
    <section class="section-piliers" aria-label="Les trois piliers de l'accompagnement">
      <div class="piliers-header">
        <div>
          <app-eyebrow text="L'accompagnement" color="light" />
          <h2 class="section-title fade-up" #fadeEl>Trois piliers.<br><em>Une transformation.</em></h2>
        </div>
        <p class="piliers-intro fade-up" #fadeEl>Chaque aspect de ta progression est couvert. Rien n'est laissé au hasard.</p>
      </div>

      <div class="piliers-grid">
        @for (pilier of piliers; track pilier.num) {
          <div class="pilier-card fade-up" #fadeEl>
            <span class="pilier-num" aria-hidden="true">{{ pilier.num }}</span>
            <div class="pilier-line"></div>
            <p class="pilier-name">{{ pilier.name }}</p>
            <p class="pilier-desc">{{ pilier.desc }}</p>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .section-piliers {
      background: var(--cream-dark);
      padding: 7rem 5rem;
    }

    .piliers-header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 5rem;
      gap: 2rem;
    }

    .section-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 800;
      font-size: clamp(2rem, 4vw, 3.5rem);
      text-transform: uppercase;
      color: var(--text);
      line-height: 1.05;

      em { font-style: normal; color: var(--gold-dark); }
    }

    .piliers-intro {
      font-size: 0.95rem;
      font-weight: 300;
      line-height: 1.8;
      color: var(--text-muted);
      max-width: 300px;
    }

    .piliers-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1px;
      background: rgba(201,168,76,0.25);
    }

    .pilier-card {
      background: var(--cream-dark);
      padding: 3rem 2.5rem;
      border-top: 1px solid rgba(201,168,76,0.2);
      transition: background 0.3s;

      &:hover { background: var(--cream); }
    }

    .pilier-num {
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
      font-size: 6rem;
      font-weight: 600;
      color: rgba(201,168,76,0.35);
      line-height: 1;
      margin-bottom: 1.5rem;
      display: block;
    }

    .pilier-line {
      width: 28px;
      height: 2px;
      background: var(--gold);
      margin-bottom: 1.5rem;
    }

    .pilier-name {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 800;
      font-size: 1.4rem;
      text-transform: uppercase;
      color: var(--text);
      letter-spacing: 0.05em;
      margin-bottom: 1rem;
    }

    .pilier-desc {
      font-size: 0.88rem;
      font-weight: 300;
      line-height: 1.75;
      color: var(--text-muted);
    }

    @media (max-width: 900px) {
      .section-piliers { padding: 5rem 1.5rem; }
      .piliers-header { flex-direction: column; align-items: flex-start; }
      .piliers-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class PiliersComponent implements AfterViewInit {
  @ViewChildren('fadeEl') fadeEls!: QueryList<ElementRef>;
  private platformId = inject(PLATFORM_ID);

  piliers = [
    {
      num: '01',
      name: 'Entraînement',
      desc: "Un programme 100% personnalisé, adapté à ton emploi du temps, ton niveau et tes objectifs. Pas de copié-collé. Pas de programme générique.",
    },
    {
      num: '02',
      name: 'Nutrition',
      desc: "Pas de régime draconien. On crée ensemble des habitudes alimentaires durables, adaptées à tes goûts, sans frustration, sans interdits inutiles.",
    },
    {
      num: '03',
      name: 'Suivi continu',
      desc: "Disponible 6j/7 sur WhatsApp. À chaque question, chaque doute, chaque blocage — je serai là. Tu n'es jamais seul face à tes décisions.",
    },
  ];

  constructor(private anim: AnimationService) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.anim.observe(this.fadeEls.map(el => el.nativeElement));
    }
  }
}
