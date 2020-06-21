let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //opacity: 0.5,
    //tileSize: 512,
    //zoomOffset: -1,
    //need the accessToken which is the value of our API key.
    accessToken: API_KEY
// Then we add our 'graymap' tile layer to our let m ap.
//"map" is our map object
});


// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets,
  };

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [39.5, -98.5],
  zoom: 3,
  //weight: 1,
	layers: [streets]
});


// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

//----------------------
// Accessing the Toronto airline routes GeoJSON URL.
//let torontoHoods = "https://raw.githubusercontent.com/efuen0077/Mapping_Earthquakes/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json";


 // Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
// This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into a function
// to calculate the radius.
function styleInfo(feature) {
  return {
    opacity: 1,
    fillOpacity: 1,
    fillColor: "#ffae42",
    color: "#000000",
    radius: getRadius(),
    stroke: true,
    weight: 0.5
  };
}
  // This function determines the radius of the earthquake marker based on its magnitude.
// Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
function getRadius(magnitude) {
  if (magnitude === 0) {
    return 1;
  }
  return magnitude * 4;
}

  L.geoJson(data, {

    // We turn each feature into a circleMarker on the map.
    
    pointToLayer: function(feature, latlng) {
              console.log(data);
              return L.circleMarker(latlng);
            },
    // We set the style for each circleMarker using our styleInfo function.
        style: styleInfo
        }).addTo(map);
});




// Grabbing our GeoJSON data.
//d3.json(torontoHoods).then(function(data) {
  //console.log(data);
// Creating a GeoJSON layer with the retrieved data.
//L.geoJSON(data, {
//  color: "blue",
//  fillColor: "yellow",//
  //weight: 1,
 // onEachFeature: function(feature, layer) {
   //layer.bindPopup("<h3> Neighborhood: " + feature.properties.AREA_NAME);
 // }
//}
//)
//.addTo(map);
//});



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