import { routes } from './app.routes';
import {ApplicationConfig, provideZoneChangeDetection} from "@angular/core";
import {provideRouter, withInMemoryScrolling} from "@angular/router";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top' }))
  ]
};
