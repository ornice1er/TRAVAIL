import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PublicService } from '../../../../core/services/public.service';
import { AnimationService } from '../../../../shared/services/animation.service';

@Component({
  selector: 'app-recherche',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './recherche.component.html',
  styleUrl: './recherche.component.css'
})
export class RechercheComponent {

  term: string = '';
  results: any[] = [];
  total: number = 0;
  loading: boolean = false;
  searched: boolean = false;

  constructor(
    private publicService: PublicService,
    private route: ActivatedRoute,
    private router: Router,
    private animationService: AnimationService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.term = params['q'] || '';
      if (this.term && this.term.trim().length >= 2) {
        this.lancerRecherche();
      } else {
        this.results = [];
        this.total = 0;
        this.searched = false;
      }
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }

  // Soumission depuis le champ de la page : met à jour l'URL (?q=...)
  soumettre() {
    const q = (this.term || '').trim();
    if (q.length < 2) { return; }
    this.router.navigate(['/recherche'], { queryParams: { q } });
  }

  lancerRecherche() {
    this.loading = true;
    this.searched = true;
    this.publicService.search(this.term.trim(), 8).subscribe({
      next: (res: any) => {
        this.results = res?.data?.results || [];
        this.total = res?.data?.total || 0;
        this.loading = false;
      },
      error: () => {
        this.results = [];
        this.total = 0;
        this.loading = false;
      }
    });
  }

  // Icône Font Awesome selon le type de résultat
  iconeType(type: string): string {
    switch (type) {
      case 'actualite':  return 'fa-newspaper';
      case 'communique': return 'fa-bullhorn';
      case 'concours':   return 'fa-graduation-cap';
      case 'document':   return 'fa-file-lines';
      default:           return 'fa-circle-info';
    }
  }
}
