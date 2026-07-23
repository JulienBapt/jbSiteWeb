import { Component, signal } from '@angular/core';

interface FaqItem { q: string; a: string; }

@Component({
  selector: 'app-faq',
  standalone: true,
  template: `
    <section class="section-faq" aria-label="Questions fréquentes">
      <div class="faq-header">
        <span class="eyebrow">Questions fréquentes</span>
        <h2 class="section-title">Tu te poses des questions ?<br>C'est normal.</h2>
      </div>
      <div class="faq-list" role="list">
        @for (item of faq; track item.q; let i = $index) {
          <div class="faq-item" role="listitem" [class.open]="openIndex() === i">
            <button class="faq-question" (click)="toggle(i)" [attr.aria-expanded]="openIndex() === i" [attr.aria-controls]="'faq-' + i">
              {{ item.q }}
              <span class="faq-icon" aria-hidden="true">+</span>
            </button>
            <div class="faq-answer" [id]="'faq-' + i" role="region">
              <p>{{ item.a }}</p>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .section-faq { background: var(--cream); padding: 8rem 5rem; }
    .faq-header { margin-bottom: 4rem; }
    .eyebrow { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold-dark); margin-bottom: 1.2rem; display: block; }
    .section-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: clamp(2rem, 3.5vw, 3rem); text-transform: uppercase; color: var(--text); }
    .faq-list { max-width: 760px; }
    .faq-item { border-top: 1px solid rgba(201,168,76,0.25); &:last-child { border-bottom: 1px solid rgba(201,168,76,0.25); } }
    .faq-question { width: 100%; background: none; border: none; font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 1.15rem; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text); padding: 1.8rem 0; cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 1rem; text-align: left; }
    .faq-icon { font-family: 'Barlow', sans-serif; font-weight: 300; font-size: 1.5rem; color: var(--gold); transition: transform 0.3s; flex-shrink: 0; .open & { transform: rotate(45deg); } }
    .faq-answer { font-size: 0.9rem; font-weight: 300; line-height: 1.8; color: var(--text-muted); max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding 0.3s; .open & { max-height: 300px; padding-bottom: 1.8rem; } }
    @media (max-width: 900px) { .section-faq { padding: 5rem 1.5rem; } }
  `]
})
export class FaqComponent {
  openIndex = signal<number | null>(null);
  faq: FaqItem[] = [
    { q: "Je n'ai jamais fait de musculation, c'est accessible ?", a: "Absolument. Le programme est construit à partir de ton niveau réel. J'ai accompagné des débutants complets comme des sportifs confirmés. Ce qui compte c'est ta motivation, pas ton expérience passée." },
    { q: "Est-ce que je vais devoir me priver de manger ?", a: "Non. Mon approche ne repose pas sur des interdits mais sur des habitudes durables adaptées à ta vie. J'ai moi-même un appétit énorme — je sais ce que c'est, et j'ai trouvé des stratégies qui fonctionnent sans frustration constante." },
    { q: "Combien de temps avant de voir des résultats ?", a: "Les premiers changements : énergie, sommeil, habitudes, confiance en soit, se ressentent souvent à partir de 3 à 4 semaines. Les résultats visibles quant à eux demandent généralement 8 à 12 semaines de travail régulier. Une transformation durable se construit sur des mois, pas des jours." },
    { q: "Que se passe-t-il si j'ai une blessure ou un imprévu ?", a: "On adapte. Une blessure, un déménagement, une période chargée ou n'importe quelle situation innatendue. La vie ne s'arrête pas et le programme non plus. C'est précisément pour ça que le suivi continu existe : ajuster en temps réel." },
    { q: "Quelle est la différence avec le coaching présentiel ?", a: "Le contenu du suivi est identique : programme évolutif, nutrition, accompagnement au quotidien. La différence c'est la présence physique : en présentiel, je supervise ta séance en direct, je corrige tes mouvements et te pousse à te dépasser." },
  ];
  toggle(i: number): void {
    this.openIndex.update(v => v === i ? null : i);
  }
}
