import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from "../store/store.service";
import { AnimalService } from '@app/services/animal.service';
import { Animal } from 'src/models/animal.model';
import { AnimalUser } from 'src/models/animaluser.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-capture',
  templateUrl: './capture.page.html',
  styleUrls: ['./capture.page.scss'],
})
export class CapturePage implements OnInit {

  pictureURL: string;
  animals: Animal[];
  retrieveAnimal: Omit<AnimalUser, 'deserialize'>;
  animalName: string;
  animalType: string;

  constructor(private http: HttpClient, private store: StoreService, private animalService: AnimalService) {

    this.pictureURL = this.store.picture
  }

  ngOnInit() {

    this.animalService.getAllAnimals().subscribe(animals => {
      this.animals = animals


    })

  }

  onSubmit() {

    this.retrieveAnimal = {
      id: 1,
      type: this.animalType,
      name: this.animalName,
      hp: 1,
      attack: 1,
      level: 1,
      picture: "test",
    };


    console.log(JSON.stringify(this.retrieveAnimal))

    let test = this.http.post(`${environment.apiUrl}users/${this.store.username}/animals`, JSON.stringify(this.retrieveAnimal))

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
