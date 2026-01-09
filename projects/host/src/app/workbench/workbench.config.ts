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
      {
        symbolicName: 'devtools',
        manifestUrl: 'https://microfrontend-platform-devtools.scion.vercel.app/manifest.json',
        intentionCheckDisabled: true,
        scopeCheckDisabled: true,
        capabilityActiveCheckDisabled: true,
      },
    ],
  }
};