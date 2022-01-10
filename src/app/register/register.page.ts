import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { AuthRequest } from "../../model/auth-request";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
