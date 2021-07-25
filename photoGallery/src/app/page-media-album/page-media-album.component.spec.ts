import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMediaAlbumComponent } from './page-media-album.component';

describe('PageMediaAlbumComponent', () => {
  let component: PageMediaAlbumComponent;
  let fixture: ComponentFixture<PageMediaAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMediaAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMediaAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
