import { Map } from 'maplibre-gl';
import naturalEarth from "./data/nd.geojson?url";

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = "300px";
document.body.appendChild(mapElement);

const map = new Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/globe.json',
  center: [106.3343232, -6.1416728],
  zoom: 5,
});


map.on ('load', () => {

  map.addSource('kota', {
    type: 'geojson',
    data: naturalEarth
  });

  map.addLayer({
    id: "titik-kota",
    type: "circle",
    source: "kota",
    paint: {
      'circle-radius': 10,
      'circle-color': '#FF0000',
      'circle-stroke-width': 2,
      'circle-stroke-color': '#FFFFFF'
    }
  });
});