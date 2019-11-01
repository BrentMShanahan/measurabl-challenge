import {
  async,
  TestBed
} from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import {UserService} from './user.service';
import {environment} from '../environments/environment';
import {skip} from 'rxjs/operators';

/**
 * This test case is designed to test the User Service
 */
describe('User Service', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        UserService
      ]
    });
  }));

  beforeEach(() => {
    service = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('creates a new instance', () => {
    expect(service)
      .toBeTruthy();
  });

  it('#getUserNames should make an HTTP GET request and retrieve user names', () => {
    const dummyUsers: any = [
      {id: 1, firstName: 'Flap', lastName: 'Jack'},
      {id: 2, firstName: 'Pan', lastName: 'Cake'}
    ];

    service.getUserNames();
    const req = httpMock.expectOne(environment.userNameURL);
    expect(req.request.method)
      .toBe('GET');
    req.flush(dummyUsers);

    service.users.pipe(skip(1)).subscribe(users => {
      expect(users.length)
        .toBe(2);
      expect(users)
        .toEqual(dummyUsers);
    });
  });

  it('#getUserAges should make an HTTP GET request and retrieve user ages', () => {
    const dummyUsers: any = [
      {id: 1, age: 100},
      {id: 2, age: 45}
    ];

    service.getUserNames();
    const req = httpMock.expectOne(environment.userNameURL);
    expect(req.request.method)
      .toBe('GET');
    req.flush(dummyUsers);

    service.users.pipe(skip(1)).subscribe(users => {
      expect(users.length)
        .toBe(2);
      expect(users)
        .toEqual(dummyUsers);
    });
  });

});
