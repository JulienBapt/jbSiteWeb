import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-btn-gold',
  standalone: true,
  imports: [RouterLink, NgClass],
  template: `
    @if (href) {
      <a [href]="href" [ngClass]="variant" class="btn">{{ label }}</a>
    } @else if (routerPath) {
      <a [routerLink]="routerPath" [ngClass]="variant" class="btn">{{ label }}</a>
    } @else {
      <button type="button" [ngClass]="variant" class="btn" (click)="onClick()">{{ label }}</button>
    }
  `,
  styles: [`
    .btn {
      display: inline-block;
      font-family: 'Barlow', sans-serif;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      text-decoration: none;
      padding: 1.1rem 2.5rem;
      border: none;
      cursor: pointer;
      transition: background 0.2s, transform 0.15s, color 0.2s;

      &:hover { transform: translateY(-2px); }
    }

    .gold {
      background: var(--gold);
      color: var(--dark);
      &:hover { background: var(--gold-dark); color: #fff; }
    }

    .dark {
      background: var(--dark);
      color: #fff;
      &:hover { background: var(--khaki); }
    }

    .outline-gold {
      background: transparent;
      color: var(--gold-dark);
      border: 1px solid var(--gold);
      &:hover { background: var(--gold); color: var(--dark); }
    }

    .outline-white {
      background: transparent;
      color: #fff;
      border: 1px solid rgba(255,255,255,0.4);
      &:hover { border-color: #fff; background: rgba(255,255,255,0.08); }
    }
  `]
})
export class BtnGoldComponent {
  @Input() label = '';
  @Input() variant: 'gold' | 'dark' | 'outline-gold' | 'outline-white' = 'gold';
  @Input() routerPath?: string;
  @Input() href?: string;
  @Input() clickFn?: () => void;

  onClick(): void {
    this.clickFn?.();
  }
}
