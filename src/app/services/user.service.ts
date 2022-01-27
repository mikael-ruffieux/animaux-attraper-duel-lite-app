import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from 'src/models/user.model';
import {map} from 'rxjs/operators';
import { Users } from 'src/models/users.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private httpService: HttpClient) { }

  public getUser(pseudo: string): Observable<User> {
    return this.httpService.get<User>(`https://animaux-attraper-duel-light.herokuapp.com/users/${pseudo}`).pipe(
      map(data => new User().deserialize(data))
    );
  }

  public getAllUsers(): Observable<Users> {
    return this.httpService.get<Users>(`https://animaux-attraper-duel-light.herokuapp.com/users?pageSize=100`).pipe(
      map(data => new Users().deserialize(data))
    );
  }
}
