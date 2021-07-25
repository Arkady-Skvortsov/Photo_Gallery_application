import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as Interface from '../../../models/interfaces';
import * as photoAction from '../../../store/photo.actions';

@Component({
  selector: 'app-border-set',
  template: `
    <div class="creational-border">
      <input
        class="border input"
        disabled
        placeholder="Укажите рамку для вашего плейлиста"
      />

      <app-clear-button
        [type]="'add'"
        (addPropertyFunc)="OpenBorder()"
      ></app-clear-button>
      <!-- Will be opening a new modal window -->
    </div>
  `,
  styleUrls: ['./border-set.component.scss'],
})
export class BorderSetComponent implements OnInit {
  constructor(private store: Store<Interface.AppState>) {}

  public OpenBorder(): void {
    this.store.dispatch(new photoAction.showChangeBorderAction(true));
  }

  ngOnInit(): void {}
}
