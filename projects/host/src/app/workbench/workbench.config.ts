import {WorkbenchConfig} from '@scion/workbench';
import {hostManifest} from './manifest';

export const workbenchConfig: WorkbenchConfig = {
  microfrontendPlatform: {
    host: {
      symbolicName: 'host-app',
      manifest: hostManifest,
    },
    applications: [
      {symbolicName: 'client-app', manifestUrl: 'http://localhost:4201/manifest.json'},
    ],
  }
};