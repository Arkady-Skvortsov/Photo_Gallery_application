import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tag-set',
  template: ` <div class="creational-tag">
    <input
      placeholder="Укажите тег для вашей картинки (#)"
      class="creational-tag__add-tag input change-tag"
      [(ngModel)]="inputVal"
    />

    <app-clear-button [type]="'close'" (clearInputValue)="clearInputValue2()">
    </app-clear-button>
  </div>`,
  styleUrls: ['./tag-set.component.scss'],
})
export class TagSetComponent implements OnInit {
  constructor() {}

  public inputVal: string;

  public clearInputValue2() {
    this.inputVal = '';
  }

  ngOnInit() {}
}
