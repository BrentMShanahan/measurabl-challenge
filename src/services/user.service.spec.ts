import {
  async,
  TestBed
} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {UserService} from './user.service';

/**
 * This test case is designed to test the User Service
 */
describe('User Service', () => {
  let service: UserService;

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
  });

  it('creates a new instance', () => {
    expect(service)
      .toBeTruthy();
  });

});
