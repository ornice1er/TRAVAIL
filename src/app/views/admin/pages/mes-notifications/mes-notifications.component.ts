import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../../../core/services/notification.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from '../../../../core/utils/local-stoarge-service';


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


    loading=false

    pg:any={
    pageSize:9,
    page:1,
    total:0
  }
  selected_data:any
  total:any
  constructor(
    private notificationService:NotificationService,
    private lsService:LocalStorageService,
    private router:Router,
    private toastr:ToastrService
  ){

  }

  ngOnInit(){
    this.getAll()
  }


    getAll() {
    this.loading=true
      this.notificationService.getAll(this.pg.pageSize,this.pg.page,true).subscribe((res:any)=>{
          this.loading=false

          this.notifications=res.data.data
          this.pg.total=res.data.total
          this.total=res.data.total
          this.selected_data=null


         },
         (err:any)=>{
          this.loading=false
          this.toastr.error(err.error?.message, 'Communiqué');
    
        })
  }


  notifications: any[] = [];

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
