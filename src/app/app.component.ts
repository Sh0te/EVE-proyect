import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PreSigninComponent } from "./features/pre-signin/pre-signin.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, RouterLink, PreSigninComponent]
})
export class AppComponent {
}
