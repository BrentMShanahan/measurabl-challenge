import {
  TestBed,
  async,
  ComponentFixture
} from '@angular/core/testing';
import {TableComponent} from './table.component';

describe('Table Component', () => {

  let fixture: ComponentFixture<TableComponent>;
  let component: TableComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the component', () => {
    expect(component)
      .toBeTruthy();
  });

});
