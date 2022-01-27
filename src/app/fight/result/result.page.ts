import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  win: boolean;

  constructor() {
    this.win = true;
  }

  ngOnInit() {
  }

}
