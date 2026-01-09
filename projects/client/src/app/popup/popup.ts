import {Component, inject} from '@angular/core';
import {WorkbenchPopup} from '@scion/workbench-client';

@Component({
  selector: 'app-popup',
  imports: [],
  templateUrl: './popup.html',
  styleUrl: './popup.scss',
})
export default class Popup{

  constructor() {
    inject(WorkbenchPopup).signalReady();
  }

}
