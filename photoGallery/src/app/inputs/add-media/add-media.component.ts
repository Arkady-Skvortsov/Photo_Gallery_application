import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as photoAction from '../../../store/photo.actions';
import * as Interface from '../../../models/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-media',
  template: `
    <button class="add-media" (click)="OpenChange()">
      <img src="../../assets/svg/plus.svg" class="add-media__icon" />
    </button>
  `,
  styleUrls: ['./add-media.component.scss'],
})
export class AddMediaComponent implements OnInit {
  constructor(private store: Store<Interface.AppState>) {}

  public showChoose$: Observable<Interface.b> = this.store.select('showChoose');

  public OpenChange(): void {
    this.store.dispatch(new photoAction.showChooseAction(true));
  }

  ngOnInit(): void {}
}
