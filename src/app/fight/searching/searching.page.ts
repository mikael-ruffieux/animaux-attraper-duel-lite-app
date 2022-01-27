import { Component, OnInit } from '@angular/core';
import { StoreService } from '@app/store/store.service';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.page.html',
  styleUrls: ['./searching.page.scss'],
})
export class SearchingPage implements OnInit {
  private pseudo: string;
  private animalId: number;

  constructor(private store: StoreService) {
    this.pseudo = this.store.username;
  }

  ngOnInit() {
    this.animalId = this.store.fightingAnimalId;
    console.log(this.pseudo, this.animalId);
  }
}
