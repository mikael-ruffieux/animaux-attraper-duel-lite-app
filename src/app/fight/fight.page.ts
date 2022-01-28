import { Component, OnInit, Output } from '@angular/core';
import { AnimalUserService } from '@app/services/animaluser.service';
import { AnimalUser } from 'src/models/animaluser.model';
import { EventEmitter } from '@angular/core';
import { StoreService } from '@app/store/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.page.html',
  styleUrls: ['./fight.page.scss'],
})
export class FightPage implements OnInit {
  @Output() pickingAnimal = new EventEmitter<AnimalUser>();

  // Hardcoded until login is good
  private pseudo = "SalamiSlayers69";
  animals: AnimalUser[];
  pickedAnimal: AnimalUser;

  constructor(private animalUserService: AnimalUserService, private store: StoreService, private router:Router) {
    this.store.username = this.pseudo;
    this.animals= []
  }

  ngOnInit() {
    this.animalUserService.getAllAnimals(this.pseudo).subscribe(animals => this.animals = animals);
  }

  pickAnimal(id) {
    this.store.fightingAnimalId = id;
    console.log("#1 : When does it trigger ?" , this.store.fightingAnimalId);
    this.router.navigate(['/fight/searching']);
  }





}
