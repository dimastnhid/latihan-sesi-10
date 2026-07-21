import { AttributionControl } from 'maplibre-gl';

export function addAttribution(map, customText = '') {
  const attribution = new AttributionControl({
    compact: true,
    customAttribution: customText
  });

  map.addControl(attribution, 'bottom-right');
}