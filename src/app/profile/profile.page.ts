import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { User } from 'src/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  // on devrait utiliser le modèle ici, mais j'arrive pas
  profile: any;

  constructor(public http: HttpClient) {
  }

  ngOnInit() {
    // Make an HTTP request to retrieve the trips.
    // Hard-coded for now
    const url = "https://animaux-attraper-duel-light.herokuapp.com/users/SalamiSlayers69";
    this.http.get(url).subscribe((user) => {
      this.profile = user;
    });
  }

}
