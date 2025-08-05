import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkModeSubject = new BehaviorSubject<boolean>(false);
  public isDarkMode$ = this.isDarkModeSubject.asObservable();

  constructor() {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    // Vérifier le localStorage d'abord
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      const isDark = savedTheme === 'dark';
      this.setTheme(isDark);
    } else {
      // Par défaut : mode clair
      this.setTheme(false);
    }
  }

  toggleTheme(): void {
    const currentTheme = this.isDarkModeSubject.value;
    this.setTheme(!currentTheme);
  }

  setTheme(isDark: boolean): void {
    this.isDarkModeSubject.next(isDark);
    
    // Appliquer la classe sur le document
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  get isDarkMode(): boolean {
    return this.isDarkModeSubject.value;
  }
}