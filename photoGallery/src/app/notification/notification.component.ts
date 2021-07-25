import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `
    <div class="main-notification-block">
      <div class="text-notification-block">
        <span class="text-notification-block__text"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          ipsa, quisquam corrupti nihil asperiores id voluptatum voluptates cum
          sapiente dicta officiis cupiditate vitae debitis. Ullam distinctio
          sint vero qui praesentium?</span
        >
      </div>

      <div class="img-notification-block">
        <img src="" class="img-notification-block__img" alt="" />
      </div>
    </div>
  `,
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
