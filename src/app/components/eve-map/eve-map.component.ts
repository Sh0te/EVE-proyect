import { Component } from '@angular/core';
import { FooterMenuComponent } from "../global/footer-menu/footer-menu.component";
import { StationsComponent } from "./stations/stations.component";
import { SearchComponent } from "./search/search.component";
import { MapComponent } from "./map/map.component";

@Component({
  selector: 'app-eve-map',
  standalone: true,
  templateUrl: './eve-map.component.html',
  styleUrl: './eve-map.component.css',
  imports: [FooterMenuComponent, StationsComponent, SearchComponent, MapComponent]
})
export class EveMapComponent {

}
