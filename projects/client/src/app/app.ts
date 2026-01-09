import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SciViewportComponent} from '@scion/components/viewport';
import {CdkTrapFocus} from '@angular/cdk/a11y';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SciViewportComponent, CdkTrapFocus],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
}
