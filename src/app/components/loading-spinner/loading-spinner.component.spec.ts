import {
  TestBed,
  async,
  ComponentFixture
} from '@angular/core/testing';
import {LoadingSpinnerComponent} from './loading-spinner.component';
import {By} from '@angular/platform-browser';

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

  it('should display the loading overlay if isLoading is true', () => {
    component.isLoading = true;
    fixture.detectChanges();
    const img = fixture.debugElement.query(By.css('img'));
    expect(img).toBeTruthy();
  });

  it('should not display the loading overlay if isLoading is false', () => {
    component.isLoading = false;
    fixture.detectChanges();
    const img = fixture.debugElement.query(By.css('img'));
    expect(img).toBeFalsy();
  });

});
