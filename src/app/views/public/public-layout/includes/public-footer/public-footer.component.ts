import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-public-footer',
  imports: [CommonModule],
  templateUrl: './public-footer.component.html',
  styleUrl: './public-footer.component.css'
})
export class PublicFooterComponent {
  currentYear = new Date().getFullYear();

  // Liens à vérifier/ajuster selon les URLs officielles définitives.
  institutions = [
    { label: 'Gouvernement du Bénin', url: 'https://www.gouv.bj' },
    { label: 'Présidence de la République', url: 'https://www.presidence.bj' },
    { label: 'Assemblée Nationale', url: 'https://assemblee-nationale.bj' },
    { label: 'Ministère de l\'Économie et des Finances', url: 'https://finances.bj' },
    { label: 'Budget Bénin (DGB)', url: 'https://budgetbenin.bj' },
  ];

  partenaires = [
    { label: 'Banque Mondiale', url: 'https://www.banquemondiale.org' },
    { label: 'Fonds Monétaire International', url: 'https://www.imf.org' },
    { label: 'Banque Africaine de Développement', url: 'https://www.afdb.org' },
    { label: 'UEMOA', url: 'https://www.uemoa.int' },
    { label: 'PNUD', url: 'https://www.undp.org' },
  ];

}
