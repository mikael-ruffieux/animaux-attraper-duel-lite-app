import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { User } from 'src/models/user.model';

import { StoreService } from "../store/store.service";

import { UserService } from '@app/services/user.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  // on devrait utiliser le modèle ici, mais j'arrive pas
  profile: Omit<User, 'deserialize'|'animalUserService'>;

  constructor(public http: HttpClient, private store: StoreService,  private userService: UserService) {


  }


  ngOnInit() {

    this.userService.getUser(this.store.username).subscribe(user =>{
      this.profile = user
    });
    


    }


  onClickdelete() {


    
    let test = this.http.delete(`${environment.apiUrl}users/${this.store.username}`)

    test.subscribe({
      next: () => {
        console.log("yes")
      },
      error: (err) => {
        console.warn(`Register failed: ${err.message}`);
      },

    });


  }





}
