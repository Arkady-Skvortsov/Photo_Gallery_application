import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { InputComponent } from './input.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
// import { cold } from 'jasmine-marbles';
import {
  selectInput,
  selectQuestion,
  selectBool,
} from '../reducers/number.selectors';
import { MainComponent } from '../main/main.component';
import { RandomComponent } from '../random/random.component';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { icon } from '@fortawesome/fontawesome-svg-core';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  let fakeClear = jasmine.createSpy('clearInput');
  let fakeAnswer = jasmine.createSpy('GetAnswer');
  let fakeCall = jasmine.createSpy('ngOnInit').and.callThrough();

  let router: Router;
  let location: Location;
  let fakeStore: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'check', component: RandomComponent },
          { path: '', component: MainComponent },
        ]),
      ],
      declarations: [InputComponent],
      providers: [provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fakeStore = TestBed.inject(MockStore);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    router.initialNavigation();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Переменные InputComponent', () => {
    it('Сущестование переменных компонента', () => {
      [
        component.num,
        component.times,
        component.clear,
        component.check,
        component.secondString,
      ].forEach((item) => expect(item).toBeDefined());
    });

    it('Проверка типов переменных', () => {
      [
        component.num,
        component.times,
        component.clear,
        component.check,
        component.secondString,
      ].filter((items) => {
        switch (typeof items) {
          case 'boolean':
            expect(items).toBeInstanceOf(Boolean);
            break;
          case 'string':
            expect(items).toBeInstanceOf(String);
            break;
          case 'number':
            expect(items).toBeInstanceOf(Number); //For the iconDefenition type
            break;
          default:
            expect(items).toBeInstanceOf(Object);
            break;
        }
      });
    });
  });

  describe('Функции InputComponent', () => {
    it('Онулирование значений при нажатии на кнопку (Spy)', () => {
      // let button = fixture.debugElement.query(By.css('.clear-input'))
      //   .nativeElement;

      // button.click();

      let inpChange = selectInput.projector(0);
      let queChange = selectQuestion.projector(0);

      fakeClear.and.callThrough();

      expect(component.num).toEqual(0);
      // expect(component.inputNum$).toEqual(inpChange);
      // expect(component.questNum$).toEqual(0);
    });

    it('GetAnswer фукнция по отправлению переменной', () => {
      //const result = selectQuestion.projector(0); //Меняем значение геттера для теста .projector()

      let button = fixture.debugElement.nativeElement.querySelector(
        '.input-button'
      );

      button.click();

      expect(component.num).toEqual(0);

      //expect(component.check).toEqual(false);
    });

    it('ngOnInit', () => {
      fakeCall(); //Как ещё один пример spy

      expect(component.secondString).toBe('LifeSycle hook');
    });
  });

  describe('HTML DOM', () => {
    it('Наличие текста в span', () => {
      let span = fixture.debugElement.query(By.css('.input-txt')).nativeElement
        .textContent;

      expect(span).toBe('Отгадать');
    });
  });
});
