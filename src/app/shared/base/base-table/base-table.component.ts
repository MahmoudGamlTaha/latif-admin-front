import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.css']
})
export class BaseTableComponent implements OnInit {


  // @Input() tableHeaders = [];
  @Input() tableHeaders = [];
  @Input() tableData = new BehaviorSubject<[]>(null);
  @Input() table_cell_data;
  constructor() { }

  ngOnInit() {

    // this.tableHeaders.push('id', 'username', 'weight', 'height');
    // this.tableHeaders.push({name: 'id'}, {name: 'username'}, {name: 'weight'}, {name: 'height'});
    // this.tableRows.push(
    //     {id: 1, username: 'adel', age: 22, height: 157},
    //     {id: 1, username: 'adel', age: 22, height: 157},
    //     {id: 1, username: 'adel', age: 22, height: 157},
    //     {id: 1, username: 'adel', age: 22, height: 157},
    //     {id: 1, username: 'adel', age: 22, height: 157},
    //     {id: 1, username: 'adel', age: 22, height: 157},
    //     {id: 1, username: 'adel', age: 22, height: 157},
    // );
    // this.table_cell_data = Object.keys(this.tableRows[0]);
    // console.log('table_cell_data', this.table_cell_data);
  }
  // checkObject(){
  //   // Object.entries()
  // }

}
