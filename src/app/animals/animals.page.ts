import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/models/animal.model';
import { AnimalService } from '@app/services/animal.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})
export class AnimalsPage implements OnInit {
  animals: Animal[];

  constructor(
    private animalService: AnimalService
    ) {}

  ngOnInit() {
    this.animalService.getAllAnimals().subscribe(animals => this.animals = animals);}
}
