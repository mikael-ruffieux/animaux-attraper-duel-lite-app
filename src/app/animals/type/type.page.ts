import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { Animal } from 'src/models/animal.model';

@Component({
  selector: 'app-type',
  templateUrl: './type.page.html',
  styleUrls: ['./type.page.scss'],
})
export class TypePage implements OnInit {
  pageRoute: any;
  @Input() animal : Animal;

  constructor(private route: ActivatedRoute, public http: HttpClient) {
    this.route.params.subscribe(params => this.pageRoute = params);
  }

  ngOnInit() {
        // Make an HTTP request to retrieve the trips.
        const url = `https://animaux-attraper-duel-light.herokuapp.com/animals/${this.pageRoute.type}`;
        this.http.get(url).subscribe((animal) => {
          this.animal = animal[0];
          console.log(`Animal loaded`, this.animal);
        });
  }

}
