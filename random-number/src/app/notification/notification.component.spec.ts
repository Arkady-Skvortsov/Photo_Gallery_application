import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationComponent } from './notification.component';
import { QuestionState } from '../reducers/number.reducer';
import { cold } from 'jasmine-marbles';
import {
  selectBool,
  selectInput,
  selectQuestion,
  selectText,
} from '../reducers/number.selectors';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { faHockeyPuck } from '@fortawesome/free-solid-svg-icons';
import { MemoizedSelector, Store, select } from '@ngrx/store';
import { Show } from '../reducers/number.actions';

describe('Notification', () => {
  let notification: NotificationComponent;
  let instanceNotification: ComponentFixture<NotificationComponent>;

  let mockStore: MockStore<QuestionState>;
  let text$: MemoizedSelector<QuestionState, string>;
  // let show$: MemoizedSelector<QuestionState, boolean>;
  let select = jasmine.createSpy('Select');

  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [NotificationComponent],
      providers: [provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    mockStore = TestBed.inject(MockStore);
    store = TestBed.inject(Store);

    text$ = mockStore.overrideSelector(selectText, 'Hello world');
  });

  beforeEach(() => {
    instanceNotification = TestBed.createComponent(NotificationComponent);
    notification = instanceNotification.componentInstance;

    instanceNotification.detectChanges();
  });

  it('Create Component', () => {
    expect(notification).toBeTruthy();
  });

  it('test variable', () => {
    expect(notification.title).toBe('Title');
    expect(notification.title).toBeInstanceOf(String);
  });

  it('should testing ngRx store and variable from there + some result of that', () => {
    //let exp = cold('a, b', { a: true }, { b: 'Привет' });

    // spyOn(store, 'dispatch').and.callThrough;

    // select.and.callThrough();

    // expect(store.dispatch).toHaveBeenCalled();
    // expect(store.dispatch).toHaveBeenCalledWith(
    //   new Show({ show: true, text: 'Привет' })
    // );

    expect(select.and.callThrough()).toBeTruthy();

    text$.setResult('Нет текста');
  });
});
