import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { User } from 'src/models/user.model';

import { StoreService } from "../store/store.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  // on devrait utiliser le modèle ici, mais j'arrive pas
  profile: User;

  constructor(public http: HttpClient, private store: StoreService) {
  }


  ngOnInit() {
    


    const url = `https://animaux-attraper-duel-light.herokuapp.com/users/${this.store.username}`;
    this.http.get(url).subscribe((user) => {
      console.log(user[0]);
    });


    }


}
