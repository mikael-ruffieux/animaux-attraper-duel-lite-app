import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-button',
  templateUrl: './animal-button.component.html',
  styleUrls: ['./animal-button.component.scss'],
})
export class AnimalButtonComponent implements OnInit {
  @Input() animal: Object;

  constructor() { }

  ngOnInit() {}

}
