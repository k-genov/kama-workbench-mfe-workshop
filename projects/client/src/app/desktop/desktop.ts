import {Component, inject} from '@angular/core';
import {WorkbenchPart} from '@scion/workbench-client';

@Component({
  selector: 'app-desktop',
  imports: [],
  templateUrl: './desktop.html',
  styleUrl: './desktop.scss',
})
export default class Desktop {
  constructor() {
    inject(WorkbenchPart).signalReady();
  }
}
