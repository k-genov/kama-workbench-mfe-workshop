import {Component, inject} from '@angular/core';
import {WorkbenchPart, WorkbenchRouter} from '@scion/workbench-client';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export default class Projects {

  private router = inject(WorkbenchRouter);

  constructor() {
    inject(WorkbenchPart).signalReady();
  }

  protected onOpenProject(projectId: string): void {
    void this.router.navigate({component: 'project'}, {params: new Map().set("id", projectId)});
  }

}
