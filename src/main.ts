import { Component, LOCALE_ID, provideZoneChangeDetection } from "@angular/core";
import { bootstrapApplication, provideClientHydration } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter } from "@angular/router";
import { routes } from "./app/app.routes";
import { RouterOutlet } from "@angular/router";
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { provideToastr } from 'ngx-toastr';


import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { AppHttpInterceptor } from "./app/core/utils/app-http-interceptor";
registerLocaleData(localeFr);


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
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(), // required animations providers
    provideToastr(),
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true }

  ],
});
