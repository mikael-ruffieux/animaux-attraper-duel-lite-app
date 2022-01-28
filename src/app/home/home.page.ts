import { Component, OnInit } from '@angular/core';
import { QimgImage } from "../../models/QimgImage.model";
import { PictureService } from "../../app/picture/picture.service";
import { AuthService } from "../auth/auth.service";
import { AuthRequest } from "../../models/auth-request";
import { Router } from "@angular/router";
import { StoreService} from "../store/store.service";

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
    private router: Router,
    private store: StoreService
  ) {
  }

  
  public takePicture() {
    this.pictureService.takeAndUploadPicture().subscribe({
      next: (picture) => {
        this.picture = picture;
        this.store.picture = this.picture.url
        this.router.navigateByUrl("/capture");
        // console.log(this.picture.url)
      
      },
      error: (err) => {
        console.warn("Could not take picture", err);
      }
    });
  }

  public logOut() {
    console.log("logging out...");
    this.auth.logOut();
    this.router.navigateByUrl("/start");
  }

  ngOnInit() {
  }
}
