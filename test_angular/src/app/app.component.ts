import { Component, ApplicationRef } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private updates: SwUpdate, private appRef: ApplicationRef) {
    this.updates.available.subscribe((e) => {
      if (confirm('Хотите обновить приложение?')) {
        updates.activateUpdate().then(() => {
          alert('Приложение было обновлено!');
        });
      } else {
        alert('Ну ничего, можно будет установить потом)');

        return;
      }
    });

    //Когда приложение было обновлено до новой версии)
    this.updates.activated.subscribe((e) =>
      console.log(
        `предыдущая версия - ${JSON.stringify(e.previous)}`,
        `текщая версия - ${JSON.stringify(e.current)}`
      )
    );

    this.appRef.isStable.subscribe((isStable) => {
      if (isStable) {
        setInterval(() => {
          this.updates.checkForUpdate().then(() => {
            console.log('Checked for Updated!!');
          });
        }, 300000);
      }
    });
  }
}
