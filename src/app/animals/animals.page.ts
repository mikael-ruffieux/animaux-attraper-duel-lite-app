import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})
export class AnimalsPage implements OnInit {
  animals: any;

  constructor(
      // Inject the AuthService
      private auth: AuthService,
      // Inject the HTTP client
      public http: HttpClient
    ) {}

  ngOnInit() {
    // Make an HTTP request to retrieve the trips.
    const url = "https://animaux-attraper-duel-light.herokuapp.com/animals";
    this.http.get(url).subscribe((animals) => {
      this.animals = animals;
      console.log(`Animals loaded`, animals);
    });
  }
}
