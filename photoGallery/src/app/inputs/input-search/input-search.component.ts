import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as photoAction from '../../../store/photo.actions';
import * as Interface from '../../../models/interfaces';

@Component({
  selector: 'app-input-search',
  template: `
    <input
      class="input"
      type="text"
      [(ngModel)]="search"
      (keypress)="search_output()"
      placeholder="Ищите свои картинки по  названию/тегам"
    />
  `,
  styleUrls: ['./input-search.component.scss'],
})
export class InputSearchComponent implements OnInit {
  constructor(private store: Store<Interface.AppState>) {}

  //method from SearchButtonComponent class
  public search: string = '';

  public search_output(): void {
    console.log(this.search);
  }

  ngOnInit(): void {}
}
