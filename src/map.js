// Instantiate a map and platform object:
/*var platform = new H.service.Platform({
    'apikey': '{XnB-OTEk-T1WvBsJ6rQG4CctOrapAXUGkB5taUhyXNM}'
  });
  // Retrieve the target element for the map:
  var targetElement = document.getElementById('mapContainer');
  
  // Get default map types from the platform object:
  var defaultLayers = platform.createDefaultLayers();
  
  // Instantiate the map:
  var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
      zoom: 10,
      center: { lat: 52.51, lng: 13.4 }
    });
  
  // Create the parameters for the reverse geocoding request:
  var reverseGeocodingParameters = {
        prox: '52.5309,13.3847,150',
        mode: 'retrieveAddresses',
        maxresults: 1
      };
  
  // Define a callback function to process the response:
  function onSuccess(result) {
    var location = result.Response.View[0].Result[0];
  
    // Create an InfoBubble at the returned location with
    // the address as its contents:
    ui.addBubble(new H.ui.InfoBubble({
        lat: location.Location.DisplayPosition.Latitude,
        lng: location.Location.DisplayPosition.Longitude
       }, { content: location.Location.Address.Label }));
  };
  
  // Get an instance of the geocoding service:
  var geocoder = platform.getGeocodingService();
  
  // Call the geocode method with the geocoding parameters,
  // the callback and an error callback function (called if a
  // communication error occurs):
  geocoder.reverseGeocode(
      reverseGeocodingParameters,
      onSuccess,
      function(e) { alert(e); });*/
  

export const localization = () =>{

  window.location.hash = '#/localizacion';
  const platform = new H.service.Platform({ apikey: 'XnB-OTEk-T1WvBsJ6rQG4CctOrapAXUGkB5taUhyXNM' });
  const defaultLayers = platform.createDefaultLayers();
  const map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map, {
    center: { lat: 37.773972, lng: -122.431297 },
    zoom: 13,
    pixelRatio: window.devicePixelRatio || 1
  });
  window.addEventListener('resize', () => map.getViewPort().resize());
  const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  const ui = H.ui.UI.createDefault(map, defaultLayers);
  
  //Begin geocoding
  const searchText = '1070 Lombard Street, San Francisco';
  const geocoder = platform.getGeocodingService();
  geocoder.geocode({ searchText }, result => {
    const location = result.Response.View[0].Result[0].Location.DisplayPosition;
    const { Latitude : lat, Longitude: lng } = location;
    const marker = new H.map.Marker({ lat, lng });
    map.addObject(marker);
  });

  
  
  

  return map
}
