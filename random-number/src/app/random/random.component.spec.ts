import * as Actions from '../reducers/number.actions';
import * as Selectors from '../reducers/number.selectors';
import * as Reducers from '../reducers/number.reducer';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomComponent } from './random.component';
import { MainComponent } from '../main/main.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { QuestionState } from '../reducers/number.reducer';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('RandomComponent', () => {
  let component: RandomComponent;
  let fixture: ComponentFixture<RandomComponent>;

  //let store$: MockStore<QuestionState>;
  let router: Router;
  let location: Location;
  const initialState: any = Reducers;

  let navigate = jasmine.createSpy('Navigate');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: MainComponent },
          { path: 'check', component: RandomComponent },
        ]),
        NoopAnimationsModule,
      ],
      declarations: [RandomComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    //store$ = TestBed.inject(MockStore);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('Должен быть определен', () => {
    expect(component).toBeTruthy();
  });

  describe('Тест переменных RandomComponent', () => {
    it('Тест на существование переменных', () => {
      [
        component.angle,
        component.animCheck,
        component.numCheck,
        component.otgadannoe$,
        component.otgadannoe$,
      ].map((item) => expect(item).toBeDefined());
    });

    it('Тест на типы переменных', () => {
      [component.angle, component.animCheck, component.numCheck].filter(
        (items) => {
          switch (typeof items) {
            case 'number':
              expect(items).toBeInstanceOf(Number);
              break;
            case 'object':
              expect(items).toBeInstanceOf(Object);
              break;
            default:
              expect(items).toBeInstanceOf(Boolean);
              break;
          }
        }
      );
    });
  });

  describe('Тест функций RandomComponent', () => {
    it('Тест функции Navigate() и перенаправление на другую страницу', () => {
      // let navigate = fixture.debugElement(By.css('.previous-page'))

      navigate.and.callThrough;

      // spyOn(router, 'navigate').and.callThrough();
      // expect(router.navigate).toHaveBeenCalledWith(['']);
    });

    it('Тест экшена из ngRx', () => {
      const action = new Actions.Clear();
      const state = Reducers.countReducer(initialState, action);

      //expect(state.inputNumber).toBe(0);
      expect(state.question).toBeInstanceOf(Number);
    });

    it('Тест функции Increment()', () => {
      let increment = component.Increment(5);

      expect(increment).toEqual(10);
    });

    it('Тест функции Animation()', () => {
      let anim = jasmine.createSpy('Animation').and.callThrough();

      anim();

      expect(component.animCheck).toBe(false);
    });
  });
});
