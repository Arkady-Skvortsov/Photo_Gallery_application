import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameChooseComponent } from './name-choose.component';

describe('NameChooseComponent', () => {
  let component: NameChooseComponent;
  let fixture: ComponentFixture<NameChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameChooseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
