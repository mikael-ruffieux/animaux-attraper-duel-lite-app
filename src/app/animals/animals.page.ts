import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})
export class AnimalsPage implements OnInit {
  animals: any;

  constructor(
      public http: HttpClient
    ) {}

  ngOnInit() {
    // Make an HTTP request to retrieve the trips.
    const url = "https://animaux-attraper-duel-light.herokuapp.com/animals";
    this.http.get(url).subscribe((animals) => {
      this.animals = animals;
    });
  }
}
