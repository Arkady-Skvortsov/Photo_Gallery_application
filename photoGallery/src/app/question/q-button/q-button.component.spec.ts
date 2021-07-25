import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QButtonComponent } from './q-button.component';

describe('QButtonComponent', () => {
  let component: QButtonComponent;
  let fixture: ComponentFixture<QButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
