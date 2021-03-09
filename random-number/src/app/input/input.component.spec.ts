import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  let router = component.router;
  let store = component.store$;

  let inputNum = component.inputNum$;
  let questNum = component.questNum$;
  let showHide = component.showHide$;

  let times = component.times;
  let clear = component.clear;
  let num = component.num;
  let check = component.check;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Router has a trushy', () => {
    expect(router).toBeTruthy();
  });

  it('Constuctor var has a trushy', () => {
    expect(router).toBeTruthy();
    expect(store).toBeTruthy();
  });

  it('ngRX vars has a trushy', () => {
    expect([inputNum, questNum, showHide]).toBeTruthy();
  });

  it('Other vars has a trushy and has value', () => {
    expect([clear, check]).toBeInstanceOf(Boolean);
    expect(num).toBeInstanceOf(Number);

    expect([times, clear, num, check]).toBeTruthy();
  });

  xit('');
});
