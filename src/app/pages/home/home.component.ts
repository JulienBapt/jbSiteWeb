import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/seo.service';
import { HeroComponent } from './hero/hero.component';
import { PiliersComponent } from './piliers/piliers.component';
import { ApprocheComponent } from './approche/approche.component';
import { PourQuiComponent } from './pour-qui/pour-qui.component';
import { TemoignagesComponent } from './temoignages/temoignages.component';
import { CtaHomeComponent } from './cta-home/cta-home.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    PiliersComponent,
    ApprocheComponent,
    PourQuiComponent,
    TemoignagesComponent,
    CtaHomeComponent,
  ],
  template: `
    <app-hero />
    <app-piliers />
    <app-approche />
    <app-pour-qui />
    <app-temoignages />
    <app-cta-home />
  `,
})
export class HomeComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Corona Coaching — Coach Sportif Certifié | Fresnes & En ligne',
      description: 'Coaching sportif personnalisé en ligne et à Fresnes. Programme sur-mesure, nutrition sans frustration, suivi WhatsApp 6j/7. Première séance gratuite.',
      keywords: 'coach sportif Fresnes, coaching en ligne, programme musculation personnalisé, perte de poids, rééquilibrage alimentaire',
      ogUrl: 'https://www.coronacoaching.fr',
    });
  }
}
