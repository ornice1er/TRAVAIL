import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface Notification {
  id: number;
  type: string;
  titre: string;
  message: string;
  dateCreation: string;
  statut: string;
  priorite: string;
  auteur: string;
}

@Component({
  selector: 'app-mes-notifications',
  imports: [CommonModule,FormsModule],
  templateUrl: './mes-notifications.component.html',
  styleUrl: './mes-notifications.component.css'
})
export class MesNotificationsComponent {

   activeMenu = 'mes-notifications';
  searchQuery = '';
  filterType = 'all';
  selectedItems: number[] = [];


  notifications: Notification[] = [
    {
      id: 1, type: 'actualite', titre: 'Nouvelle actualité publiée',
      message: 'L\'actualité "Réunion du Conseil des Ministres du 15 Mars 2024" a été publiée avec succès.',
      dateCreation: '15/03/2024 14:30', statut: 'non-lu', priorite: 'normale', auteur: 'Système'
    },
    {
      id: 2, type: 'communique', titre: 'Communiqué en attente de validation',
      message: 'Le communiqué "Concours de recrutement 2024" nécessite votre validation avant publication.',
      dateCreation: '15/03/2024 10:15', statut: 'lu', priorite: 'haute', auteur: 'Direction RH'
    },
    {
      id: 3, type: 'systeme', titre: 'Mise à jour système programmée',
      message: 'Une maintenance système est programmée le 20 mars 2024 de 02h00 à 04h00.',
      dateCreation: '14/03/2024 16:45', statut: 'non-lu', priorite: 'normale', auteur: 'Administrateur'
    },
    {
      id: 4, type: 'membre', titre: 'Nouveau membre ajouté',
      message: 'Un nouveau membre "Jean KOUASSI" a été ajouté à la structure.',
      dateCreation: '14/03/2024 11:20', statut: 'lu', priorite: 'basse', auteur: 'Direction RH'
    },
    {
      id: 5, type: 'document', titre: 'Document en attente de signature',
      message: 'Le document "Arrêté ministériel n°2024-001" attend votre signature électronique.',
      dateCreation: '13/03/2024 15:30', statut: 'non-lu', priorite: 'haute', auteur: 'Secrétariat'
    },
    {
      id: 6, type: 'actualite', titre: 'Actualité modifiée',
      message: 'L\'actualité "Formation professionnelle 2024" a été mise à jour.',
      dateCreation: '13/03/2024 09:45', statut: 'lu', priorite: 'normale', auteur: 'Service Communication'
    },
    {
      id: 7, type: 'rappel', titre: 'Rappel: Réunion hebdomadaire',
      message: 'N\'oubliez pas la réunion hebdomadaire prévue demain à 14h00 en salle de conférence.',
      dateCreation: '12/03/2024 17:00', statut: 'non-lu', priorite: 'normale', auteur: 'Secrétariat'
    },
    {
      id: 8, type: 'systeme', titre: 'Sauvegarde automatique effectuée',
      message: 'La sauvegarde automatique des données a été effectuée avec succès.',
      dateCreation: '12/03/2024 02:00', statut: 'lu', priorite: 'basse', auteur: 'Système'
    }
  ];

  handleSelectItem(id: number) {
    const index = this.selectedItems.indexOf(id);
    if (index > -1) {
      this.selectedItems.splice(index, 1);
    } else {
      this.selectedItems.push(id);
    }
  }

  handleSelectAll() {
    if (this.selectedItems.length === this.notifications.length) {
      this.selectedItems = [];
    } else {
      this.selectedItems = this.notifications.map(n => n.id);
    }
  }

  getTypeIcon(type: string) {
    switch (type) {
      case 'actualite': return 'ri-news-line';
      case 'communique': return 'ri-file-text-line';
      case 'systeme': return 'ri-settings-line';
      case 'membre': return 'ri-user-add-line';
      case 'document': return 'ri-file-line';
      case 'rappel': return 'ri-alarm-line';
      default: return 'ri-notification-line';
    }
  }

  getTypeColor(type: string) {
    switch (type) {
      case 'actualite': return 'bg-blue-100 text-blue-800';
      case 'communique': return 'bg-green-100 text-green-800';
      case 'systeme': return 'bg-gray-100 text-gray-800';
      case 'membre': return 'bg-purple-100 text-purple-800';
      case 'document': return 'bg-orange-100 text-orange-800';
      case 'rappel': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  getPriorityColor(priorite: string) {
    switch (priorite) {
      case 'haute': return 'text-red-600';
      case 'normale': return 'text-blue-600';
      case 'basse': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  }

  markAsRead(id: number) {
    console.log('Marquer comme lu:', id);
  }

  deleteNotification(id: number) {
    console.log('Supprimer notification:', id);
  }

}
