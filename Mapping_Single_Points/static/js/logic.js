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

//-----skill drill 13.4.1------
 L.circle([29.7604, -95.3698], {
    color: 'yellow',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 300
}).addTo(map);

L.circleMarker([34.0522, -118.2437], {
    radius: 50,
    color: "yellow",
    fillcolor: '#ffffa1'
}).addTo(map);


let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //tileSize: 512,
    //zoomOffset: -1,
    //need the accessToken which is the value of our API key.
    accessToken: API_KEY
// Then we add our 'graymap' tile layer to our let map.
//"map" is our map object
}).addTo(map);