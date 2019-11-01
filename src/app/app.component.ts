import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {UserService} from '../services';
import {User} from '../interfaces';
import {TableColumn} from '../interfaces/table-column.interface';
import {
  skip,
  takeUntil
} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public title = 'Measurabl Challenge';

  public tableColumns: TableColumn[] = [
    {
      label: 'ID',
      selector: 'id'
    },
    {
      label: 'First Name',
      selector: 'firstName'
    },
    {
      label: 'Last Name',
      selector: 'lastName'
    },
    {
      label: 'Age',
      selector: 'age'
    }
  ];

  public users: User[] = [];

  public initializing = true;

  private unsubscribe: Subject<boolean> = new Subject<boolean>();

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.users.pipe(skip(1), takeUntil(this.unsubscribe))
      .subscribe(users => {
        this.users = users;
        this.initializing = false;
      });

    this.userService.getUserNames();
    this.userService.getUserAges();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(true);
    this.unsubscribe.complete();
  }


}
