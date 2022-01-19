import { Component, OnInit } from '@angular/core';
import { AnimalUserService } from '@app/services/animaluser.service';
import { AnimalUser } from 'src/models/animaluser.model';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})
export class AnimalsPage implements OnInit {
  // Hardcoded until login is good
  private pseudo = "Anthony2";
  animals: AnimalUser[];

  constructor(private animalUserService: AnimalUserService) { }

  ngOnInit() {
    this.animalUserService.getAllAnimals(this.pseudo).subscribe(animals => this.animals = animals);
  }

}
