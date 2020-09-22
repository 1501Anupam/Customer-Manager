import { Component, OnInit } from '@angular/core';
import { RandomUsersService } from '../random-users.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  data: Array<any>;
  constructor(private randomUser: RandomUsersService) { }

  ngOnInit(): void {
  }

  getUsers() {
    this.randomUser.getData().subscribe((data) => {
      console.log(data);
      this.data = data.results;
    });
  }

}
