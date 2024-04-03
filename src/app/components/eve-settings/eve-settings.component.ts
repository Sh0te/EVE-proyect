import { Component } from '@angular/core';
import { FooterMenuComponent } from "../global/footer-menu/footer-menu.component";
import { PersonalQualitiesComponent } from "./personal-qualities/personal-qualities.component";
import { MoreSettingsComponent } from "./more-settings/more-settings.component";

@Component({
  selector: 'app-eve-settings',
  standalone: true,
  templateUrl: './eve-settings.component.html',
  styleUrl: './eve-settings.component.css',
  imports: [FooterMenuComponent, PersonalQualitiesComponent, MoreSettingsComponent]
})
export class EveSettingsComponent {

}
