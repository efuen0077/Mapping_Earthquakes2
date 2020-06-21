//will contain all the JavaScript and Leaflet code to create
//the map and add data to the map.
//Most of this code can be reused for many of the maps we’ll
//create later on in this module.
// Add console.log to check to see if our code is working.
console.log("working");

//------add a map object-------
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);


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

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //tileSize: 512,
    //zoomOffset: -1,
    //need the accessToken which is the value of our API key.
    accessToken: API_KEY
// Then we add our 'graymap' tile layer to our let m ap.
//"map" is our map object
}).addTo(map);