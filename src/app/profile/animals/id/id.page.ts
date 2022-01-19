import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalUserService } from '@app/services/animaluser.service';
import { AnimalUser } from 'src/models/animaluser.model';

@Component({
  selector: 'app-id',
  templateUrl: './id.page.html',
  styleUrls: ['./id.page.scss'],
})
export class IdPage implements OnInit {
  // hardcode for now
  private pseudo = "Anthony2";
  pageRoute: any;
  animal: AnimalUser;

  constructor(private route: ActivatedRoute, private animalUserService: AnimalUserService) {
    this.route.params.subscribe(params => this.pageRoute = params);
  }

  ngOnInit() {
    this.animalUserService.getAnimal(this.pseudo, this.pageRoute.id).subscribe(animal => this.animal = animal);
  }

}
