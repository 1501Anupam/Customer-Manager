import { Component, OnInit, ViewChild } from '@angular/core';
import { RandomUsersService } from '../random-users.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  data: Array<any>;
  totalRecords: string;
  page: number = 1;
  constructor(private randomUser: RandomUsersService) {
    this.data = new Array<any>();
  }

  ngOnInit(): void {
  }

  getUsers() {
    this.randomUser.getData().subscribe((data) => {
      console.log(data);
      this.data = data.results;
      this.totalRecords = data.results.length;
    });
  }

}
