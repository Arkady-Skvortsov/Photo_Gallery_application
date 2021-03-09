import { Test } from './tests.service';
import { Check } from './check.service';
import { TestBed } from '@angular/core/testing';

describe('Testing Test class', () => {
  let service: Test;
  let yks: number;

  const fakeServiceCheck = { check: () => true };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Test, { provide: Check, useValue: fakeServiceCheck }],
    });

    service = TestBed.inject(Test);
    yks = service.yksi;

    //Просто новый синтаксис === service = new Test(fakeServiceCheck as Check);
  });

  it('Тестирование класса на существование', () => {
    expect(service).not.toBeFalsy();
  });

  it('Суммирование чисел', () => {
    let sum = service.Sum(2, 6);

    expect(sum).not.toEqual(9);
  });

  it('Тест на undefined второго аргумента', () => {
    let sum2 = service.Sum(2); //У нас же есть ? что говорит о том, что аргумент - опциональный

    expect(sum2).toBeUndefined();
  });

  it('Тест класса Check', () => {
    let check = service.checkValue.check();

    expect(check).toBe(true);
  });

  it('Тест на наличие переменной', () => {
    let yks = service.yksi;

    expect(yks).toBeDefined();
    expect(yks).toBeFalsy();
  });
});
