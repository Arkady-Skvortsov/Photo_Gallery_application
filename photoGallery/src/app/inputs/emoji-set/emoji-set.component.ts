import { Component, OnInit } from '@angular/core';
import * as Interface from '../../../models/interfaces';

@Component({
  selector: 'app-emoji-set',
  template: `
    <div class="creational-emojies">
      <div class="emojies-input">
        <div
          class="emojie-chips"
          *ngFor="let emojie of chips_emojie; let i = index"
        >
          <div class="emojie-delete-content">
            <div class="own-emojie">
              <img class="own-emojie__icon" [src]="emojie" />
            </div>
            <div class="delete-chips">
              <img
                class="delete-chips__icon"
                src="../../assets/svg/close.svg"
                (click)="delete_chips(i)"
              />
            </div>
          </div>
        </div>
        <div class="emojie-input">
          <input
            placeholder="Введите эмодзи для вашего фото"
            class="emojie-input__input"
            type="text"
            (keydown.enter)="create_chips()"
            ;
          />
          <!-- interface for placeholders -->
        </div>
      </div>
      <div
        class="emojies-container-block"
        [ngStyle]="{ display: emojie_open ? 'block' : 'none' }"
      >
        <div class="emojies-container-block__emojies-container">
          <div
            class="emojies-block"
            *ngFor="let emojie of emojies_array"
            (click)="choose_emojie(emojie)"
          >
            <img [src]="emojie.path" class="emojies-block__emojies-icon" />
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./emoji-set.component.scss'],
})
export class EmojiSetComponent implements OnInit {
  constructor() {}

  public emojie_open: boolean = false;

  public chips_emojie: Array<Object> = [{}];

  public emojie_url: string;

  public emojie_end_url: string;

  public emojies_array: Array<object> = [
    {
      name: 'anatomical_heart',
      path: '../../../assets/svg/emojies/anatomical_heart.svg',
    },
    {
      name: 'call_me_hand',
      path: '../../../assets/svg/emojies/call_me_hand.svg',
    },
    {
      name: 'clapping_hands',
      path: '../../../assets/svg/emojies/clapping_hands.svg',
    },
    {
      name: 'eyes',
      path: '../../../assets/svg/emojies/eyes.svg',
    },
    {
      name: 'handshake',
      path: '../../../assets/svg/emojies/handshake.svg',
    },
    {
      name: 'love_you_gesture',
      path: '../../../assets/svg/emojies/love_you_gesture.svg',
    },
    {
      name: 'ok_hand',
      path: '../../../assets/svg/emojies/ok_hand.svg',
    },
    {
      name: 'palms_up_together',
      path: '../../../assets/svg/emojies/palms_up_together.svg',
    },
    {
      name: 'victory_hand',
      path: '../../../assets/svg/emojies/victory_hand.svg',
    },
    {
      name: 'vulcan_salute',
      path: '../../../assets/svg/emojies/vulcan_salute.svg',
    },
    {
      name: 'writing_hand',
      path: '../../../assets/svg/emojies/writing_hand.svg',
    },
  ];

  public visible_emojie(bool: boolean): boolean {
    return (this.emojie_open = bool);
  }

  public choose_emojie(emojie): void {
    this.emojie_url = emojie.path;
  }

  public create_chips(): void {
    this.emojie_end_url = this.emojie_url;

    this.chips_emojie.push(this.emojie_end_url);

    this.visible_emojie(false);
  }

  public delete_chips(index: number): any {
    // this.chips_emojie.forEach((arr, index) => {
    //   if (index === index) {
    //     this.creational_types = 'create';
    //     this.chips_emojie.splice(index, 1);
    //   }
    // });
    // return this.chips_emojie.length === 1
    //   ? (this.chips_emojie.splice(index, 1), (this.creational_types = 'create'))
    //   : (this.creational_types = 'create');
  }

  // public delete_creating_chips(): void {
  //   this.visible_emojie(false);

  //   this.creational_types = 'create';
  // }

  ngOnInit(): void {}
}
