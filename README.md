# Corona Coaching — Angular SSR

## Stack
- **Angular 19** avec SSR (Server-Side Rendering) et prerendering statique
- **Standalone components** — pas de NgModules
- **SCSS** avec variables CSS globales (design tokens)
- **Polices** : Barlow Condensed (titres), Barlow (corps), Cormorant Garamond (citations)

## Installation

```bash
npm install
npm start        # dev server sur http://localhost:4200
npm run build    # build production avec prerendering SSR
```

## Structure

```
src/
├── app/
│   ├── core/
│   │   ├── navbar/          # Navigation fixe responsive
│   │   ├── footer/          # Pied de page
│   │   ├── seo.service.ts   # Gestion dynamique des meta tags
│   │   └── animation.service.ts  # IntersectionObserver scroll animations
│   ├── pages/
│   │   ├── home/            # Accueil (hero, piliers, approche, pour-qui, témoignages carrousel, CTA)
│   │   ├── a-propos/        # À propos (hero, histoire, citation Aristote, vocation, objectif)
│   │   ├── coaching/        # Coaching en ligne (empathie, piliers, process, formules, FAQ, questionnaire)
│   │   ├── presentiel/      # Coaching présentiel (filtre, offre, différence, témoignages, bilan CTA)
│   │   └── contact/         # Page contact avec questionnaire complet
│   └── shared/
│       ├── btn-gold/        # Bouton réutilisable (variantes: gold, dark, outline)
│       └── section-eyebrow/ # Label de section réutilisable
└── styles.scss              # Design system global (variables, reset, utilitaires)
```

## Photos à intégrer dans `src/assets/images/`

| Fichier | Utilisation |
|---------|-------------|
| `jb-hero.jpg` | Hero home page (photo principale) |
| `jb-approche.jpg` | Section "Mon approche" home |
| `jb-apropos-hero.jpg` | Hero page À propos (souriant, salle) |
| `jb-enfant-escrime.jpg` | Section histoire À propos (gauche) |
| `jb-avant.jpg` | Section histoire À propos (droite, avant transformation) |
| `jb-coaching.jpg` | Section vocation À propos (en train de coacher) |
| `jb-presentiel-hero.jpg` | Hero page présentiel |

## SEO
- Meta tags dynamiques via `SeoService` (title, description, OG, Twitter Card)
- Schema.org `LocalBusiness` dans `index.html`
- Prerendering statique de toutes les routes via `app.routes.server.ts`
- Images avec `loading="lazy"` et dimensions explicites (LCP optimisé)
- Scroll restauration automatique entre les pages

## Formulaire de contact
Le questionnaire envoie via `mailto:` — pour une vraie solution d'envoi,
remplace la logique dans `onSubmit()` par un appel HTTP vers ton backend ou
un service comme Formspree / EmailJS.

## Déploiement
Compatible Vercel, Netlify, ou tout hébergeur Node.js pour le SSR.
Pour un déploiement statique pur (prerender uniquement) :
```bash
ng build
# Déploie dist/corona-coaching/browser/
```
