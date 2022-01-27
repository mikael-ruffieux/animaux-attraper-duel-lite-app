import { Component, OnInit } from '@angular/core';
import { AnimalUserService } from '@app/services/animaluser.service';
import { AnimalUser } from 'src/models/animaluser.model';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.page.html',
  styleUrls: ['./fight.page.scss'],
})
export class FightPage implements OnInit {
  // Hardcoded until login is good
  private pseudo = "SalamiSlayers69";
  animals: AnimalUser[];

  constructor(private animalUserService: AnimalUserService) { }

  ngOnInit() {
    this.animalUserService.getAllAnimals(this.pseudo).subscribe(animals => this.animals = animals);
    console.log(this.animals);
  }

}
