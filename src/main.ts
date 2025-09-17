import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter } from "@angular/router";
import { routes } from "./app/app.routes";
import { HeaderComponent } from "./app/shared/components/header/header.component";
import { FooterComponent } from "./app/shared/components/footer/footer.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  template: `
    <!-- Skip link pour l'accessibilité -->
    <a href="#main-content" class="skip-link">Aller au contenu principal</a>

    <app-header></app-header>
    <main id="main-content" role="main">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideAnimationsAsync(),
  ],
});
