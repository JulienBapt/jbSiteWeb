import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  template: `
    <nav [ngClass]="{ scrolled: isScrolled() }">
      <a routerLink="/" class="nav-logo">
        Jean-Baptiste Corona
        <span>Coach Sportif Certifié</span>
      </a>

      <ul class="nav-links">
        <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Accueil</a></li>
        <li><a routerLink="/a-propos" routerLinkActive="active">À propos</a></li>
        <li><a routerLink="/coaching" routerLinkActive="active">Coaching</a></li>
        <li><a routerLink="/presentiel" routerLinkActive="active">Présentiel</a></li>
        <li><a routerLink="/contact" class="nav-cta">Bilan gratuit</a></li>
      </ul>

      <button class="hamburger" (click)="toggleMenu()" [attr.aria-expanded]="menuOpen()">
        <span></span><span></span><span></span>
      </button>
    </nav>

    <div class="mobile-menu" [ngClass]="{ open: menuOpen() }">
      <ul>
        <li><a routerLink="/" (click)="closeMenu()">Accueil</a></li>
        <li><a routerLink="/a-propos" (click)="closeMenu()">À propos</a></li>
        <li><a routerLink="/coaching" (click)="closeMenu()">Coaching</a></li>
        <li><a routerLink="/presentiel" (click)="closeMenu()">Présentiel</a></li>
        <li><a routerLink="/contact" (click)="closeMenu()" class="mobile-cta">Bilan gratuit</a></li>
      </ul>
    </div>
  `,
  styles: [`
    nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.2rem 4rem;
      background: transparent;
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(201,168,76,0.2);
      transition: padding 0.3s;

      &.scrolled {
        padding: 0.8rem 4rem;
        box-shadow: 0 2px 20px rgba(0,0,0,0.08);
      }
    }

    .nav-logo {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 800;
      font-size: 1rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--text-white);
      text-decoration: none;
      line-height: 1.2;

      span {
        display: block;
        font-size: 0.65rem;
        font-weight: 400;
        letter-spacing: 0.2em;
        color: var(--gold-dark);
      }
    }

    .nav-links {
      display: flex;
      gap: 3rem;
      list-style: none;

      a {
        font-size: 0.8rem;
        font-weight: 500;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        text-decoration: none;
        color: var(--text-muted);
        transition: color 0.2s;

        &:hover, &.active { color: var(--gold-dark); }
      }

      .nav-cta {
        background: var(--gold);
        color: var(--dark) !important;
        padding: 0.6rem 1.4rem;
        font-weight: 600;
        transition: background 0.2s;

        &:hover { background: var(--gold-dark); color: #fff !important; }
      }
    }

    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;

      span {
        display: block;
        width: 24px;
        height: 2px;
        background: var(--text);
        transition: all 0.3s;
      }
    }

    .mobile-menu {
      display: none;
      position: fixed;
      top: 70px; left: 0; right: 0;
      background: var(--cream);
      z-index: 99;
      padding: 2rem;
      border-bottom: 1px solid rgba(201,168,76,0.2);
      transform: translateY(-100%);
      opacity: 0;
      transition: all 0.3s;

      &.open {
        transform: translateY(0);
        opacity: 1;
      }

      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        a {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text);
          transition: color 0.2s;

          &:hover { color: var(--gold-dark); }
        }

        .mobile-cta {
          color: var(--gold-dark) !important;
        }
      }
    }

    @media (max-width: 900px) {
      nav { padding: 1rem 1.5rem; }
      nav.scrolled { padding: 0.8rem 1.5rem; }
      .nav-links { display: none; }
      .hamburger { display: flex; }
      .mobile-menu { display: block; }
    }
  `]
})
export class NavbarComponent {
  isScrolled = signal(false);
  menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
