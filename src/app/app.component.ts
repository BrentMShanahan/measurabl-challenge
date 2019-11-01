import {
  Component,
  OnInit
} from '@angular/core';
import {UserService} from '../services';
import {User} from '../interfaces';
import {TableColumn} from '../interfaces/table-column.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

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

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.users.subscribe(users => {
      this.users = users;
    });

    this.userService.getUserNames();
    this.userService.getUserAges();
  }


}
