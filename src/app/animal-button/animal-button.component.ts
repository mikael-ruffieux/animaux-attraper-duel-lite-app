import { Component, Input, OnInit, Output } from '@angular/core';
import { AnimalUser } from 'src/models/animaluser.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-animal-button',
  templateUrl: './animal-button.component.html',
  styleUrls: ['./animal-button.component.scss'],
})
export class AnimalButtonComponent implements OnInit {
  @Input() animal: AnimalUser;
  @Input() fight: boolean = false;

  @Output() pickingAnimal = new EventEmitter<AnimalUser>();

  constructor() { }

  ngOnInit() {}

  pickAnimal() {
    this.pickingAnimal.emit(this.animal);
  }

}
