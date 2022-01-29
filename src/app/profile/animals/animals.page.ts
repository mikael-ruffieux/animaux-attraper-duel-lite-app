import { Component, OnInit } from '@angular/core';
import { AnimalUserService } from '@app/services/animaluser.service';
import { AnimalUser } from 'src/models/animaluser.model';
import { AnimalService } from '@app/services/animal.service';
import { Animal } from 'src/models/animal.model';
import { StoreService } from "../../store/store.service";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})
export class AnimalsPage implements OnInit {
  // Hardcoded until login is good
  animals: AnimalUser[];
  animalTypes: Animal[];

  constructor(private animalUserService: AnimalUserService, private store: StoreService, private animalService : AnimalService) {
    this.animals = [];
    this.animalTypes = [];
  }

  ngOnInit() {
    this.animalUserService.getAllAnimals("SalamiSlayers69").subscribe(animals => this.animals = animals);
    this.animalService.getAllAnimals().subscribe(animals => this.animalTypes = animals);    
  }

  // not working
  reload() {
    // Getting the selected values
    // Filtering the this.animals by type
    // Displaying only the selected types
  }

}
