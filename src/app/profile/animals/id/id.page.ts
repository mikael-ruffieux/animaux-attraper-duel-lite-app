import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalUserService } from '@app/services/animaluser.service';
import { AnimalUser } from 'src/models/animaluser.model';
import { StoreService } from "../../../store/store.service";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-id',
  templateUrl: './id.page.html',
  styleUrls: ['./id.page.scss'],
})
export class IdPage implements OnInit {
  // hardcode for now
  pageRoute: any;
  animal: AnimalUser;
  newName: string;
  name: Omit<AnimalUser, 'deserialize'|"id"|"type"|"attack"|"level"|"hp"|"picture">;;

  constructor(private route: ActivatedRoute, private animalUserService: AnimalUserService, private store: StoreService, private http: HttpClient) {
    this.route.params.subscribe(params => this.pageRoute = params);
  }

  ngOnInit() {
    this.animalUserService.getAnimal(this.store.username, this.pageRoute.id).subscribe(animal => this.animal = animal);
  }

  onClick(){


    this.name = {
      name: this.newName,
    }


    let test = this.http.put(`${environment.apiUrl}users/${this.store.username}/animals/${this.animal.id}`, this.name)

    test.subscribe({
      next: () => {
        console.log("yes")
      },
      error: (err) => {
        console.warn(`Register failed: ${err.message}`);
      },

    });


  }


  onClickdelete(){


    let test = this.http.delete(`${environment.apiUrl}users/${this.store.username}/animals/${this.animal.id}`)

    test.subscribe({
      next: () => {
        console.log("yes")
      },
      error: (err) => {
        console.warn(`Register failed: ${err.message}`);
      },

    });


  }

}
