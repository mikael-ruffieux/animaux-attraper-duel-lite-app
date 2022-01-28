import { Component, OnInit } from '@angular/core';
import { StoreService } from '@app/store/store.service';
import { WebsocketService } from '@app/services/websocket.service';


@Component({
    selector: 'app-in-progress',
    templateUrl: './in-progress.page.html',
    styleUrls: ['./in-progress.page.scss'],
})
export class InProgressPage implements OnInit {
    playersPseudo: string[];
    playersAnimalId: number[];
    message: string;
    winner: string;

    constructor(
        private store: StoreService,
        private wsService: WebsocketService
    ) {
        //Dev
        //this.message = '{"type": "finish"}';

        // Prod
        this.message = this.store.players;

        this.wsService
            .listen()
            .subscribe(message => {
                let json = JSON.parse(message);

                if (json.type === "finish") {
                    this.store.win = json.message;
                    this.winner = this.store.win;
                    this.wsService.disconnect();
                }
            });
    }

    ngOnInit() {

    }

}
