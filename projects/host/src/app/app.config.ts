import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import { routes } from './app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideWorkbench} from '@scion/workbench';
import {workbenchConfig} from './workbench/workbench.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()), // configure the router with componentInputBinding to read parameters directly from component inputs
    provideZoneChangeDetection(), // provide zone change detection until `@scion/workbench` supports zoneless
    provideAnimations(), // required by the SCION Workbench, dependency will be removed in upcoming versions
    provideWorkbench(workbenchConfig)
  ]
};
