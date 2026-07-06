import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/seo.service';
import { HeroCoachingComponent } from './hero-coaching/hero-coaching.component';
import { EmpathieComponent } from './empathie/empathie.component';
import { PiliersCoachingComponent } from './piliers-coaching/piliers-coaching.component';
import { ProcessComponent } from './process/process.component';
import { FormulesComponent } from './formules/formules.component';
import { PresentielCtaComponent } from './presentiel-cta/presentiel-cta.component';
import { ConfianceComponent } from './confiance/confiance.component';
import { FaqComponent } from './faq/faq.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

@Component({
  selector: 'app-coaching',
  standalone: true,
  imports: [
    HeroCoachingComponent, EmpathieComponent, PiliersCoachingComponent,
    ProcessComponent, FormulesComponent, PresentielCtaComponent,
    ConfianceComponent, FaqComponent, QuestionnaireComponent,
  ],
  template: `
    <app-hero-coaching />
    <app-empathie />
    <app-piliers-coaching />
    <app-process />
    <app-formules />
    <app-presentiel-cta />
    <app-confiance />
    <app-faq />
    <app-questionnaire />
  `,
})
export class CoachingComponent implements OnInit {
  constructor(private seo: SeoService) {}
  ngOnInit(): void {
    this.seo.update({
      title: 'Coaching en ligne — Formules & Tarifs | Corona Coaching',
      description: 'Coaching sportif en ligne sur-mesure. Formules 3, 6 et 12 mois. Programme personnalisé, nutrition sans frustration, suivi WhatsApp 6j/7. Bilan gratuit.',
      keywords: 'coaching sportif en ligne, programme personnalisé, suivi nutrition, perte de poids, prise de masse',
      ogUrl: 'https://www.coronacoaching.fr/coaching',
    });
  }
}
