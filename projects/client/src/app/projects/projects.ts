import {Component, effect, inject} from '@angular/core';
import {WorkbenchPart, WorkbenchRouter} from '@scion/workbench-client';
import {MessageClient} from '@scion/microfrontend-platform';
import {toSignal} from '@angular/core/rxjs-interop';
import {map} from 'rxjs';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export default class Projects {

  private router = inject(WorkbenchRouter);
  private messageClient = inject(MessageClient);
  private selection = toSignal(this.messageClient.observe$<{projectId: string | null}>('client-app/project/selection').pipe(map(message => message.body!)));

  constructor() {
    inject(WorkbenchPart).signalReady()

    effect(() => {
      const projectId = this.selection()?.projectId;
      console.log('>>>> Selected Project', projectId);
    });
  }

  protected onOpenProject(projectId: string): void {
    void this.router.navigate({component: 'project'}, {params: new Map().set("id", projectId)});
  }

}
