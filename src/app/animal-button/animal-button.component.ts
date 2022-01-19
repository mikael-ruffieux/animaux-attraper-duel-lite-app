import { Component, Input, OnInit } from '@angular/core';
import { AnimalUser } from 'src/models/animaluser.model';

@Component({
  selector: 'app-animal-button',
  templateUrl: './animal-button.component.html',
  styleUrls: ['./animal-button.component.scss'],
})
export class AnimalButtonComponent implements OnInit {
  @Input() animal: AnimalUser;

  constructor() { }

  ngOnInit() {}

}
