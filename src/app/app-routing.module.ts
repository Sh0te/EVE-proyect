import { NgModule } from '@angular/core';
import { EveChargeComponent } from './components/eve-charge/eve-charge.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: EveChargeComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
