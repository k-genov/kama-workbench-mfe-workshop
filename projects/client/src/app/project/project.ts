import {Component, inject} from '@angular/core';
import {WorkbenchView} from '@scion/workbench-client';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export default class Project {
  constructor() {
    inject(WorkbenchView).signalReady();
  }
}
