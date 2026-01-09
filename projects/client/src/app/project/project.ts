import {Component, inject} from '@angular/core';
import {WorkbenchDialogService, WorkbenchMessageBoxService, WorkbenchPopupService, WorkbenchView} from '@scion/workbench-client';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export default class Project {
  private view = inject(WorkbenchView);
  private dialogService = inject(WorkbenchDialogService);
  private messageBox = inject(WorkbenchMessageBoxService);
  private popupService = inject(WorkbenchPopupService);
  private params = toSignal(this.view.params$, {initialValue: new Map<string, unknown>()});

  constructor() {
    this.view.signalReady();
  }

  protected onOpenDetails(): void {
    void this.dialogService.open({component: 'dialog'}, {params: new Map().set('id', this.params().get('id'))});
  }

  protected async onOpenMessageBox(): Promise<void> {
    const action = await this.messageBox.open('%delete.message', {
      actions: {yes: '%yes.action', no: '%no.action'},
    })

    if(action === 'yes') {
      console.log('>>>> deleting data...');
    }
  }

  protected onOpenPopup(event: Event): void {
    void this.popupService.open({component: 'popup'}, {anchor: event.target as HTMLElement});
  }

}
