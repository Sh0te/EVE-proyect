import { Routes } from '@angular/router';
import { EveChargeComponent } from './components/eve-charge/eve-charge.component';
import { EveMapComponent } from './components/eve-map/eve-map.component';
import { EveMonitorizerComponent } from './components/eve-monitorizer/eve-monitorizer.component';
import { EveSettingsComponent } from './components/eve-settings/eve-settings.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: 'eve-map', component: EveMapComponent },
  { path: 'eve-charge', component: EveChargeComponent },
  { path: 'eve-monitorizer', component: EveMonitorizerComponent },
  { path: 'eve-settings', component: EveSettingsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent }
];
