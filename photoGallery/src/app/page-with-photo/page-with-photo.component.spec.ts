import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWithPhotoComponent } from './page-with-photo.component';

describe('PageWithPhotoComponent', () => {
  let component: PageWithPhotoComponent;
  let fixture: ComponentFixture<PageWithPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWithPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWithPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
