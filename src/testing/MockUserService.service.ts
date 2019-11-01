import {Injectable} from '@angular/core';
import {
  BehaviorSubject,
  Observable
} from 'rxjs';
import {User} from '../interfaces/user.interface';

/**
 * Mock User Service
 */
@Injectable()
export class MockUserService {

  private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  public users: Observable<User[]> = this.usersSubject.asObservable();

  private fakeUsers: User[] = [
    {id: 1, firstName: 'Flurb', lastName: 'Gurbleson', age: 104},
    {id: 2, firstName: 'Fanny', lastName: 'Hoobob', age: 59}
  ];

  constructor() {
  }

  /**
   * Get User Names
   * Retrieves user first and last names
   */
  public getUserNames(): void {
    this.usersSubject.next(this.fakeUsers);
  }

  /**
   * Get User Ages
   * Retrieves user ages
   */
  public getUserAges(): void {
    this.usersSubject.next(this.fakeUsers);
  }

}
