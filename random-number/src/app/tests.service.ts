import { Injectable } from '@angular/core';
import { Check } from './check.service';

@Injectable()
export class Test {
  public yksi: number = 1;

  constructor(public checkValue: Check) {}

  public Sum(a: number, b?: number): number | undefined {
    if (!b) return undefined;

    return (a += b);
  }

  public check(): boolean {
    return this.checkValue.check();
  }
}
