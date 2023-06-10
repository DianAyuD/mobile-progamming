import { Component, OnInit } from '@angular/core';
import { NFCLaunch } from 'capacitor-nfc-launch';
import { Geolocation } from '@capacitor/geolocation';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  map: any;
  constructor() {}

  async ngOnInit() {
    // await this.testNFC();
    await this.printCurrentPosition()
}

  async testNFC() {
    await NFCLaunch.addListener("message", (data: any) => {
      console.log(data.message); // Outputs: My example data
    });

}

    ionViewDidEnter() { this.leafletMap(); }

      leafletMap() {
        this.map = Leaflet.map('mapId').setView([28.644800, 77.216721], 5);
        Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'edupala.com © Angular LeafLet',
        }).addTo(this.map);

        Leaflet.marker([28.6, 77]).addTo(this.map).bindPopup('Delhi').openPopup();
        Leaflet.marker([34, 77]).addTo(this.map).bindPopup('Leh').openPopup();

        antPath([[28.644800, 77.216721], [34.1526, 77.5771]],
          { color: '#FF0000', weight: 5, opacity: 0.6 })
          .addTo(this.map);
      }

async printCurrentPosition () {
  const coordinates = await Geolocation.getCurrentPosition();

  console.log("Current position:", coordinates);
};

}
