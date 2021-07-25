import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseBlockComponent } from './choose-block.component';

describe('ChooseBlockComponent', () => {
  let component: ChooseBlockComponent;
  let fixture: ComponentFixture<ChooseBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
