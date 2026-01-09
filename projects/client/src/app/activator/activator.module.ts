import {inject, NgModule} from '@angular/core';
import {ProjectTitleResolver} from './project-title.resolver';

@NgModule({})
export default class ActivatorModule {

  constructor() {
    inject(ProjectTitleResolver);
  }
}