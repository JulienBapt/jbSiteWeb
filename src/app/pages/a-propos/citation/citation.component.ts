import { Component } from '@angular/core';

@Component({
  selector: 'app-citation',
  standalone: true,
  template: `
    <section class="section-citation" aria-label="Citation d'Aristote">
      <blockquote class="citation-text">
        Nous sommes ce que nous faisons de manière répétée.<br>
        L'excellence n'est donc pas un acte, mais une habitude.
      </blockquote>
      <cite class="citation-author">Aristote</cite>
    </section>
  `,
  styles: [`
    .section-citation {
      background: var(--gold);
      padding: 7rem 5rem;
      text-align: center;
      position: relative;
      overflow: hidden;
      &::before {
        content: '\x81';
        position: absolute; top: -2rem; left: 3rem;
        font-family: 'Cormorant Garamond', serif;
        font-size: 18rem; color: rgba(255,255,255,0.12);
        line-height: 1; pointer-events: none;
      }
    }
    .citation-text {
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
      font-size: clamp(1.6rem, 3.5vw, 2.8rem);
      line-height: 1.5; color: var(--dark);
      max-width: 820px; margin: 0 auto 1.5rem;
      position: relative; z-index: 1;
    }
    .citation-author {
      font-family: 'Barlow', sans-serif;
      font-size: 0.8rem; font-weight: 600; font-style: normal;
      letter-spacing: 0.2em; text-transform: uppercase;
      color: var(--dark-mid); position: relative; z-index: 1;
      &::before { content: '— '; }
    }
    @media (max-width: 900px) {
      .section-citation { padding: 5rem 1.5rem; }
    }
  `]
})
export class CitationComponent {}
