import {
  Component,
  Input
} from '@angular/core';
import {User} from '../../../interfaces';
import {TableColumn} from '../../../interfaces/table-column.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() users: User[];

  @Input() tableColumns: TableColumn[];

}
