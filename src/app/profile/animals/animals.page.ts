import { Component, OnInit } from '@angular/core';
import { AnimalUserService } from '@app/services/animaluser.service';
import { AnimalUser } from 'src/models/animaluser.model';
import { StoreService } from "../../store/store.service";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})
export class AnimalsPage implements OnInit {
  // Hardcoded until login is good
  animals: AnimalUser[];

  constructor(private animalUserService: AnimalUserService, private store: StoreService) {
    this.animals = [];
  }

  ngOnInit() {
    this.animalUserService.getAllAnimals(this.store.username).subscribe(animals => this.animals = animals);
  }

}
