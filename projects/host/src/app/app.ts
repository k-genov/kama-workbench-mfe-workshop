import {Component, inject} from '@angular/core';
import {WorkbenchComponent, WorkbenchService} from '@scion/workbench';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [WorkbenchComponent, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  protected workbenchService = inject(WorkbenchService);

}
