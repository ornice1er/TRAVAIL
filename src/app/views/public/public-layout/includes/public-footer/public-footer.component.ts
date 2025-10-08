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

}
