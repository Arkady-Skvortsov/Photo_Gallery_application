import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete',
  template: `
    <div class="delete-block" (click)="deleteEmit()">
      <img
        src="../../assets/svg/busket.svg"
        class="delete-block__icon"
        alt=""
      />
    </div>
  `,
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent implements OnInit {
  constructor() {}

  @Output() delete = new EventEmitter();

  public deleteEmit(): void {
    this.delete.emit();
  }

  ngOnInit(): void {}
}
