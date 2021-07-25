import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-clear-button',
  template: `
    <div [ngSwitch]="type">
      <button
        type="button"
        class="clear-button"
        *ngSwitchCase="'close'"
        (click)="clearInput()"
      >
        <img src="../../assets/svg/close.svg" />
      </button>

      <button
        type="button"
        *ngSwitchCase="'add'"
        class="add-button"
        (click)="addProp()"
      >
        <img src="../../assets/svg/plus-square.svg" />
      </button>
    </div>
  `,
  styleUrls: ['./clear-button.component.scss'],
})
export class ClearButtonComponent implements OnInit {
  constructor() {}

  @Output() clearInputValue = new EventEmitter<string>();
  @Output() addPropertyFunc = new EventEmitter<string>();

  @Input() type: string;

  public clearInput(): void {
    this.clearInputValue.emit();
  }

  public addProp(): void {
    this.addPropertyFunc.emit();
  }

  ngOnInit(): void {}
}
