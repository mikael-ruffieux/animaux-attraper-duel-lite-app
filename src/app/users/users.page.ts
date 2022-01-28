import { Component, OnInit } from '@angular/core';

import { User } from 'src/models/user.model';
import { UserService } from '@app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  public orderUsers(users: User[]) {
    return users.sort((a, b) => (b.level-a.level)) ;
  }

  public apiPlayers: User[];

  constructor(private userService: UserService) {
    this.apiPlayers = [];
    this.userService.getAllUsers().subscribe((users) => this.apiPlayers = users.data);
  }

  ngOnInit() {
  }

}
