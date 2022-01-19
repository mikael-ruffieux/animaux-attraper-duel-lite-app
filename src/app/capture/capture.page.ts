import { Component, OnInit } from '@angular/core';
import { StoreService} from "../store/store.service";

@Component({
  selector: 'app-capture',
  templateUrl: './capture.page.html',
  styleUrls: ['./capture.page.scss'],
})
export class CapturePage implements OnInit {

  pictureURL: string;

  constructor(private store: StoreService) {

    this.pictureURL = this.store.picture
   }

  ngOnInit() {
  }




}
