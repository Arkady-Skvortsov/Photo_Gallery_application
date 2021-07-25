import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as Interface from '../../../models/interfaces';

@Component({
  selector: 'app-choose-block',
  template: `<div class="choose-blocks" (click)="chooseTypeOption()">
    <div class="icon-block">
      <img [src]="data.image" class="icon" />
    </div>

    <div class="block-name">
      <span>{{ data.name }}</span>
    </div>
  </div>`,
  styleUrls: ['./choose-block.component.scss'],
})
export class ChooseBlockComponent implements OnInit {
  constructor() {}

  @Input() data: any;

  @Output() chooseType = new EventEmitter<Interface.form>();

  public chooseTypeOption(): void {
    this.chooseType.emit(this.data);
  }

  ngOnInit(): void {}
}
