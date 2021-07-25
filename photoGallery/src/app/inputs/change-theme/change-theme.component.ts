import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-theme',
  template: `
    <button class="theme-button">
      <img src="../../assets/svg/moon.svg" class="theme-button__moon" />
    </button>
  `,
  styleUrls: ['./change-theme.component.scss'],
})
export class ChangeThemeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
