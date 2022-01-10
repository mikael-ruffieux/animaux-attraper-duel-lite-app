import { Component } from '@angular/core';
import { QimgImage } from "../../models/QimgImage.model";
import { PictureService } from "../../app/picture/picture.service";
import { AuthService } from "../auth/auth.service";
import { AuthRequest } from "../../model/auth-request";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  picture: QimgImage;

  constructor(
    
    private pictureService: PictureService,
    private auth: AuthService,
    private router: Router


  ) {}

    // TODO: add a method to take a picture
  //       (replace it if you already have it)
  takePicture() {
    this.pictureService.takeAndUploadPicture().subscribe(
      (picture) => {
        this.picture = picture;
      },
      (err) => {
        console.warn("Could not take picture", err);
      }
    );
  }

  logOut() {
    console.log("logging out...");
    this.auth.logOut();
    this.router.navigateByUrl("/login");
  }

}
