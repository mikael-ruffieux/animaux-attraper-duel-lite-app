import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

/* Test values */
import { PLAYERS } from '../mock-players';
import { COW, CAT } from '../mock-animals';

@Component({
  selector: 'app-components',
  templateUrl: './components.page.html',
  styleUrls: ['./components.page.scss'],
})
export class ComponentsPage implements OnInit {
  players = PLAYERS;
  cow = COW;
  cat = CAT;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Components Page'); // set the page title (in explorer tab)
  }

  ngOnInit() {
  }

}
