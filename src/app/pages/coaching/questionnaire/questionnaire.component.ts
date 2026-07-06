import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-questionnaire',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="section-questionnaire" id="questionnaire" aria-label="Questionnaire de bilan">
      <div class="questionnaire-inner">
        <div class="questionnaire-left">
          <span class="eyebrow">Première étape</span>
          <h2 class="section-title">Dis-moi qui tu es.<br>Je te dirai si on peut<br>travailler ensemble.</h2>
          <p>Ce questionnaire me permet de comprendre ta situation avant qu'on se parle. Pas de bilan surprise — juste un échange préparé, concret, utile pour toi comme pour moi.</p>
          <p class="note">Je réponds sous 48h. Si ton profil correspond, je t'envoie mon lien pour prendre rendez-vous.</p>
        </div>
        <div class="questionnaire-form">
          <p class="form-title">Le questionnaire</p>
          @if (sent()) {
            <div class="success-msg" role="alert">
              <p>✓ Questionnaire envoyé !</p>
              <p>Je reviens vers toi dans les 48h.</p>
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
              <div class="form-group">
                <label for="objectif">Ton objectif principal *</label>
                <select id="objectif" name="objectif" [(ngModel)]="form.objectif" required>
                  <option value="" disabled>Choisis ton objectif</option>
                  <option>Perdre du poids / masse grasse</option>
                  <option>Prendre de la masse musculaire</option>
                  <option>Me remettre en forme globalement</option>
                  <option>Gagner en force et en tonus</option>
                  <option>Reprendre confiance en moi</option>
                  <option>Autre</option>
                </select>
              </div>
              <div class="form-group">
                <label for="formule">Formule envisagée</label>
                <select id="formule" name="formule" [(ngModel)]="form.formule">
                  <option value="">Laquelle t'intéresse ?</option>
                  <option>Fondation — 3 mois (900€)</option>
                  <option>Transformation — 6 mois (1 600€)</option>
                  <option>Autonomie — 12 mois (2 700€)</option>
                  <option>Je ne sais pas encore</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">Dis-moi en quelques mots où tu en es *</label>
                <textarea id="message" name="message" placeholder="Ton niveau actuel, ce que tu as déjà essayé, tes blocages..." [(ngModel)]="form.message" required rows="4"></textarea>
              </div>
              <button type="submit" class="form-submit" [disabled]="f.invalid">Envoyer mon questionnaire →</button>
              <p class="form-note">Réponse sous 48h · Aucun engagement</p>
            </form>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-questionnaire { background: var(--dark); padding: 8rem 5rem; }
    .questionnaire-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
    .eyebrow { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.5rem; display: block; }
    .section-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: clamp(2rem, 3.5vw, 3rem); text-transform: uppercase; color: #fff; line-height: 1.05; margin-bottom: 1.5rem; }
    .questionnaire-left p { font-size: 0.95rem; font-weight: 300; line-height: 1.8; color: rgba(255,255,255,0.45); margin-bottom: 1rem; }
    .note { font-size: 0.8rem !important; color: rgba(255,255,255,0.25) !important; font-style: italic; }
    .questionnaire-form { background: rgba(255,255,255,0.04); border: 1px solid rgba(201,168,76,0.2); padding: 3rem; }
    .form-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 0.1em; color: #fff; margin-bottom: 2rem; }
    .form-group { margin-bottom: 1.5rem; label { display: block; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.35); margin-bottom: 0.6rem; } input, select, textarea { width: 100%; background: rgba(255,255,255,0.05); border: 1px solid rgba(201,168,76,0.2); color: #fff; font-family: 'Barlow', sans-serif; font-size: 0.9rem; font-weight: 300; padding: 0.85rem 1rem; outline: none; transition: border-color 0.2s; appearance: none; resize: vertical; &::placeholder { color: rgba(255,255,255,0.2); } &:focus { border-color: var(--gold); } } select option { background: var(--dark); color: #fff; } }
    .form-submit { width: 100%; background: var(--gold); color: var(--dark); font-family: 'Barlow', sans-serif; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; padding: 1.1rem; border: none; cursor: pointer; transition: background 0.2s, transform 0.15s; margin-top: 0.5rem; &:hover:not(:disabled) { background: var(--gold-dark); color: #fff; transform: translateY(-2px); } &:disabled { opacity: 0.5; cursor: not-allowed; } }
    .form-note { font-size: 0.72rem; font-weight: 300; color: rgba(255,255,255,0.2); text-align: center; margin-top: 1rem; font-style: italic; }
    .success-msg { text-align: center; padding: 3rem; p:first-child { font-family: 'Barlow Condensed', sans-serif; font-size: 2rem; font-weight: 800; color: var(--gold); text-transform: uppercase; margin-bottom: 1rem; } p:last-child { color: rgba(255,255,255,0.6); } }
    @media (max-width: 900px) { .section-questionnaire { padding: 5rem 1.5rem; } .questionnaire-inner { grid-template-columns: 1fr; } }
  `]
})
export class QuestionnaireComponent {
  sent = signal(false);
  form = { prenom: '', email: '', objectif: '', formule: '', message: '' };

  onSubmit(): void {
    const { prenom, email, objectif, formule, message } = this.form;
    const body = encodeURIComponent(
      `Prénom : ${prenom}\nEmail : ${email}\nObjectif : ${objectif}\nFormule : ${formule}\n\nMessage :\n${message}`
    );
    const subject = encodeURIComponent(`Questionnaire bilan — ${prenom}`);
    window.location.href = `mailto:contact@coronacoaching.fr?subject=\${subject}&body=\${body}`;
    this.sent.set(true);
  }
}
