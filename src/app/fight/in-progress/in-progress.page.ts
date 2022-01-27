import { Component, OnInit } from '@angular/core';
import { AnimalUserService } from '@app/services/animaluser.service';
import { UserService } from '@app/services/user.service';
import { StoreService } from '@app/store/store.service';
import { AnimalUser } from 'src/models/animaluser.model';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.page.html',
  styleUrls: ['./in-progress.page.scss'],
})
export class InProgressPage implements OnInit {
  playersPseudo: string[];
  playersAnimalId: number[];

  adversaries: User[];
  animals: AnimalUser[];

  constructor(
    private store: StoreService,
    private userService: UserService,
    private animalUserService: AnimalUserService)
  {
    this.adversaries = [];
    this.animals = [];

    // Hardcoded for now
    this.playersPseudo = ["SalamiSlayers69", "Anthony2"];
    this.playersAnimalId = [2, 1];
  }

  ngOnInit() {
    for (let i = 0; i < this.playersPseudo.length; i++) {
      this.userService.getUser(this.playersPseudo[i]).subscribe(user => this.adversaries.push(user));
      this.animalUserService.getAnimal(this.playersPseudo[i], this.playersAnimalId[i]).subscribe(animal => this.animals[i] = animal);
    }
  }

}
