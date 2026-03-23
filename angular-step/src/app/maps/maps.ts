import { Component, AfterViewInit } from '@angular/core';
import { environment } from '../../environments/environment';

declare var google: any;

@Component({
  selector: 'app-maps',
  standalone: false,
  templateUrl: './maps.html',
  styleUrl: './maps.css',
})

//perguntar sobre afterviewinit, aftercontentInit e oninit, 
// qual usar para carregar o mapa? 
// qual a diferença entre eles? 
// qual o mais recomendado para esse caso?
export class Maps implements AfterViewInit {
  private map: any;
  private directionsService: any;
  private directionsRenderer: any;

  ngAfterViewInit() {
    this.loadGoogleMapsScript();
  }

  private loadGoogleMapsScript() {
    if (typeof google !== 'undefined') {
      this.initMap();
      return;
    }

    const apiKey = environment.googleMapsApiKey;
    if (!apiKey) {
      console.error('Google Maps API key não configurada. Rode npm run sync-env e reinicie.');
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => this.initMap();
    document.head.appendChild(script);
  }

  private initMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    this.map = new google.maps.Map(mapElement, {
      center: { lat: -23.5505, lng: -46.6333 }, // Default to São Paulo or something
      zoom: 8,
    });

    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.directionsRenderer.setMap(this.map);

    // Get user location
    this.getUserLocation();

    // Add event listener to button
    const searchBtn = document.getElementById('search-btn');
    if (searchBtn) {
      searchBtn.addEventListener('click', () => this.calculateRoute());
    }
  }

  private getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.map.setCenter(pos);
          new google.maps.Marker({
            position: pos,
            map: this.map,
            title: 'Sua localização',
          });
        },
        () => {
          console.error('Erro ao obter localização');
        }
      );
    } else {
      console.error('Geolocalização não suportada');
    }
  }

  private calculateRoute() {
    const destinationInput = (document.getElementById('destination') as HTMLInputElement).value;
    if (!destinationInput) return;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const origin = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          const request = {
            origin: origin,
            destination: destinationInput,
            travelMode: google.maps.TravelMode.DRIVING,
          };

          this.directionsService.route(request, (result: any, status: any) => {
            if (status === google.maps.DirectionsStatus.OK) {
              this.directionsRenderer.setDirections(result);
            } else {
              console.error('Erro ao calcular rota:', status);
            }
          });
        },
        () => {
          console.error('Erro ao obter localização para rota');
        }
      );
    }
  }
}
