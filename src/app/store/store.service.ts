import { Injectable } from '@angular/core';
//import * as internal from 'stream';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  picture?: string ;
  username?: string;
  fightingAnimalId?: number;
  players?: string;
  win?: string;
  setinterval?:boolean

}
