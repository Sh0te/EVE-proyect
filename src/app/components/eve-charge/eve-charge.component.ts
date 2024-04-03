import { Component, Input, NgModule } from '@angular/core';
import { BodyChargeComponent } from './body-charge/body-charge.component';
import { BuyBtnChargeComponent } from './buy-btn-charge/buy-btn-charge.component';
import { BalanceChargeComponent } from './balance-charge/balance-charge.component';
import { FooterMenuComponent } from "../global/footer-menu/footer-menu.component";

@Component({
  selector: 'app-eve-charge',
  standalone: true,
  templateUrl: './eve-charge.component.html',
  styleUrl: './eve-charge.component.css',
  imports: [BodyChargeComponent, BuyBtnChargeComponent, BalanceChargeComponent, FooterMenuComponent]
})
export class EveChargeComponent {

}
