import {
  TestBed,
  async,
  ComponentFixture
} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {UserService} from '../services';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TableComponent} from './components/table/table.component';
import {LoadingSpinnerComponent} from './components/loading-spinner/loading-spinner.component';
import {MockUserService} from '../testing/MockUserService.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TableComponent,
        LoadingSpinnerComponent
      ],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: UserService,
          useClass: MockUserService
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app)
      .toBeTruthy();
  });

  it(`should have as title 'Measurabl Challenge'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title)
      .toEqual('Measurabl Challenge');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent)
      .toContain('Measurabl Challenge!');
  });

});
