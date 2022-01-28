import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalUserService } from '@app/services/animaluser.service';
import { AnimalUser } from 'src/models/animaluser.model';
import { StoreService } from "../../../store/store.service";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

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
  name: Omit<AnimalUser, 'deserialize'|"id"|"type"|"attack"|"level"|"hp"|"picture">;
  error: string;

  constructor(private route: ActivatedRoute, private animalUserService: AnimalUserService, private store: StoreService, private http: HttpClient, private router:Router) {
    this.route.params.subscribe(params => this.pageRoute = params);
    this.error = "";
  }

  ngOnInit() {
    this.animalUserService.getAnimal(this.store.username, this.pageRoute.id).subscribe(animal => this.animal = animal);
  }

  onClick(){
    if(this.testNewName(this.newName) == "error") {
      this.error = "New name invalid.";

    } else {
      this.name = {
        name: this.testNewName(this.newName),
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

      this.router.navigate(["/profile/animals"]);


    }
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

  testNewName(newName: string) : string {
    if(newName.length <= 10) {
      return newName.replace(/<[^>]*>?/gm, ''); 
    } else {
      return "error";
    }
  }
}
