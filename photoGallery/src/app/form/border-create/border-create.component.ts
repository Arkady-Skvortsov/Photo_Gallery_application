import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Renderer2,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as Interface from '../../../models/interfaces';
import * as photoAction from '../../../store/photo.actions';

@Component({
  selector: 'app-border-create',
  template: `
    <div class="border-change-main" (click)="hideBorder($event)">
      <div class="border-change-main__change-form">
        <div class="budged-icon">
          <img src="../../assets/svg/photo.svg" class="budged-icon__budged" />
        </div>

        <div class="border-form">
          <form name="creational">
            <div class="border-form__creational-border">
              <div class="add-border">
                <input
                  type="file"
                  class="add-border__plus"
                  (change)="chooseBorder($event)"
                  alt=""
                />
              </div>

              <div class="upload-border" #upload_image>
                <div class="same-image">
                  <img
                    [src]="image"
                    #single_img
                    class="same-image__img img"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="border-form__options-buttons">
              <div class="settings__weight settings">
                <div class="settings-name name">
                  <span>Размер рамки:</span>
                </div>
                <div class="settings-value value">
                  <span>{{ border_height }}%</span>
                </div>
                <div class="settings-progress progress">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    [(ngModel)]="border_height"
                    name="border_height"
                    class="progressive size_range"
                    (change)="border_filter('.size_range')"
                  />
                </div>
              </div>
              <div class="settings__intensive settings">
                <div class="settings-name name">
                  <span>Интенсивность рамки:</span>
                </div>
                <div class="settings-value value">
                  <span>{{ border_intensive }}%</span>
                </div>
                <div class="settings-progress progress">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    [(ngModel)]="border_intensive"
                    name="border_intensive"
                    class="progressive intensive_range"
                    (change)="border_filter('.intensive_range')"
                  />
                </div>
              </div>
            </div>

            <div class="border-form__functional-buttons">
              <div class="add-border" (click)="add_border()">
                <div class="text">Добавить</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./border-create.component.scss'],
})
export class BorderCreateComponent implements OnInit, AfterViewInit {
  constructor(private store: Store<any>, private renderer: Renderer2) {}

  @ViewChild('single_img') single_img: ElementRef;
  @ViewChild('upload_image') upload_image: ElementRef;

  public image_state$: Observable<ArrayBuffer> = this.store.select('setImage');
  public image_rotate$: Observable<number> = this.store.select('rotate');
  public image: any | ArrayBuffer;
  public border_image: null | any = null;

  public border_height: number = 0;
  public border_intensive: number = 0;

  public hideBorder(event): void {
    if (event.target.className === 'border-change-main')
      this.store.dispatch(new photoAction.showChangeBorderAction(false));

    return;
  }

  public add_border(): void {
    this.store.dispatch(
      new photoAction.addMediaBorderAction({
        image: this.image,
        height: this.border_height,
        intensive: this.border_intensive,
      })
    );

    this.store.dispatch(new photoAction.showChangeBorderAction(false));
  }

  public border_filter(elem): void {
    let el = document.querySelector(elem);
    let val = el.value / 4;

    switch (elem) {
      case '.size_range':
        return (
          this.renderer.setStyle(
            this.upload_image.nativeElement,
            'border-image-width',
            `${val}`
          ),
          this.renderer.setStyle(
            this.upload_image.nativeElement,
            'border-image-outset',
            `${val}`
          )
        );
      case '.intensive_range':
        return this.renderer.setStyle(
          this.upload_image.nativeElement,
          'border-image-slice',
          `${this.border_intensive}`
        );
    }
  }

  public chooseBorder(e): void {
    const border_reader: FileReader = new FileReader();

    border_reader.onload = () => {
      this.renderer.setStyle(
        this.upload_image.nativeElement,
        'border-image-source',
        `url(${border_reader.result})`
      );
    };

    border_reader.readAsDataURL(e.target.files[0]);
  }

  ngOnInit(): void {
    this.image_state$.subscribe((s) => (this.image = s));
  }

  ngAfterViewInit() {
    this.image_rotate$.subscribe((image_rotate) => {
      this.renderer.setStyle(
        this.single_img.nativeElement,
        'transform',
        `rotate(${image_rotate}deg)`
      );
    });
  }
}
