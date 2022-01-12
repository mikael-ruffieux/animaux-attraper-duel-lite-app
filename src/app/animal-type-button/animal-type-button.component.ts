import { Component, Input, OnInit } from '@angular/core';
import { Animal } from 'src/models/animal';
import { Routes, RouterModule } from '@angular/router';

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
