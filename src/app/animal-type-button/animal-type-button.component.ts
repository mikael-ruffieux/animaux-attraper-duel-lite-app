import { Component, Input, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Animal } from 'src/models/animal.model';
=======
import { Animal } from 'src/models/animal';
import { Routes, RouterModule } from '@angular/router';
>>>>>>> 91fc5a569e9512c457846272a69bdaf40fbd01b3

@Component({
  selector: 'app-animal-type-button',
  templateUrl: './animal-type-button.component.html',
  styleUrls: ['./animal-type-button.component.scss'],
})
export class AnimalTypeButtonComponent implements OnInit {
  @Input() animal: Animal;

  constructor() { } 

  ngOnInit() {}

}
