import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderSetComponent } from './border-set.component';

describe('BorderSetComponent', () => {
  let component: BorderSetComponent;
  let fixture: ComponentFixture<BorderSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
