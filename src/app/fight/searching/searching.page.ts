import { Component, OnInit } from '@angular/core';
import { StoreService } from '@app/store/store.service';
import { WsMessage } from 'src/models/wsmessage.model';
import { Router } from '@angular/router';
import { WebsocketService } from '@app/services/websocket.service';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.page.html',
  styleUrls: ['./searching.page.scss'],
})
export class SearchingPage implements OnInit {
  private pseudo: string;
  private animalId: number;
  private data: unknown;

  constructor(private store: StoreService, private router:Router, private wsService: WebsocketService) {

  

  }

  ngOnInit() {
    /* For prod
    this.pseudo = this.store.username;
    this.animalId = this.store.fightingAnimalId;*/

    // For dev
    // this.pseudo = "SalamiSlayers69";
    // this.animalId = 1;

   

  }

  begin() {
    this.router.navigate(['/fight/in-progress']);
  }


  click() {
     this.wsService.disconnect()
  }
}