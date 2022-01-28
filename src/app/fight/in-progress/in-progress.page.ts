import { Component, OnInit } from '@angular/core';
import { AnimalUserService } from '@app/services/animaluser.service';
import { UserService } from '@app/services/user.service';
import { StoreService } from '@app/store/store.service';
import { AnimalUser } from 'src/models/animaluser.model';
import { User } from 'src/models/user.model';
import { Router } from '@angular/router';
import { WebsocketService } from '@app/services/websocket.service';


@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.page.html',
  styleUrls: ['./in-progress.page.scss'],
})
export class InProgressPage implements OnInit {
  playersPseudo: string[];
  playersAnimalId: number[];
  message:string;
  winner: string;


  adversaries: User[];
  animals: AnimalUser[];

  constructor(
    private store: StoreService,
    private userService: UserService,
    private animalUserService: AnimalUserService,
    private router: Router,
    private wsService: WebsocketService)
  {
    this.adversaries = [];
    this.animals = [];



    this.message = this.store.players

    this.wsService
    .listen()
    .subscribe(message => {
      let json = JSON.parse(message);


      if (json.type==="finish") {
        this.store.win = json.message
        this.winner = this.store.win
        this.wsService.disconnect()


        
      }
    });


   

    //Dev
    // this.playersPseudo = ["SalamiSlayers69", "Anthony2"];
    // this.playersAnimalId = [1, 1];

    /* Semi-prod
    this.playersPseudo = [this.store.username, "Anthony2"];
    this.playersAnimalId = [this.store.fightingAnimalId, 1];
    */
  }

  ngOnInit() {
  //   for (let i = 0; i < this.playersPseudo.length; i++) {
  //     this.userService.getUser(this.playersPseudo[i]).subscribe(user => this.adversaries[i] = user);
  //     this.animalUserService.getAnimal(this.playersPseudo[i], this.playersAnimalId[i]).subscribe(animal => this.animals[i] = animal);
  //   }
  //   console.log(this.adversaries, this.animals);
  // }

  }

}
