import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withHashLocation} from '@angular/router';

import { routes } from './app.routes';
import {provideWorkbenchClient} from './workbench-client/workbench-client.provider';
import {provideWorkbenchTheme} from './workbench-client/workbench-theme-switcher';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    provideWorkbenchClient(),
    provideWorkbenchTheme(),
  ]
};
