import { Component } from '@angular/core';
import { NavComponent } from "../../shared/components/nav/nav.component";
import { FrontDriveService } from '../../services/front-drive.service';
import { LogInComponent } from "../../shared/components/log-in/log-in.component";
import { SignUpComponent } from "../../shared/components/sign-up/sign-up.component";

@Component({
  selector: 'app-pre-signin',
  standalone: true,
  templateUrl: './pre-signin.component.html',
  styleUrl: './pre-signin.component.css',
  imports: [NavComponent, LogInComponent, SignUpComponent]
})
export class PreSigninComponent {

  constructor(public frontDriveService: FrontDriveService) { }

  signIn!: boolean;

  changeSignIn() {
    this.signIn = !this.signIn;
  }
}
