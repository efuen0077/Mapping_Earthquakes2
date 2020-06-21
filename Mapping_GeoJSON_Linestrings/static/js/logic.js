

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v9/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    opacity: 0.5,
    //tileSize: 512,
    //zoomOffset: -1,
    //need the accessToken which is the value of our API key.
    accessToken: API_KEY
// Then we add our 'graymap' tile layer to our let m ap.
//"map" is our map object
});


// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    Street: streets,
    Dark: dark
  };

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [44.0, -80.0],
	zoom: 2,
	layers: [streets]
})


// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/efuen0077/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/torontoRoutes.json";


// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  color: "#ffffa1",
  weight: 2,
  onEachFeature: function(feature, layer) {
    layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr><h3> Destination: "
    + feature.properties.dst + "</h3");
  }
}
)
.addTo(map);
});



// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport).addTo(map);


//let's bind our popup
// Grabbing our GeoJSON data.
//L.geoJson(sanFranAirport, {
  //  // We turn each feature into a marker on the map.
    //pointToLayer: function(feature, latlng) {
//
    //  console.log(feature);
  //    return L.marker(latlng)
      //.bindPopup("<h2>" + "Airport code: SFO" + "</h2> <hr> <h3> " + "Airport name: San Francisco International Airport "+ "</h3>")
  //  }

  //}).addTo(map);


  //L.geoJson(sanFranAirport, {
    //onEachFeature: function(feature, layer) {
      //  console.log(layer)
   //   layer.bindPopup();
    // }
//});