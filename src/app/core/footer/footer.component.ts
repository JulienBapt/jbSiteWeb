import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer>
      <span class="footer-logo">Corona Coaching</span>
      <ul class="footer-links">
        <li><a routerLink="/">Accueil</a></li>
        <li><a routerLink="/a-propos">À propos</a></li>
        <li><a routerLink="/coaching">Coaching</a></li>
        <li><a routerLink="/presentiel">Présentiel</a></li>
        <li><a routerLink="/contact">Contact</a></li>
      </ul>
      <p class="footer-copy">© {{ year }} Corona Coaching · Tous droits réservés</p>
    </footer>
  `,
  styles: [`
    footer {
      background: var(--dark);
      padding: 2.5rem 5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
      border-top: 1px solid rgba(201,168,76,0.15);
    }

    .footer-logo {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 800;
      font-size: 0.85rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.3);
    }

    .footer-links {
      display: flex;
      gap: 2rem;
      list-style: none;
      flex-wrap: wrap;

      a {
        font-size: 0.7rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.25);
        text-decoration: none;
        transition: color 0.2s;

        &:hover { color: var(--gold); }
      }
    }

    .footer-copy {
      font-size: 0.7rem;
      color: rgba(255,255,255,0.15);
      width: 100%;
      text-align: center;
      margin-top: 0.5rem;
    }

    @media (max-width: 900px) {
      footer {
        flex-direction: column;
        padding: 2rem 1.5rem;
        text-align: center;
      }
      .footer-links { justify-content: center; }
    }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
}
