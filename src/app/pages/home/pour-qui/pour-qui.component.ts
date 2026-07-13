import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AnimationService } from '../../../core/animation.service';
import { EyebrowComponent } from '../../../shared/section-eyebrow/section-eyebrow.component';

@Component({
  selector: 'app-pour-qui',
  standalone: true,
  imports: [EyebrowComponent],
  template: `
    <section class="section-pourqui" aria-label="Pour qui est fait ce coaching">
      <div class="pourqui-header">
        <app-eyebrow text="Soyons honnêtes" color="light" />
        <h2 class="section-title fade-up" #fadeEl>Tout le monde n'est pas fait pour ça.</h2>
      </div>
      <div class="pourqui-grid fade-up" #fadeEl>
        <div class="pourqui-col">
          <p class="pourqui-col-title">
            <span class="dot dot-oui" aria-hidden="true"></span>
            C'est pour toi si
          </p>
          <ul class="pourqui-list" role="list">
            @for (item of oui; track item) {
              <li>{{ item }}</li>
            }
          </ul>
        </div>
        <div class="pourqui-col non">
          <p class="pourqui-col-title">
            <span class="dot dot-non" aria-hidden="true"></span>
            Ce n'est définitivement pas pour toi si
          </p>
          <ul class="pourqui-list" role="list">
            @for (item of non; track item) {
              <li>{{ item }}</li>
            }
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-pourqui {
      background: var(--cream);
      padding: 8rem 5rem;
    }

    .pourqui-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 800;
      font-size: clamp(2rem, 3.5vw, 3rem);
      text-transform: uppercase;
      color: var(--text);
    }

    .pourqui-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2px;
      background: rgba(201,168,76,0.3);
      max-width: 960px;
      margin: 0 auto;
    }

    .pourqui-col {
      padding: 3.5rem 3rem;
      background: var(--cream);

      &.non { background: var(--cream-dark); }
    }

    .pourqui-col-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 800;
      font-size: 1.2rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      display: inline-block;
      flex-shrink: 0;
    }
    .dot-oui { background: var(--gold); }
    .dot-non  { background: var(--text-muted); }

    .pourqui-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      li {
        font-size: 0.88rem;
        font-weight: 300;
        line-height: 1.6;
        color: var(--text-muted);
        padding-left: 1.2rem;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.6em;
          width: 5px;
          height: 1px;
          background: var(--gold);
        }
      }
    }

    .pourqui-col.non .pourqui-list li::before {
      background: var(--text-muted);
    }

    @media (max-width: 900px) {
      .section-pourqui { padding: 5rem 1.5rem; }
      .pourqui-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class PourQuiComponent implements AfterViewInit {
  @ViewChildren('fadeEl') fadeEls!: QueryList<ElementRef>;
  private platformId = inject(PLATFORM_ID);

  oui = [
    "Tu en as marre de commencer et d'abandonner",
    "Tu veux comprendre ce que tu fais, pas juste exécuter",
    "Tu cherches un résultat durable, pas une transformation express",
    "Tu as besoin d'un cadre et de quelqu'un qui répond vraiment présent",
    "Tu es prêt à t'investir sur la durée",
  ];

  non = [
    "Tu veux des résultats sans changer tes habitudes",
    "Tu cherches un programme miracle ou une solution rapide",
    "Tu n'es pas prêt à remettre en question certaines habitudes",
    "Tu veux qu'on te dise quoi faire sans comprendre pourquoi",
    "Tu n'es pas prêt à t'engager sur la durée",
  ];

  constructor(private anim: AnimationService) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.anim.observe(this.fadeEls.map(el => el.nativeElement));
    }
  }
}
