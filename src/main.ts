import { Component, provideZoneChangeDetection } from "@angular/core";
import { bootstrapApplication, provideClientHydration } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter } from "@angular/router";
import { routes } from "./app/app.routes";
import { RouterOutlet } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <!-- Skip link pour l'accessibilité -->
          <router-outlet></router-outlet>

  `,
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(),
    provideAnimations(),
    provideAnimationsAsync(),
    provideHttpClient(), // ✅ Ajout obligatoire

  ],
});
