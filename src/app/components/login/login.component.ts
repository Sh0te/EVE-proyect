import { Component } from '@angular/core';
import { NavComponent } from "./nav/nav.component";
import { FormComponent } from "./form/form.component";
import { CentralTextLoginComponent } from "./central-text-login/central-text-login.component";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [NavComponent, FormComponent, CentralTextLoginComponent]
})
export class LoginComponent {

}
