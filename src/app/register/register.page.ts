import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from "../auth/auth.service";
import { StoreService } from "../store/store.service";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string ;
  password: string ;
  genre: string;
  level: number;
  admin: boolean;
  isregister: boolean;
  loginError: boolean;

  constructor(private store: StoreService, private router: Router, private http: HttpClient, private auth: AuthService) {

    this.genre="Homme";
    this.level = 1;
    this.admin = false;
   }

  ngOnInit() {
  }

  onSubmit(form: NgForm): Observable<Object>{
    
    if (form.invalid) {
      return;
    }

    let hero = {
      pseudo: this.username,
      password: this.password,
      genre: this.genre,
      level: this.level,
      admin: this.admin
    }

    let test = this.http.post(`${environment.apiUrl}users`, hero,)

    test.subscribe({
      next: () => {
        this.isregister = true;
        let authRequest = {
          pseudo: this.username,
          password: this.password,
        }
        this.auth.logIn$(authRequest).subscribe({
          next: () => {
            this.router.navigateByUrl("/home")
            this.store.username = this.username
        },
          error: (err) => {
            this.loginError = true;
            console.warn(`Authentication failed: ${err.message}`);
          },
        });
      },
      error: (err) => {
        this.loginError = true;
        console.warn(`Register failed: ${err.message}`);
      },

    });
    


    

    

    

    
  }


}
