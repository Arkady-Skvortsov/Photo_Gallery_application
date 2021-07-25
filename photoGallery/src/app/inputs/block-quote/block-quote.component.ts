import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-quote',
  template: `<div class="creational-decoration">
    <textarea
      placeholder="Введите описание вашей"
      maxLength="250"
      [(ngModel)]="toggled"
      class="add-decoration"
    >
    </textarea>

    <button type="button" class="decoration-length">
      <span>0/250</span>
      <!-- toggled.length  -->
    </button>
  </div>`,
  styleUrls: ['./block-quote.component.scss'],
})
export class BlockQuoteComponent implements OnInit {
  constructor() {}

  public toggled: string;

  ngOnInit(): void {}
}
