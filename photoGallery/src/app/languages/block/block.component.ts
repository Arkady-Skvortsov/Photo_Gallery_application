import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-block',
  template: `
    <div class="lang-block">
      <div class="lang-name" (click)="chooseLanguage(3)">
        <span #lang>{{ gKeys }}</span>
      </div>

      <div class="lang-short">
        <span>{{ gValues }}</span>
      </div>
    </div>
  `,
  styleUrls: ['./block.component.scss'],
})
export class BlockComponent implements OnInit {
  @Input() items: Array<Object>;
  @Input() index: number;

  @Output() langEvent = new EventEmitter<number>();

  constructor() {}

  public get gKeys(): Array<Object> {
    return Object.keys(this.items);
  }

  public get gValues(): Array<Object> {
    return Object.values(this.items);
  }

  public chooseLanguage(lang: number) {
    this.langEvent.emit(lang);
  }

  ngOnInit(): void {}
}
