import { Component, OnInit } from '@angular/core';
import { StoreService } from '@app/store/store.service';
import { WsMessage } from 'src/models/wsmessage.model';

import { WebsocketService } from '@app/services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.page.html',
  styleUrls: ['./searching.page.scss'],
})
export class SearchingPage implements OnInit {
  private pseudo: string;
  private animalId: number;
  private data: unknown;

  constructor(private store: StoreService, private wsService: WebsocketService, private router:Router) {

  }

  ngOnInit() {
    /* For prod
    this.pseudo = this.store.username;
    this.animalId = this.store.fightingAnimalId;*/

    // For dev
    this.pseudo = "SalamiSlayers69";
    this.animalId = 1;

    console.log(this);
  }

  begin() {
    this.wsService.ws$.unsubscribe();
    this.router.navigate(['/fight/in-progress']);
  }
}