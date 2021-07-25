import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Interface from '../../models/interfaces';
import { Observable } from 'rxjs';
import * as photoAction from '../../store/photo.actions';

@Component({
  selector: 'app-form',
  template: `
    <div class="creational-main-form" (click)="closeForm($event)">
      <div class="creational-main-form__creational-form">
        <div class="budged-icon">
          <img [src]="form_chooses.image" class="budged-icon__budged" />
        </div>

        <div class="create-form">
          <form name="creational">
            <div>
              <app-choose-photo></app-choose-photo>
            </div>

            <div>
              <app-name-choose></app-name-choose>
            </div>

            <div>
              <app-block-quote></app-block-quote>
            </div>

            <div>
              <app-tag-set></app-tag-set>
            </div>

            <div>
              <app-emoji-set></app-emoji-set>
            </div>

            <div *ngIf="form_chooses.name === 'Галлерея'">
              <app-length-set></app-length-set>
            </div>

            <div>
              <app-border-set></app-border-set>
            </div>

            <div class="create-form__functional-buttons">
              <div class="add-media"><div class="text">Добавить</div></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private store: Store<any>) {}

  public form_type$: Observable<object> = this.store.select('changeType');

  public form_chooses: any;

  public closeForm(event): void {
    if (event.target.className === 'creational-main-form')
      this.store.dispatch(new photoAction.showFormAction(false));

    return;
  }

  ngOnInit(): void {
    this.form_type$.subscribe((s) => ((this.form_chooses = s), console.log(s)));
  }
}
