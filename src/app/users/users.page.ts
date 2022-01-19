import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  apiPlayers: any;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    // Make an HTTP request to retrieve the trips.
    const url = "https://animaux-attraper-duel-light.herokuapp.com/users?pageSize=20";
    this.http.get(url).subscribe((users) => {
      this.apiPlayers = users['data'];
      this.apiPlayers.sort((a:any, b:any) => b.level - a.level);
    });
  }

}
