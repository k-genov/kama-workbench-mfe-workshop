import {Component, inject} from '@angular/core';
import {WorkbenchDialog} from '@scion/workbench-client';

@Component({
  selector: 'app-dialog',
  imports: [],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss',
})
export default class Dialog {

  protected dialog = inject(WorkbenchDialog);

  constructor() {
    this.dialog.signalReady();
  }

}
