import { Component, OnInit } from '@angular/core';

// Test values
import { PLAYERS } from '../mock-players';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  players = PLAYERS;

  constructor() { }

  ngOnInit() {
  }

}
