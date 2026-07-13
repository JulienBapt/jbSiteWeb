import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="section-contact" aria-label="Page de contact">
      <div class="contact-inner">

        <div class="contact-left">
          <span class="eyebrow">Première étape</span>
          <h1 class="contact-title">Dis-moi qui tu es.<br>Je te dirai si on peut<br>travailler ensemble.</h1>
          <p class="contact-desc">Ce questionnaire me permet de comprendre un peu mieux ta situation avant qu'on se parle. Pas de contrôle surprise, juste une conversation, utile pour toi comme pour moi.</p>
          <p class="contact-note">Je réponds sous 48h. Si ton profil correspond, je t'envoie mon lien pour prendre rendez-vous.</p>

          <div class="contact-infos">
            <div class="info-item">
              <span class="info-label">Zone d'intervention</span>
              <span class="info-value">Fresnes &amp; Antony (présentiel)<br>France entière (en ligne)</span>
            </div>
            <div class="info-item">
              <span class="info-label">Réseaux sociaux</span>
              <span class="info-value">
                <a href="https://www.instagram.com/jeanbaptiste.corona/?hl=fr" target="_blank" rel="noopener noreferrer">Instagram</a>
              </span>
            </div>
          </div>
        </div>

        <div class="contact-right">
          <div class="contact-form-wrapper">
            <p class="form-title">Le questionnaire</p>

            @if (sent()) {
              <div class="success-msg" role="alert">
                <p class="success-icon">✓</p>
                <p class="success-title">Questionnaire envoyé !</p>
                <p class="success-sub">Je reviens vers toi dans les 48h.</p>
              </div>
            } @else {
              <form (ngSubmit)="onSubmit()" #f="ngForm" novalidate>
                <div class="form-group">
                  <label for="prenom">Prénom *</label>
                  <input id="prenom" name="prenom" type="text" placeholder="Ton prénom" [(ngModel)]="form.prenom" required />
                </div>
                <div class="form-group">
                  <label for="email">Email *</label>
                  <input id="email" name="email" type="email" placeholder="ton@email.com" [(ngModel)]="form.email" required />
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <label for="age">Âge</label>
                    <input id="age" name="age" type="number" placeholder="Ton âge" [(ngModel)]="form.age" />
                  </div>
                  <div class="form-group">
                    <label for="type">Type de coaching</label>
                    <select id="type" name="type" [(ngModel)]="form.type">
                      <option value="">En ligne ou présentiel ?</option>
                      <option>En ligne</option>
                      <option>Présentiel (Fresnes / Antony)</option>
                      <option>Les deux</option>
                      <option>Je ne sais pas encore</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label for="objectif">Ton objectif principal *</label>
                  <select id="objectif" name="objectif" [(ngModel)]="form.objectif" required>
                    <option value="" disabled>Choisis ton objectif</option>
                    <option>Perdre du poids / masse grasse</option>
                    <option>Prendre de la masse musculaire</option>
                    <option>Me remettre en forme globalement</option>
                    <option>Gagner en force et en tonus</option>
                    <option>Reprendre confiance en moi</option>
                    <option>Améliorer ma santé et mon bien-être</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="message">Dis-moi en quelques mots où tu en es *</label>
                  <textarea id="message" name="message"
                    placeholder="Ton niveau actuel, ce que tu as déjà essayé, tes blocages, une pathologie éventuelle..."
                    [(ngModel)]="form.message" required rows="5"></textarea>
                </div>
                <button type="submit" class="form-submit" [disabled]="f.invalid">
                  Envoyer mon questionnaire →
                </button>
                <p class="form-note">Réponse sous 48h · Aucun engagement</p>
              </form>
            }
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .section-contact {
      background: var(--dark);
      min-height: 100vh;
      padding: 140px 5rem 8rem;
    }

    .contact-inner {
      display: grid;
      grid-template-columns: 1fr 1.1fr;
      gap: 6rem;
      align-items: start;
      max-width: 1200px;
      margin: 0 auto;
    }

    .eyebrow {
      font-size: 0.65rem; font-weight: 700; letter-spacing: 0.25em;
      text-transform: uppercase; color: var(--gold);
      margin-bottom: 1.5rem; display: block;
    }

    .contact-title {
      font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
      font-size: clamp(2rem, 3.5vw, 3.2rem); text-transform: uppercase;
      color: #fff; line-height: 1.05; margin-bottom: 1.5rem;
    }

    .contact-desc {
      font-size: 0.95rem; font-weight: 300; line-height: 1.8;
      color: rgba(255,255,255,0.45); margin-bottom: 1rem;
    }

    .contact-note {
      font-size: 0.8rem; font-style: italic;
      color: rgba(255,255,255,0.25); margin-bottom: 3rem;
    }

    .contact-infos {
      display: flex; flex-direction: column; gap: 1.5rem;
      border-top: 1px solid rgba(201,168,76,0.2); padding-top: 2rem;
    }

    .info-item { display: flex; flex-direction: column; gap: 0.4rem; }

    .info-label {
      font-size: 0.62rem; font-weight: 700; letter-spacing: 0.2em;
      text-transform: uppercase; color: var(--gold);
    }

    .info-value {
      font-size: 0.9rem; font-weight: 300; line-height: 1.6;
      color: rgba(255,255,255,0.5);
      a { color: var(--gold); border-bottom: 1px solid rgba(201,168,76,0.3); transition: border-color 0.2s; &:hover { border-color: var(--gold); } }
    }

    .contact-form-wrapper {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(201,168,76,0.2);
      padding: 3rem;
    }

    .form-title {
      font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
      font-size: 1.1rem; text-transform: uppercase; letter-spacing: 0.1em;
      color: #fff; margin-bottom: 2rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
      label {
        display: block; font-size: 0.68rem; font-weight: 700;
        letter-spacing: 0.18em; text-transform: uppercase;
        color: rgba(255,255,255,0.35); margin-bottom: 0.6rem;
      }
      input, select, textarea {
        width: 100%; background: rgba(255,255,255,0.05);
        border: 1px solid rgba(201,168,76,0.2); color: #fff;
        font-family: 'Barlow', sans-serif; font-size: 0.9rem;
        font-weight: 300; padding: 0.85rem 1rem; outline: none;
        transition: border-color 0.2s; appearance: none; resize: vertical;
        &::placeholder { color: rgba(255,255,255,0.2); }
        &:focus { border-color: var(--gold); }
      }
      select option { background: var(--dark); color: #fff; }
    }

    .form-row {
      display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;
    }

    .form-submit {
      width: 100%; background: var(--gold); color: var(--dark);
      font-family: 'Barlow', sans-serif; font-size: 0.75rem; font-weight: 700;
      letter-spacing: 0.2em; text-transform: uppercase; padding: 1.1rem;
      border: none; cursor: pointer; transition: background 0.2s, transform 0.15s;
      margin-top: 0.5rem;
      &:hover:not(:disabled) { background: var(--gold-dark); color: #fff; transform: translateY(-2px); }
      &:disabled { opacity: 0.5; cursor: not-allowed; }
    }

    .form-note {
      font-size: 0.72rem; font-weight: 300; color: rgba(255,255,255,0.2);
      text-align: center; margin-top: 1rem; font-style: italic;
    }

    .success-msg {
      text-align: center; padding: 4rem 2rem;
      .success-icon { font-size: 3rem; color: var(--gold); margin-bottom: 1rem; }
      .success-title { font-family: 'Barlow Condensed', sans-serif; font-size: 2rem; font-weight: 800; text-transform: uppercase; color: #fff; margin-bottom: 0.8rem; }
      .success-sub { font-size: 0.95rem; font-weight: 300; color: rgba(255,255,255,0.5); }
    }

    @media (max-width: 900px) {
      .section-contact { padding: 110px 1.5rem 5rem; }
      .contact-inner { grid-template-columns: 1fr; gap: 3rem; }
      .form-row { grid-template-columns: 1fr; }
    }
  `]
})
export class ContactComponent implements OnInit {
  sent = signal(false);
  form = { prenom: '', email: '', age: '', type: '', objectif: '', message: '' };

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Contact — Demande de bilan gratuit | Corona Coaching',
      description: 'Remplis le questionnaire bilan pour commencer ton accompagnement avec Jean-Baptiste Corona. Réponse sous 48h.',
      keywords: 'contact coach sportif, bilan gratuit, coaching sportif Fresnes',
      ogUrl: 'https://www.coronacoaching.fr/contact',
    });
  }

  onSubmit(): void {
    const { prenom, email, age, type, objectif, message } = this.form;
    const body = encodeURIComponent(
      `Prénom : ${prenom}
Email : ${email}
Âge : ${age}
Type de coaching : ${type}
Objectif : ${objectif}

Message :
${message}`
    );
    const subject = encodeURIComponent(`Questionnaire bilan — ${prenom}`);
    window.location.href = `mailto:contact@coronacoaching.fr?subject=${subject}&body=${body}`;
    this.sent.set(true);
  }
}
