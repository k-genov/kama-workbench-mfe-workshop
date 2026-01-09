import {Component, effect, inject, untracked} from '@angular/core';
import {WorkbenchDialogService, WorkbenchMessageBoxService, WorkbenchNotificationService, WorkbenchPopupService, WorkbenchView} from '@scion/workbench-client';
import {toSignal} from '@angular/core/rxjs-interop';
import {MessageClient} from '@scion/microfrontend-platform';

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
  private notificationService = inject(WorkbenchNotificationService);
  private messageClient = inject(MessageClient);
  private focused = toSignal(this.view.focused$);
  private params = toSignal(this.view.params$, {initialValue: new Map<string, unknown>()});

  constructor() {
    this.view.signalReady()

    effect(() => {
      // track view changes
      this.focused();
      const projectId = this.params().get('id') as string;

      untracked(() => {
        void this.propagateSelection(projectId);
      });
    })

    this.view.canClose(() => this.propagateSelection(null).then(() => true))

  }

  private async propagateSelection(projectId: string | null): Promise<void> {
    if (this.focused()) {
      return this.messageClient.publish('client-app/project/selection', {projectId}, {retain: true});
    }
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

  protected onOpenNotification(): void {
    void this.notificationService.show('%notification.message');
  }

}
