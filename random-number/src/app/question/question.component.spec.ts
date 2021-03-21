import * as Reducers from '../reducers/number.reducer';
import * as Actions from '../reducers/number.actions';
import * as Selectors from '../reducers/number.selectors';
import { ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionComponent } from './question.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionState } from '../reducers/number.reducer';
import { By } from '@angular/platform-browser';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  let store: MockStore;
  let questState: QuestionState;
  //let iconDefinition: IconDefinition;

  //NgRX STORE
  let reducers: any = Reducers;
  let actions: any = Actions;
  let selectors: any = Selectors;

  let ShadowShow = jasmine
    .createSpy('new actions.Show()')
    .and.returnValue(() => {
      selectors.selectBool, selectors.selectText;
    });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [QuestionComponent],
      providers: [
        provideMockStore({
          initialState: { Qstate: questState },
        }),
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Должен быть создан', () => {
    expect(component).toBeTruthy();
  });

  describe('Переменные QuestionComponent', () => {
    it('Существование переменных', () => {
      expect([
        component.question,
        component.close,
        component.min,
        component.max,
        component.minInput,
        component.maxInput,
      ]).toBeTruthy();
    });

    it('Определение типов переменных', () => {
      const numbers = [component.min, component.max].map((i) =>
        expect(i).toBeInstanceOf(Number)
      );

      const elemRefs = [component.minInput, component.maxInput].map((i) => {
        expect(i).toBeInstanceOf(ElementRef);
      });

      const Icons = [component.close, component.question].forEach((i) => {
        expect(i).not.toBeInstanceOf(ElementRef);
      });
    });
  });

  describe('Функции QuestionComponent', () => {
    it('Clear function from component', () => {
      expect(component.Clear).toBeTruthy();

      expect(component.min).toBe(0);
      expect(component.max).toBe(0);
    });

    it('Show() action from ngRx store', () => {
      const checkObj = {
        show: true,
        text: 'Вы очистили поля',
      };

      // const state = Reducers.countReducer(reducers, show);
      //Продолжу позже
      ShadowShow();

      expect(new actions.Show({}).payload.show).toEqual(checkObj.show);
      expect(new actions.Show({}).payload.text).toEqual(checkObj.text);
    });
  });

  describe('Тесты HTML разметки', () => {
    it('Проверка текста', () => {
      let minBlock = fixture.debugElement.nativeElement.querySelector(
        '.min-block'
      );
      let maxBlock = fixture.debugElement.nativeElement.querySelector(
        '.max-block'
      );

      expect(minBlock.children[0].textContent).toBe('min');
      expect(maxBlock.children[0].textContent).toBe('max');
    });

    it('Проверка type && value у input"ов ', () => {
      let inputMin = fixture.debugElement.nativeElement.querySelector('.min');
      let inputMax = fixture.debugElement.nativeElement.querySelector('.max');

      expect(inputMin.type && inputMax.type).toBeInstanceOf(String); //А это странно

      expect(inputMax.value && inputMax.value).toEqual('');
    });
  });
});
