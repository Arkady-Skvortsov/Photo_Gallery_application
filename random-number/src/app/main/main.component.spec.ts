import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  getTestBed,
} from '@angular/core/testing';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { MainComponent } from './main.component';
import { RandomComponent } from '../random/random.component';
import { Data } from '../data.service';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  let Fakes = jasmine.createSpy('getData');

  let injector: TestBed;
  let service: Data;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: MainComponent },
          { path: 'check', component: RandomComponent },
        ]),
        HttpClientTestingModule,
      ],
      declarations: [MainComponent, { provides: Data }],
      providers: [],
    }).compileComponents();

    injector = getTestBed();
    httpMock = injector.inject(HttpTestingController);
    service = injector.inject(Data);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('Компонент должен быть создан', () => {
    expect(component).toBeTruthy();
  });

  describe('Тесты с backend', () => {
    xit('Данные были получены успешно <Post[]>', () => {
      let obj = [
        {
          completed: false,
          id: 1,
          title: 'delectus aut autem',
          userId: 1,
        },
      ];

      Fakes.and.callThrough();

      component.PleaseData().subscribe((i) => {
        expect(i).toEqual(obj);
      });
    });
  });
});
