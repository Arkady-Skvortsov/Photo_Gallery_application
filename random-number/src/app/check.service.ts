import { Injectable } from '@angular/core';

@Injectable()
export class Check {
  public check(): boolean {
    return true ? false : true;
  }
}
