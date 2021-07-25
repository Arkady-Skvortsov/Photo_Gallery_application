import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-button',
  template: `
    <button
      class="flex search-button justify-center items-center h-18 w-18 border-solid border-black cursor-pointer"
      (click)="search_output()"
    >
      <img src="../../assets/svg/search.svg" class="search-button__icon" />
    </button>
  `,
  styleUrls: ['./search-button.component.scss'],
})
export class SearchButtonComponent implements OnInit {
  constructor() {}

  @Output() search_output_children = new EventEmitter<string>();

  public search_output(): void {
    this.search_output_children.emit();
  }

  ngOnInit(): void {}
}
