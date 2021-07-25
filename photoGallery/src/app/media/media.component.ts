import { Component, OnInit } from '@angular/core';
import { media } from '../../interfaces';

@Component({
  selector: 'app-media',
  template: `
    <div
      class="w-64 h-64 border-1 border-black"
      style="background: url('https://i.pinimg.com/originals/06/3a/ef/063aef8aed6644f49a95a516544546b7.jpg'); background-size: cover; background-position: center"
      (click)="OpenMedia()"
    >
      <div
        class="w-2 h-2 text-center z-10 border-2xl border-white border-1 bg-black"
        style="background: url('../../assets/svg/gallery.svg'); background-size: cover; background-position: center"
      ></div>

      <div class="hidden length">
        <span>0/25</span>
      </div>

      <div class="font-Kufi align-bottom text-white text-center">
        Элли с Диной
      </div>
    </div>
  `,
  styles: [``],
})
export class MediaComponent implements OnInit {
  constructor() {}

  public hello: string = 'Hello';

  public OpenMedia(): void {
    console.log('OpenMedia now!');
  }

  ngOnInit(): void {}
}
