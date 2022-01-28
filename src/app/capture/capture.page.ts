import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from "../store/store.service";
import { AnimalService } from '@app/services/animal.service';
import { Animal } from 'src/models/animal.model';
import { AnimalUser } from 'src/models/animaluser.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AnimalUserService } from '@app/services/animaluser.service';



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
  animalsUser: AnimalUser[];

  constructor(private http: HttpClient, private store: StoreService, private animalService: AnimalService, private animalUserService: AnimalUserService) {

    this.pictureURL = this.store.picture
  }

  ngOnInit() {

    this.animalService.getAllAnimals().subscribe(animals => {
      this.animals = animals;

      this.animalUserService.getAllAnimals(this.store.username).subscribe(animal => {
        this.animalsUser = animal;
      });
    })
  }

  private returnAnimalData(animal: Animal) : Omit<AnimalUser, 'deserialize'> {
    let animalData = {
      id: 1,
      type: this.animalType,
      name: this.animalName,
      hp: this.getRandomStat(animal.hp_default, animal.hp_variation),
      attack: this.getRandomStat(animal.attack_default, animal.attack_variation),
      level: this.getRandomStat(animal.level_default, animal.level_variation),
      picture: this.pictureURL,
    };
    return animalData;
  }

  private getRandomStat(default_stat : number, variation : number) : number {
    return Math.floor(Math.random() * ((default_stat + variation) - (default_stat - variation)) + (default_stat - variation));
  }

  onSubmit() {
    let animalModel = this.animals.filter(animal => animal.type == this.animalType)[0];
    this.retrieveAnimal = this.returnAnimalData(animalModel);

    if (this.animalsUser.length === 0) {
      this.retrieveAnimal.id = 1
    } else {
      if (this.animalsUser[this.animalsUser.length - 1].id >= 0) {
        this.retrieveAnimal.id = (this.animalsUser[this.animalsUser.length - 1].id) + 1
      } else {
        this.retrieveAnimal.id = 1
      }
      
    }

    console.log(JSON.stringify(this.retrieveAnimal));

    let test = this.http.post(`${environment.apiUrl}users/${this.store.username}/animals`, this.retrieveAnimal)

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
