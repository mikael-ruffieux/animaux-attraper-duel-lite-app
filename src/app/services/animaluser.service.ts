import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AnimalUser} from '../../models/animaluser.model'
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimalUserService {

  constructor(private httpService: HttpClient) {}

  public getAnimal(pseudo: string, id: number): Observable<AnimalUser> {
    return this.httpService.get<AnimalUser>(`https://animaux-attraper-duel-light.herokuapp.com/users/${pseudo}/animals/${id}`).pipe(
      map(data => new AnimalUser().deserialize(data))
    );
  }

  public getAllAnimals(pseudo: string): Observable<AnimalUser[]> {
    return this.httpService.get<AnimalUser[]>(`https://animaux-attraper-duel-light.herokuapp.com/users/${pseudo}/animals`).pipe(
      map(data => data.map(data => new AnimalUser().deserialize(data)))
    );
  }  
}
