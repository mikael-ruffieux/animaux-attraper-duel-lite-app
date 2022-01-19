import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Animal } from 'src/models/animal.model';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})
export class AnimalsPage implements OnInit {
  //animals: Animal[];
  animals: any;

  constructor(
      public http: HttpClient
    ) {}

  ngOnInit() {
    // Make an HTTP request to retrieve the trips.
    const url = "https://animaux-attraper-duel-light.herokuapp.com/animals";
    this.http.get<Animal[]>(url).subscribe((animals) => {
      this.animals = animals.map(animal => new Animal().deserialize(animal));
      console.log(`Animals loaded`, animals);
    });
  }
}
