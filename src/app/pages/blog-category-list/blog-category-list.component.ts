import { Component, OnInit } from '@angular/core';
import { BaseService } from 'app/shared/base/services/base.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-blog-category-list',
  templateUrl: './blog-category-list.component.html',
  styleUrls: ['./blog-category-list.component.css']
})
export class BlogCategoryListComponent implements OnInit {
  blog_category_controller = 'public/blogCategory';
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
    this.baseService.listAll(this.blog_category_controller).subscribe((response: any) => {
      if (response) {
        if (response[0].id) {
          this.tableHeaders = Object.keys(response[0]);
          this.tableData.next(response ? response : []);
          this.table_cell_data = this.tableHeaders;
        } else {
          this.newResponse = response.response.data.map(value => {
            if (typeof value.user === "object" && typeof value.user != null) {
              Object.assign(value, { username: value.user.firstName });
            }
          })
          const data = response.response.data;
          this.tableHeaders = Object.keys(data[0]);
          this.tableData.next(data ? data : []);
          this.table_cell_data = this.tableHeaders;
        }
      } else { return }
    })
  }

}
