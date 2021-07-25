import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderCreateComponent } from './border-create.component';

describe('BorderCreateComponent', () => {
  let component: BorderCreateComponent;
  let fixture: ComponentFixture<BorderCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
