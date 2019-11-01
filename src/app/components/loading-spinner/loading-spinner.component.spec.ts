import {
  TestBed,
  async,
  ComponentFixture
} from '@angular/core/testing';
import {LoadingSpinnerComponent} from './loading-spinner.component';

describe('Loading Spinner Component', () => {

  let fixture: ComponentFixture<LoadingSpinnerComponent>;
  let component: LoadingSpinnerComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoadingSpinnerComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingSpinnerComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the component', () => {
    expect(component)
      .toBeTruthy();
  });

});
