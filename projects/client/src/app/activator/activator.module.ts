import {inject, NgModule} from '@angular/core';
import {ProjectTitleResolver} from './project-title.resolver';
import {WorkbenchClient} from '@scion/workbench-client';

@NgModule({})
export default class ActivatorModule {

  constructor() {
    inject(ProjectTitleResolver)
    WorkbenchClient.registerTextProvider((key, params) => translations.get(key));
  }
}

const translations = new Map<string, string>()
  .set('yes.action', 'Yes')
  .set('no.action', 'No')
  .set('delete.message', 'Do you want to delete?');
