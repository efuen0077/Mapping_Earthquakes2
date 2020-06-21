//will contain all the JavaScript and Leaflet code to create
//the map and add data to the map.
//Most of this code can be reused for many of the maps we’ll
//create later on in this module.
// Add console.log to check to see if our code is working.
//console.log("working");

//------add a map object-------
// Create the map object with a center and zoom level.

//let map = L.map('mapid').setView([36.1733, -120.1794], 7);



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
	center: [30, 30],
	zoom: 2,
	layers: [streets]
})


// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/efuen0077/Mapping_Earthquakes2/master/majorAirports.json";




// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);

  L.geoJson(data).addTo(map)
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