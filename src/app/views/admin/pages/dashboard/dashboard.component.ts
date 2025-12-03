import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashService } from '../../../../core/services/dash.service';
@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
loading:any
  stats = [
    { title: 'Communiqués publiés', value: '', icon: 'ri-file-text-line', color: 'from-benin-green to-green-600', change: '+12%' },
    { title: 'Actualités en ligne', value: '', icon: 'ri-news-line', color: 'from-benin-blue to-blue-600', change: '+8%' },
    { title: 'Membres actifs', value: '', icon: 'ri-team-line', color: 'from-benin-yellow to-yellow-500', change: '+5%' },
    { title: 'Documents archivés', value: '', icon: 'ri-archive-line', color: 'from-benin-red to-red-600', change: '+15%' }
  ];

  quickActions = [
    { title: 'Nouveau communiqué', icon: 'ri-file-add-line', color: 'bg-benin-green', link: '/admin/communiques/creation' },
    { title: 'Publier actualité', icon: 'ri-news-line', color: 'bg-benin-blue', link:"/admin/actualites/creation" },
    { title: 'Ajouter membre', icon: 'ri-user-add-line', color: 'bg-benin-yellow', link:"/admin/users" },
    { title: 'Gérer documents', icon: 'ri-folder-line', color: 'bg-benin-red',link:"/admin/documentation" }
  ];

  recentActivities:any = [
    // { action: 'Communiqué publié', title: 'Réunion du conseil des ministres', time: 'Il y a 2 heures', user: 'Admin Principal' },
    // { action: 'Actualité mise à jour', title: 'Nouvelle politique de recrutement', time: 'Il y a 4 heures', user: 'Éditeur' },
    // { action: 'Document archivé', title: 'Rapport annuel 2023', time: 'Il y a 6 heures', user: 'Gestionnaire' },
    // { action: 'Membre ajouté', title: 'Nouveau directeur adjoint', time: 'Il y a 1 jour', user: 'RH Manager' }
  ];


  constructor(private dashService:DashService){

  }


  ngOnInit(){
    this.getAll()
  }


  getAll() {
    this.loading=true
      this.dashService.getDash().subscribe((res:any)=>{
          this.loading=false
          this.stats[0].value=res.data?.stats?.communiques
          this.stats[1].value=res.data?.stats?.actualites
          this.stats[2].value=res.data?.stats?.members
          this.stats[3].value=res.data?.stats?.docs
          console.log(res)

         },
         (err:any)=>{
          this.loading=false
    
        })
  }

}
