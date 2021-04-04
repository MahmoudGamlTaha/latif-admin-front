import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  // @Input() tableHeaders = [];
   tableHeaders = [];
  tableData = [];
  table_cell_data;
  constructor() { }

  ngOnInit() {

    this.tableHeaders.push('id', 'username', 'weight', 'height');
        // this.tableHeaders.push({name: 'id'}, {name: 'username'}, {name: 'weight'}, {name: 'height'});
        this.tableData.push(
            {id: 1, username: 'adel', age: 22, height: 157},
            {id: 1, username: 'adel', age: 22, height: 157},
            {id: 1, username: 'adel', age: 22, height: 157},
            {id: 1, username: 'adel', age: 22, height: 157},
            {id: 1, username: 'adel', age: 22, height: 157},
            {id: 1, username: 'adel', age: 22, height: 157},
            {id: 1, username: 'adel', age: 22, height: 157},
        );
        this.table_cell_data = Object.keys(this.tableData[0]);
        console.log('table_cell_data', this.table_cell_data);
  }

}
