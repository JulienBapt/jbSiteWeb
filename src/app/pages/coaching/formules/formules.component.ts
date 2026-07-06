import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../../core/animation.service';

interface Formule {
  duration: string;
  name: string;
  price: string;
  priceNote: string;
  comptant: string;
  features: string[];
  featured?: boolean;
  badge?: string;
}

@Component({
  selector: 'app-formules',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section-formules" aria-label="Les formules de coaching">
      <div class="formules-intro fade-up" #fadeEl>
        <span class="eyebrow">Les formules</span>
        <h2 class="section-title">Choisis ton engagement.</h2>
        <p class="formules-desc">Un vrai changement prend du temps. Pas parce que c'est difficile — parce que les habitudes se construisent dans la durée. Ces formules sont pensées pour ça : te donner le cadre et le temps nécessaires pour que les résultats tiennent.</p>
      </div>
      <div class="formules-grid">
        @for (f of formules; track f.name) {
          <div class="formule-card fade-up" #fadeEl [class.featured]="f.featured">
            @if (f.badge) { <span class="formule-badge">{{ f.badge }}</span> }
            <span class="formule-duration">{{ f.duration }}</span>
            <p class="formule-name">{{ f.name }}</p>
            <p class="formule-price">{{ f.price }}</p>
            <p class="formule-price-note">{{ f.priceNote }}</p>
            <div class="formule-divider"></div>
            <ul class="formule-features" role="list">
              @for (feat of f.features; track feat) { <li>{{ feat }}</li> }
            </ul>
            <p class="formule-comptant">{{ f.comptant }}</p>
            <a routerLink="/contact" fragment="questionnaire" class="formule-cta">Je commence →</a>
          </div>
        }
      </div>
      <p class="formules-note fade-up" #fadeEl>Une situation particulière ? <a routerLink="/contact">Contacte-moi directement</a> — j'étudie chaque demande.</p>
    </section>
  `,
  styles: [`
    .section-formules { padding: 8rem 5rem; background: var(--cream); }
    .formules-intro { margin-bottom: 4rem; max-width: 620px; }
    .eyebrow { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold-dark); margin-bottom: 1.2rem; display: block; }
    .section-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: clamp(2rem, 3.5vw, 3rem); text-transform: uppercase; color: var(--text); margin-bottom: 1rem; }
    .formules-desc { font-size: 0.95rem; font-weight: 300; line-height: 1.8; color: var(--text-muted); }
    .formules-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(201,168,76,0.3); }
    .formule-card { background: var(--cream); padding: 3rem 2.5rem; position: relative; transition: background 0.3s; &:hover { background: var(--cream-dark); } &.featured { background: var(--dark); &:hover { background: var(--dark-mid); } } }
    .formule-badge { position: absolute; top: -1px; left: 50%; transform: translateX(-50%); background: var(--gold); color: var(--dark); font-size: 0.6rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; padding: 0.35rem 1rem; white-space: nowrap; }
    .formule-duration { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold-dark); margin-bottom: 1.5rem; display: block; .featured & { color: rgba(201,168,76,0.7); } }
    .formule-name { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 2rem; text-transform: uppercase; color: var(--text); margin-bottom: 0.5rem; .featured & { color: #fff; } }
    .formule-price { font-family: 'Cormorant Garamond', serif; font-size: 3.2rem; font-weight: 600; color: var(--gold-dark); line-height: 1; margin-bottom: 0.3rem; .featured & { color: var(--gold); } }
    .formule-price-note { font-size: 0.75rem; font-weight: 300; color: var(--text-muted); margin-bottom: 2rem; .featured & { color: rgba(255,255,255,0.4); } }
    .formule-divider { width: 30px; height: 1px; background: var(--gold); margin-bottom: 2rem; }
    .formule-features { list-style: none; display: flex; flex-direction: column; gap: 0.8rem; margin-bottom: 2.5rem; li { font-size: 0.85rem; font-weight: 300; color: var(--text-muted); padding-left: 1.2rem; position: relative; &::before { content: ''; position: absolute; left: 0; top: 0.6em; width: 5px; height: 1px; background: var(--gold); } } .featured & li { color: rgba(255,255,255,0.55); } }
    .formule-comptant { font-size: 0.72rem; color: var(--text-muted); font-style: italic; margin-bottom: 1.5rem; .featured & { color: rgba(255,255,255,0.3); } }
    .formule-cta { display: block; text-align: center; background: transparent; color: var(--gold-dark); font-family: 'Barlow', sans-serif; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; text-decoration: none; padding: 0.9rem; border: 1px solid var(--gold); transition: all 0.2s; &:hover { background: var(--gold); color: var(--dark); } .featured & { background: var(--gold); color: var(--dark); border-color: var(--gold); &:hover { background: var(--gold-dark); color: #fff; } } }
    .formules-note { text-align: center; margin-top: 2.5rem; font-size: 0.82rem; font-weight: 300; color: var(--text-muted); font-style: italic; a { color: var(--gold-dark); border-bottom: 1px solid var(--gold); padding-bottom: 1px; } }
    @media (max-width: 900px) { .section-formules { padding: 5rem 1.5rem; } .formules-grid { grid-template-columns: 1fr; } }
  `]
})
export class FormulesComponent implements AfterViewInit {
  @ViewChildren('fadeEl') fadeEls!: QueryList<ElementRef>;
  private platformId = inject(PLATFORM_ID);
  formules: Formule[] = [
    { duration: '3 mois', name: 'Fondation', price: '900€', priceNote: '300€ / mois · ou 855€ comptant', comptant: '−5% en paiement comptant', features: ["Bilan initial complet", "Programme d'entraînement 100% personnalisé", "Accompagnement nutritionnel adapté", "Suivi WhatsApp 6j/7", "Validation des repas et des séances", "Point hebdomadaire le week-end", "Ajustements en continu selon tes retours", "Bilan de fin de formule"] },
    { duration: '6 mois', name: 'Transformation', price: '1 600€', priceNote: '267€ / mois · ou 1 520€ comptant', comptant: '−5% en paiement comptant', featured: true, badge: 'Le plus choisi', features: ["Tout ce qui est inclus dans Fondation", "Visio mensuelle de 30 minutes", "Suivi de progression structuré", "Réajustements approfondis à mi-parcours", "À mi-chemin de l'autonomie"] },
    { duration: '12 mois', name: 'Autonomie', price: '2 700€', priceNote: '225€ / mois · ou 2 565€ comptant', comptant: '−5% en paiement comptant', features: ["Tout ce qui est inclus dans Transformation", "Visio bimensuelle de 30 minutes", "Montée en autonomie progressive", "À la fin : tu sais t'entraîner et manger sans moi", "La formule qui correspond à ma philosophie"] },
  ];
  constructor(private anim: AnimationService) {}
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) this.anim.observe(this.fadeEls.map(el => el.nativeElement));
  }
}
