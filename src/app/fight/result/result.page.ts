import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '@app/services/websocket.service';
import { StoreService } from '@app/store/store.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  win: string;

  constructor(private store: StoreService) {
    this.win = this.store.win;

 


    
  }

  ngOnInit() {
  }

}
