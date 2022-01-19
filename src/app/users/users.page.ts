import { Component, OnInit } from '@angular/core';

import { User } from 'src/models/user.model';
import { UserService } from '@app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  apiPlayers: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => this.apiPlayers = users);
  }

}
