import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Animal} from 'src/models/animal.model'
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  constructor(private httpService: HttpClient) {}

  public getAnimal(type: string): Observable<Animal> {
    return this.httpService.get<Animal>(`https://animaux-attraper-duel-light.herokuapp.com/animals/${type}`).pipe(
      map(data => new Animal().deserialize(data))
    );
  }

  public getAllAnimals(): Observable<Animal[]> {
    return this.httpService.get<Animal[]>(`https://animaux-attraper-duel-light.herokuapp.com/animals`).pipe(
      map(data => data.map(data => new Animal().deserialize(data)))
    );
  }
}