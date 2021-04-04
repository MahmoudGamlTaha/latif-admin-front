import { Component, OnInit } from '@angular/core';
import { BaseService } from 'app/shared/base/services/base.service';
import { BehaviorSubject } from 'rxjs';

import { map } from 'rxjs/operators';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blog_controller = 'public/blogs';
  // blog_controller = 'public/blogCategory';
  // @Input() tableHeaders = [];
  tableHeaders = [];
  tableRows = [];
  tableData = new BehaviorSubject<[]>(null);
  table_cell_data;
  newResponse = [];

  constructor(private baseService: BaseService) { }

  ngOnInit() {
    this.list();

    this.tableHeaders.push('id', 'username', 'weight', 'height');
    // this.tableHeaders.push({name: 'id'}, {name: 'username'}, {name: 'weight'}, {name: 'height'});
    this.tableRows.push(
      // { id: 1, username: 'adel', age: 22, height: 157 },
      // { id: 1, username: 'adel', age: 22, height: 157 },
      // { id: 1, username: 'adel', age: 22, height: 157 },
      // { id: 1, username: 'adel', age: 22, height: 157 },
      // { id: 1, username: 'adel', age: 22, height: 157 },
      // { id: 1, username: 'adel', age: 22, height: 157 },
      // { id: 1, username: 'adel', age: 22, height: 157 },
    );
    // this.table_cell_data = Object.keys(this.tableRows[0]);
    console.log('table_cell_data', this.table_cell_data);
  }

  list() {
    this.baseService.listAll(this.blog_controller).subscribe((response: any) => {
      if (response) {

        // response.response.data.pip(map((value, index) => {
        //   console.log('map value', value);
        //   console.log('map index', index);
        // }))
        this.newResponse = response.response.data.map(value => {
          // console.log('map value', value);
          if (typeof value.user === "object" && typeof value.user != null) {
            console.log('object found ');
            Object.assign(value, { username: value.user.firstName });
          }
           console.log('map value', value);
        })
        const data = response.response.data;
        this.tableHeaders = Object.keys(data[0]);
        this.tableData.next(data ? data : []);
        this.table_cell_data = this.tableHeaders;
        console.log('response', data);
        console.log('table_cell_data', this.table_cell_data);
        // console.log('object enteries ', Object.entries(data[0].user));

      } else { return }
    })
  }

}
