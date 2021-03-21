import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Test } from './tests.service';
import { Check } from './check.service';

describe('Test Service Service', () => {
  let test: Test;

  let fakeCheck = jasmine.createSpy('check').and.callThrough();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [Test, { provide: Check }],
      imports: [],
      schemas: [NO_ERRORS_SCHEMA],
    });

    test = TestBed.inject(Test);
  });

  it('Сущестование класса Test', () => {
    expect(test).toBeTruthy();
  });

  it('Тест Check функции со Spy()', () => {
    let result = test.check();

    fakeCheck;

    expect(result).toBe(false);
  });

  it('Тест на переменную yksi', () => {
    expect(test.yksi).toEqual(1);

    expect(test.yksi).toBeInstanceOf(Number);
  });

  it('Тест на переменную Sum', () => {
    let fn = test.Sum(2, 16);

    expect(fn).not.toEqual(19);
  });
});
