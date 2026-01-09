import {Component, inject} from '@angular/core';
import {WorkbenchDialogService, WorkbenchView} from '@scion/workbench-client';
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
  private params = toSignal(this.view.params$, {initialValue: new Map<string, unknown>()});

  constructor() {
    this.view.signalReady();
  }

  protected onOpenDetails(): void {
    void this.dialogService.open({component: 'dialog'}, {params: new Map().set('id', this.params().get('id'))});
  }
}
