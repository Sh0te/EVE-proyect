import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreSigninComponent } from './features/pre-signin/pre-signin.component';

const routes: Routes = [
  { path: '', component: PreSigninComponent },
  { path: 'pre-sign-in', component: PreSigninComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
