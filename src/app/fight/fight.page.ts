import { Component, OnInit, Output } from '@angular/core';
import { AnimalUserService } from '@app/services/animaluser.service';
import { AnimalUser } from 'src/models/animaluser.model';
import { EventEmitter } from '@angular/core';
import { StoreService } from '@app/store/store.service';
import { Router } from '@angular/router';
import { WebsocketService } from '@app/services/websocket.service';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.page.html',
  styleUrls: ['./fight.page.scss'],
})
export class FightPage implements OnInit {
  @Output() pickingAnimal = new EventEmitter<AnimalUser>();

  // Hardcoded until login is good
  private pseudo = "Anthony2";
  animals: AnimalUser[];
  pickedAnimal: AnimalUser;

  constructor(private animalUserService: AnimalUserService, private store: StoreService, private router: Router, private wsService: WebsocketService) {
  
    this.animals = []


   this.store.setinterval = true


    

 




  }

  ngOnInit() {
 
    this.animalUserService.getAllAnimals(this.store.username).subscribe(animals => this.animals = animals);
  }

  pickAnimal(id) {
    this.store.fightingAnimalId = id;

    this.wsService.connect()

    
    let data = {
      type: "start",
      pseudo: this.store.username,
      animalID: this.store.fightingAnimalId
    }

    
    this.wsService.send(data);

   


    this.wsService
    .listen()
    .subscribe(message => {
      let json = JSON.parse(message);
      if (json.type === "OK") {
        let data = {
          type: "play"
        }
        this.wsService.send(data);

       

      }
      if (json.type==="playing") {
        this.store.players = json.message
        this.router.navigate(['/fight/in-progress']);

        
      }


      console.log(message)
    });



    this.router.navigate(['/fight/searching']);



  }





}