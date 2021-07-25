import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Renderer2,
} from '@angular/core';
import * as photoAction from '../../../store/photo.actions';
import * as Interface from '../../../models/interfaces';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-choose-photo',
  template: `<div
    class="creational-image"
    [ngClass]="{ 'go-down-main-block': show }"
  >
    <div class="set-image-basics" [ngClass]="{ 'go-down-set-block': show }">
      <div
        class="rotate-image"
        (click)="rotate_image()"
        [ngStyle]="{ border: show ? '1px solid black' : '1px solid white' }"
      >
        <img src="../../../assets/svg/rotate.svg" class="rotate-image__image" />
      </div>
      <div class="add-image-parent">
        <input
          type="file"
          class="add-image"
          [ngClass]="{ fixed: show === true }"
          (change)="choose_image($event)"
        />
      </div>
      <div
        class="image-viewer"
        [ngClass]="{ fixed: show === false }"
        #image_viewer
      >
        <img
          class="image"
          #image
          [src]="photoURL"
          [ngStyle]="{ transform: 'rotate(' + rotate + 'deg)' }"
          alt=""
        />
      </div>
      <div
        class="down-image"
        (click)="show_image()"
        [ngStyle]="{ border: show ? '1px solid white' : '1px solid black' }"
      >
        <img
          src="../../../assets/svg/arrow-down.svg"
          class="down-image__down"
        />
      </div>
    </div>
    <div class="photo-filters" *ngIf="show">
      <div class="photo-size settings">
        <div class="size-photo name">
          <span>Zoom фото:</span>
        </div>
        <div class="size-value value">
          <span>{{ zoom_range }}%</span>
        </div>
        <div class="size-progress progress">
          <input
            type="range"
            min="1"
            max="100"
            name="size"
            [(ngModel)]="zoom_range"
            (change)="size_filter('.zoom_range')"
            class="progressive zoom_range"
          />
        </div>
      </div>
      <div class="photo-size settings">
        <div class="size-photo name">
          <span>Радиус фото:</span>
        </div>
        <div class="size-value value">
          <span>{{ radius_range }}%</span>
        </div>
        <div class="size-progress progress">
          <input
            type="range"
            min="0"
            max="100"
            name="size"
            [(ngModel)]="radius_range"
            (change)="size_filter('.radius_range')"
            class="progressive radius_range"
          />
        </div>
      </div>
      <div class="photo-size settings">
        <div class="size-photo name">
          <span>Зернистость фото:</span>
        </div>
        <div
          class="buttons-settings"
          *ngFor="let buttons of buttons_array; let i = index"
        >
          <button
            class="buttons-settings__blend-mode"
            (click)="choose_blend_mode(i)"
          >
            {{ buttons.txt }}
          </button>
        </div>
      </div>
    </div>
  </div>`,
  styleUrls: ['./choose-photo.component.scss'],
})
export class ChoosePhotoComponent implements OnInit {
  constructor(
    private store: Store<Interface.mediaItem>,
    private renderer: Renderer2
  ) {}

  @ViewChild('image_viewer') image_viewer: ElementRef;
  @ViewChild('image') image: ElementRef;

  public zoom_range: number | any = 0;
  public radius_range: number | any = 0;
  public blend_mode_choose: string | any = '';
  public rotate: number | any = 0;
  public show: boolean = false;
  public imageShows: boolean = false;
  public photoURL: any | null = null;
  public buttons_array: Array<object> = [
    { txt: 'Нормально' },
    { txt: 'Контраст' },
    { txt: 'Затемнение' },
    { txt: 'Осветление' },
    { txt: 'Сравнение' },
    { txt: 'Компонент' },
  ];

  public rotate_image(): void {
    this.rotate = this.rotate += 90;

    this.store.dispatch(new photoAction.changeRotateAction(this.rotate));
  }

  public choose_image(e): void {
    const fileReader: FileReader = new FileReader();

    fileReader.onload = () => {
      this.photoURL = fileReader.result;

      this.store.dispatch(new photoAction.setImageForBorder(this.photoURL));
    };

    this.show = true;

    fileReader.readAsDataURL(e.target.files[0]);
  }

  public choose_blend_mode(i: number): void {
    switch (i) {
      case 0:
        this.renderer.setStyle(
          this.image.nativeElement,
          'mix-blend-mode',
          'normal'
        );

        this.blend_mode_choose = 'normal';
        break;
      case 1:
        this.renderer.setStyle(
          this.image.nativeElement,
          'mix-blend-mode',
          'luminosity'
        );

        this.blend_mode_choose = 'screen';
        break;
      case 2:
        this.renderer.setStyle(
          this.image.nativeElement,
          'mix-blend-mode',
          'color-burn'
        );

        this.blend_mode_choose = 'color-burn';
        break;
      case 3:
        this.renderer.setStyle(
          this.image.nativeElement,
          'mix-blend-mode',
          'hard-light'
        );

        this.blend_mode_choose = 'lighten';
        break;
      case 4:
        this.renderer.setStyle(
          this.image.nativeElement,
          'mix-blend-mode',
          'difference'
        );

        this.blend_mode_choose = 'difference';
        break;
      case 5:
        this.renderer.setStyle(
          this.image.nativeElement,
          'mix-blend-mode',
          'saturation'
        );
        this.blend_mode_choose = 'saturation';
        break;
    }

    this.store.dispatch(
      new photoAction.setImageForBorder(this.blend_mode_choose)
    );
  }

  public size_filter(arg): void {
    let arg_elem = document.querySelector(arg)!;
    let arg_change_value = arg_elem.value;

    switch (arg) {
      case '.zoom_range':
        this.renderer.setStyle(
          this.image.nativeElement,
          'transform',
          `scale(${arg_change_value})`
        );

        this.store.dispatch(new photoAction.setImageForBorder(this.zoom_range));
        break;
      case '.radius_range':
        this.renderer.setStyle(
          this.image_viewer.nativeElement,
          'border-radius',
          `${arg_change_value}px`
        );

        this.store.dispatch(
          new photoAction.setImageForBorder(this.radius_range)
        );
        break;
    }
  }

  public show_image(): void {
    this.imageShows = !this.imageShows;
    this.show = !this.show;
  }

  ngOnInit(): void {}
}
