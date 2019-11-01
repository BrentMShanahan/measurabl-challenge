import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {
  BehaviorSubject,
  Observable
} from 'rxjs';
import {User} from '../interfaces/user.interface';
import {environment} from '../environments/environment';
import {UserCache} from '../interfaces/user-cache.interface';

/**
 * User Service
 */
@Injectable()
export class UserService {

  private userCache: UserCache = {};

  private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  public users: Observable<User[]> = this.usersSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  /**
   * Get User Names
   * Retrieves user first and last names
   */
  public getUserNames(): void {
    this.http.get(environment.userNameURL)
      .subscribe(userNames => {
        this.submitUserData(userNames);
      }, (err) => {
        this.handleErrors(err);
      });
  }

  /**
   * Get User Ages
   * Retrieves user ages
   */
  public getUserAges(): void {
    this.http.get(environment.userAgesURL)
      .subscribe(userAges => {
        this.submitUserData(userAges);
      }, (err) => {
        this.handleErrors(err);
      });
  }

  private submitUserData(data): void {
    if (!Array.isArray(data) || data.length === 0) {
      return;
    }

    data.forEach((userData) => {
      const id = userData.id;
      if (this.userCache.hasOwnProperty(id)) {
        this.userCache[id] = Object.assign(this.userCache[id], userData);
      } else {
        this.userCache[id] = userData;
      }
    });

    // Test the loading spinner
    // setTimeout(() => {
    //   this.usersSubject.next(Object.values(this.userCache));
    // }, 5000);

    this.usersSubject.next(Object.values(this.userCache));
  }

  private handleErrors(err): void {
    console.error('An error occured in the User Service: ', err.message);
  }

}
