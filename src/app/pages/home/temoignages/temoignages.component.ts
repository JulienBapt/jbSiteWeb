import { Component, AfterViewInit, ElementRef, ViewChild, PLATFORM_ID, inject, signal, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AnimationService } from '../../../core/animation.service';
import { EyebrowComponent } from '../../../shared/section-eyebrow/section-eyebrow.component';

interface Temoignage {
  text: string;
  author: string;
  detail: string;
}

@Component({
  selector: 'app-temoignages',
  standalone: true,
  imports: [EyebrowComponent],
  template: `
    <section class="section-temoignages" aria-label="Témoignages clients"
      (mouseenter)="pauseAuto()"
      (mouseleave)="resumeAuto()">

      <div class="temoignages-header">
        <app-eyebrow text="Ils ont franchi le cap" color="gold" />
        <h2 class="section-title fade-up" #fadeEl>Ce qu'ils en disent.</h2>
      </div>

      <div class="carousel fade-up" #fadeEl>
        <button class="carousel-arrow left" (click)="prev()" aria-label="Témoignage précédent">‹</button>

        <div class="carousel-track">
          @for (t of temoignages; track t.author; let i = $index) {
            <article
              class="carousel-slide"
              [class.active]="i === current()"
              [attr.aria-hidden]="i !== current()"
            >
              <p class="temoignage-stars" aria-label="5 étoiles">★★★★★</p>
              <blockquote class="temoignage-text">"{{ t.text }}"</blockquote>
              <footer>
                <p class="temoignage-author">{{ t.author }}</p>
                <p class="temoignage-detail">{{ t.detail }}</p>
              </footer>
            </article>
          }
        </div>

        <button class="carousel-arrow right" (click)="next()" aria-label="Témoignage suivant">›</button>
      </div>

      <div class="carousel-dots" role="tablist">
        @for (t of temoignages; track t.author; let i = $index) {
          <button
            class="dot"
            [class.active]="i === current()"
            (click)="goTo(i)"
            [attr.aria-label]="'Témoignage de ' + t.author"
            role="tab"
            [attr.aria-selected]="i === current()"
          ></button>
        }
      </div>
    </section>
  `,
  styles: [`
    .section-temoignages {
      background: var(--khaki);
      padding: 7rem 5rem;
    }

    .temoignages-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 800;
      font-size: clamp(2rem, 3.5vw, 3rem);
      text-transform: uppercase;
      color: #fff;
    }

    .carousel {
      position: relative;
      display: flex;
      align-items: center;
      gap: 2rem;
      max-width: 820px;
      margin: 0 auto 2.5rem;
    }

    .carousel-track {
      flex: 1;
      position: relative;
      min-height: 240px;
    }

    .carousel-slide {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      text-align: center;
      padding: 2rem;
      opacity: 0;
      transform: translateY(12px);
      transition: opacity 0.5s ease, transform 0.5s ease;
      pointer-events: none;

      &.active {
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
        position: relative;
      }
    }

    .temoignage-stars {
      color: var(--gold);
      font-size: 1rem;
      letter-spacing: 0.15em;
    }

    .temoignage-text {
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
      font-size: clamp(1.1rem, 2vw, 1.4rem);
      line-height: 1.65;
      color: rgba(255,255,255,0.85);
    }

    .temoignage-author {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--gold);
    }

    .temoignage-detail {
      font-size: 0.7rem;
      font-weight: 300;
      color: rgba(255,255,255,0.3);
      font-style: italic;
    }

    .carousel-arrow {
      background: none;
      border: 1px solid rgba(201,168,76,0.3);
      color: rgba(255,255,255,0.5);
      font-size: 2rem;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      flex-shrink: 0;
      transition: border-color 0.2s, color 0.2s;
      line-height: 1;

      &:hover { border-color: var(--gold); color: var(--gold); }
    }

    .carousel-dots {
      display: flex;
      justify-content: center;
      gap: 0.6rem;
    }

    .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: rgba(255,255,255,0.2);
      border: none;
      cursor: pointer;
      transition: background 0.2s, transform 0.2s;

      &.active { background: var(--gold); transform: scale(1.3); }
    }

    @media (max-width: 900px) {
      .section-temoignages { padding: 5rem 1.5rem; }
      .carousel { gap: 0.8rem; }
      .carousel-arrow { width: 36px; height: 36px; font-size: 1.5rem; }
    }
  `]
})
export class TemoignagesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('fadeEl') fadeEl!: ElementRef;
  private platformId = inject(PLATFORM_ID);

  current = signal(0);
  private autoTimer?: ReturnType<typeof setInterval>;

  temoignages: Temoignage[] = [
    {
      text: "JB a été pour moi une source de motivation mais aussi de reconstruction. Il est à l'écoute sur le plan physique comme mental. +++confiance en moi, appris à écouter mon corps, repousser mes limites. Mon meilleur investissement 2025.",
      author: 'Marie-Stéphanie',
      detail: 'Coaching · Avis Google vérifié',
    },
    {
      text: "Me faire coacher par JB a été le meilleur investissement de 2025. Au-delà du sport, il m'a accompagnée dans mon rééquilibrage alimentaire. Même après 6 mois, les routines me permettent de continuer seule.",
      author: 'Chloé',
      detail: '6 mois de coaching · Avis Google vérifié',
    },
    {
      text: "Un grand merci à JB ! Coach très à l'écoute, motivant et capable de s'adapter à toutes les situations. Cet accompagnement m'a aussi permis de reprendre confiance en moi et de traverser une période difficile.",
      author: 'Carina',
      detail: 'Coaching · Avis Google vérifié',
    },
    {
      text: "JB s'est adapté à mon profil et ma pathologie, et m'a permis de progresser rapidement. Je suis plus tonique et je me sens en meilleure forme.",
      author: 'Sacha',
      detail: 'Coaching présentiel · Avis Google vérifié',
    },
    {
      text: "Très bon coach qui est là pour te pousser jusqu'au bout de ton objectif. Je le recommande fortement. Merci beaucoup Patron !",
      author: 'Vincent',
      detail: 'Coaching présentiel · Avis Google vérifié',
    },
  ];

  constructor(private anim: AnimationService) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const els = document.querySelectorAll('.section-temoignages .fade-up');
      this.anim.observe(els);
      this.startAuto();
    }
  }

  ngOnDestroy(): void {
    this.clearAuto();
  }

  next(): void {
    this.current.update(c => (c + 1) % this.temoignages.length);
  }

  prev(): void {
    this.current.update(c => (c - 1 + this.temoignages.length) % this.temoignages.length);
  }

  goTo(i: number): void {
    this.current.set(i);
  }

  pauseAuto(): void { this.clearAuto(); }
  resumeAuto(): void { this.startAuto(); }

  private startAuto(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.autoTimer = setInterval(() => this.next(), 5000);
  }

  private clearAuto(): void {
    if (this.autoTimer) clearInterval(this.autoTimer);
  }
}
