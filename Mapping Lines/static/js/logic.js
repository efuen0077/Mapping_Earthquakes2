//will contain all the JavaScript and Leaflet code to create
//the map and add data to the map.
//Most of this code can be reused for many of the maps we’ll
//create later on in this module.
// Add console.log to check to see if our code is working.
console.log("working");

//------add a map object-------
// Create the map object with a center and zoom level.

//let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the line.
let line = [
  //LAX
  [33.9416, -118.4085],
  //SALT LAKE CITY INTERNATIONAL AIRPORT
  [37.6213, -122.3790],
  //SEATTLE TACOMA INTERNATIONAL AIRPORT
  [40.7899, -111.9791],
  //SFO
  [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "yellow"
}).addTo(map);

let newline = [
  //SFO
  [47.4502, -122.3088],
  //Austin-Bergstrom International Airport (AUS)
  [30.1975, -97.6664],
  //Toronto Pearson International Airport (YYZ)
  [43.6777, -79.6248],
  //JFK Airport
  [40.6413, -73.7781]
  ];

L.polyline(newline, {
  color: "blue",
  opacity: 0.5,
  weight: 4
}).addTo(map);


//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

//let's make it a circle.
//L.circle([34.0522, -118.2437], {
  //  radius: 1000
 //}).addTo(map);

//-----multiple points------
// Get data from cities.js
let cityData = cities;

  // Loop through the cities array and create one marker for each city.
// Loop through the cities array and create one marker for each city.
//cityData.forEach(function(city) {
//	console.log(city)
  //  L.circleMarker(city.location, {
   //     radius: city.population/100000
  //  })
   // .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population: " + city.population.toLocaleString() + "</h3>")
  //  .addTo(map);
//});

//----13.4.2 SKILL DRILL----
cityData.forEach(function(city) {
	console.log(city)
    L.circleMarker(city.location, {
        color: 'orange',
        lineweight: 4,
        fillColor: '#FFA500',
        radius: city.population/200000
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population: " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    opacity: 0.5,
    //tileSize: 512,
    //zoomOffset: -1,
    //need the accessToken which is the value of our API key.
    accessToken: API_KEY
// Then we add our 'graymap' tile layer to our let m ap.
//"map" is our map object
}).addTo(map);