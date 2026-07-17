import { Map } from 'maplibre-gl';
import naturalEarth from "./data/nd.geojson?url";
import AreaIup from "./data/area.geojson?url";

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
  })

 map.addSource('area', {
    type: 'geojson',
    data: AreaIup
  })

  map.addLayer({
    id: "area-iup",
    type: "fill",
    source: "area",
    paint: {
      'fill-color': '#00FF00',
      'fill-opacity': 0.5,
      'fill-outline-color': '#000000'
    }
  })

// Layer Raster
map.addSource("spongebob", {
  type: "image",
  url: "https://static.wikia.nocookie.net/cartoons/images/e/ed/Profile_-_SpongeBob_SquarePants.png",
  coordinates: [
    [79.16, -0.40], // top-left
    [94.18, -1.66], // top-right
    [94.65, -14.73], // bottom-right
    [72.97, -13.74] // bottom-left
  ]
})

map.addLayer({
  id: "spongebob-image",
  type: "raster",
  source: "spongebob",
})

});


