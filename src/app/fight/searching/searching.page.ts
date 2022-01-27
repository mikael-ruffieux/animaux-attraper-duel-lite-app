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
    this.pseudo = this.store.username;

    this.wsService
      .listen<WsMessageStart>()
      .subscribe(message => {
        console.log("from searching.page.ts -->", message);
      });
  }

  ngOnInit() {
    this.animalId = this.store.fightingAnimalId;
    console.log(this.pseudo, this.animalId);
  }
}
