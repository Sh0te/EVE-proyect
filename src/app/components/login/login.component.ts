import { Component } from '@angular/core';
import { NavComponent } from "./nav/nav.component";
import { FormComponent } from "./form/form.component";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [NavComponent, FormComponent]
})
export class LoginComponent {

}
