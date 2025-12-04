import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router'; // withHashLocation removed

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

/**
 * Defines the main application configuration.
 * FIX: Reverted to default PathLocationStrategy for clean local URLs.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    // Provide routing configuration with the necessary hash strategy for static hosting
    provideRouter(
      routes // withHashLocation() removed to fix local routing
    ),
    provideClientHydration()
  ]
};