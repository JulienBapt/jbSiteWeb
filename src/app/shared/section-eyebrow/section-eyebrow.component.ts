import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eyebrow',
  standalone: true,
  template: `<span class="eyebrow" [class]="'eyebrow--' + color">{{ text }}</span>`,
  styles: [`
    .eyebrow {
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      display: block;
      margin-bottom: 1.2rem;
    }
    .eyebrow--light { color: var(--gold-dark); }
    .eyebrow--gold  { color: var(--gold); }
  `]
})
export class EyebrowComponent {
  @Input() text = '';
  @Input() color: 'light' | 'gold' = 'light';
}
