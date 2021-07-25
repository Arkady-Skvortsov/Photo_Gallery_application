import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiSetComponent } from './emoji-set.component';

describe('EmojiSetComponent', () => {
  let component: EmojiSetComponent;
  let fixture: ComponentFixture<EmojiSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmojiSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
