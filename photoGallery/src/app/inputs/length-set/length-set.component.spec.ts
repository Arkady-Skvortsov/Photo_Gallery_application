import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthSetComponent } from './length-set.component';

describe('LengthSetComponent', () => {
  let component: LengthSetComponent;
  let fixture: ComponentFixture<LengthSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LengthSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
