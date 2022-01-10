import { Component, OnInit } from '@angular/core';

import {PROFILE} from '../mock-user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user = PROFILE;

  constructor() { }

  ngOnInit() {
  }

}
