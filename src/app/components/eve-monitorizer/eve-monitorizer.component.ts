import { Component } from '@angular/core';
import { FooterMenuComponent } from "../global/footer-menu/footer-menu.component";
import { TotalBatteryComponent } from "./total-battery/total-battery.component";
import { BodyMonitorizerMoreComponent } from "./body-monitorizer-more/body-monitorizer-more.component";
import { BubblesComponent } from "./bubbles/bubbles.component";
import { ShowmoreBtnComponent } from "./showmore-btn/showmore-btn.component";

@Component({
  selector: 'app-eve-monitorizer',
  standalone: true,
  templateUrl: './eve-monitorizer.component.html',
  styleUrl: './eve-monitorizer.component.css',
  imports: [FooterMenuComponent, TotalBatteryComponent, BodyMonitorizerMoreComponent, BubblesComponent, ShowmoreBtnComponent]
})
export class EveMonitorizerComponent {

}
