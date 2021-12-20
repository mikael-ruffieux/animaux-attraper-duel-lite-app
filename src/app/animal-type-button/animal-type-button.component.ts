import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-type-button',
  templateUrl: './animal-type-button.component.html',
  styleUrls: ['./animal-type-button.component.scss'],
})
export class AnimalTypeButtonComponent implements OnInit {
  @Input() animalType: Object;

  constructor() { } 

  ngOnInit() {}

}
