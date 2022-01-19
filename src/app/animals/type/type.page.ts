import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/models/animal.model';
import { AnimalService } from '@app/services/animal.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-type',
  templateUrl: './type.page.html',
  styleUrls: ['./type.page.scss'],
})
export class TypePage implements OnInit {
  pageRoute: any;
  animal : Animal;

  constructor(private route: ActivatedRoute, private animalService: AnimalService) {
    this.route.params.subscribe(params => this.pageRoute = params);
  }

  ngOnInit() {
    this.animalService.getAnimal(this.pageRoute.type).pipe(tap(console.log)).subscribe(animal => this.animal = animal[0]);
  }

}
