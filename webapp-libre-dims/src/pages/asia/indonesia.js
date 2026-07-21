import { Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { addKotaLayer, addPulauLayer } from '../../layer/vector';
import { addAttribution } from '../../controls/basicControls';
import { LogoHondaControl } from '../../controls/customLogoControls';

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = "300px";
document.body.appendChild(mapElement);

const map = new Map({
  container: 'map',
    style: 'https://demotiles.maplibre.org/style.json',
  center: [106.83, -6.19],
  zoom: 5,
  attributionControl: false
});


map.on("load", () => {
  addKotaLayer(map);
  addPulauLayer(map);
});

addAttribution(map, "Natural Earth");
map.addControl(new LogoHondaControl(), "top-left")