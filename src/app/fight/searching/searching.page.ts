import { Component, OnInit } from '@angular/core';
import { StoreService } from '@app/store/store.service';
import { WsMessageStart, WsMessagePlay } from 'src/models/wsmessage.model';

import { WebsocketService } from '@app/services/websocket.service';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.page.html',
  styleUrls: ['./searching.page.scss'],
})
export class SearchingPage implements OnInit {
  private pseudo: string;
  private animalId: number;

  constructor(private store: StoreService, private wsService: WebsocketService) {
    console.log("Store: " , store.fightingAnimalId);

    this.wsService
      .listen<WsMessageStart>()
      .subscribe(message => {
        console.log("#3 : from searching.page.ts -->", message);
      });

    let data = {
      "type": "start",
      "pseudo": this.pseudo,
      "animalID": this.animalId
    }

    this.wsService.send(data);
  }

  ngOnInit() {
    this.pseudo = this.store.username;
    this.animalId = this.store.fightingAnimalId;
    console.log("#2 : ", this.pseudo, this.animalId);
  }
}
