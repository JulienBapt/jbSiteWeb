import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/seo.service';
import { HeroAProposComponent } from './hero-apropos/hero-apropos.component';
import { HistoireComponent } from './histoire/histoire.component';
import { CitationComponent } from './citation/citation.component';
import { VocationComponent } from './vocation/vocation.component';
import { ObjectifComponent } from './objectif/objectif.component';

@Component({
  selector: 'app-a-propos',
  standalone: true,
  imports: [HeroAProposComponent, HistoireComponent, CitationComponent, VocationComponent, ObjectifComponent],
  template: `
    <app-hero-apropos />
    <app-histoire />
    <app-citation />
    <app-vocation />
    <app-objectif />
  `,
})
export class AProposComponent implements OnInit {
  constructor(private seo: SeoService) {}
  ngOnInit(): void {
    this.seo.update({
      title: 'À propos — Jean-Baptiste Corona, Coach Sportif Certifié',
      description: "De 115kg à coach sportif certifié. L'histoire de Jean-Baptiste Corona, fondateur de Corona Coaching.",
      keywords: 'Jean-Baptiste Corona, coach sportif certifié, transformation physique, perte de poids',
      ogUrl: 'https://www.coronacoaching.fr/a-propos',
    });
  }
}
