import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Corona Coaching — Coach Sportif Certifié | Fresnes & En ligne',
  },
  {
    path: 'a-propos',
    loadComponent: () => import('./pages/a-propos/a-propos.component').then(m => m.AProposComponent),
    title: 'À propos — Jean-Baptiste Corona, Coach Sportif',
  },
  {
    path: 'coaching',
    loadComponent: () => import('./pages/coaching/coaching.component').then(m => m.CoachingComponent),
    title: 'Coaching en ligne — Formules & Tarifs | Corona Coaching',
  },
  {
    path: 'presentiel',
    loadComponent: () => import('./pages/presentiel/presentiel.component').then(m => m.PresentielComponent),
    title: 'Coaching Présentiel à Fresnes & Antony | Corona Coaching',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact — Demande de bilan | Corona Coaching',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
