import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/seo.service';
import { HeroPresentielComponent } from './hero-presentiel/hero-presentiel.component';
import { FiltreComponent } from './filtre/filtre.component';
import { OffrePresentielComponent } from './offre-presentiel/offre-presentiel.component';
import { DifferenceComponent } from './difference/difference.component';
import { TemoignagesPresentielComponent } from './temoignages-presentiel/temoignages-presentiel.component';
import { BilanCtaComponent } from './bilan-cta/bilan-cta.component';

@Component({
  selector: 'app-presentiel',
  standalone: true,
  imports: [HeroPresentielComponent, FiltreComponent, OffrePresentielComponent, DifferenceComponent, TemoignagesPresentielComponent, BilanCtaComponent],
  template: `
    <app-hero-presentiel />
    <app-filtre />
    <app-offre-presentiel />
    <app-difference />
    <app-temoignages-presentiel />
    <app-bilan-cta />
  `,
})
export class PresentielComponent implements OnInit {
  constructor(private seo: SeoService) {}
  ngOnInit(): void {
    this.seo.update({
      title: 'Coaching Présentiel à Fresnes & Antony | Corona Coaching',
      description: 'Coaching sportif en salle à Fresnes et Antony. Séances encadrées, corrections en direct, programme personnalisé. Bilan découverte gratuit.',
      keywords: 'coach sportif Fresnes, coach sportif Antony, coaching présentiel, Basic-Fit, musculation encadrée',
      ogUrl: 'https://www.coronacoaching.fr/presentiel',
    });
  }
}
