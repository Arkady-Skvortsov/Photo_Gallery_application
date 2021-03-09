import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { fader, transformer, stepper, slider } from './component.animations';
import { fader } from '../app/component.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader
  ],
})
export class AppComponent {
  title: string = 'number-title';

  public prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
