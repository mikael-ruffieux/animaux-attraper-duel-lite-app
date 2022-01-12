import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthRequest } from "../../models/auth-request";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authRequest: AuthRequest;
  loginError: boolean;


  constructor(private auth: AuthService, private router: Router) {
    this.authRequest = {
      pseudo: undefined,
      password: undefined,
    
    }
  }

  ngOnInit() {


  }

  login() {
    this.auth.logIn$(this.authRequest).subscribe({
      next: () => console.log("ok"),
      error: (err) => {
        this.loginError = true;
        console.warn(`Authentication failed: ${err.message}`);
      },
    })
  }


}
