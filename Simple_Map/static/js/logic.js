//will contain all the JavaScript and Leaflet code to create
//the map and add data to the map.
//Most of this code can be reused for many of the maps we’ll
//create later on in this module.
// Add console.log to check to see if our code is working.
console.log("working");

//------add a map object-------
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

//alternate
// Create the map object with a center and zoom level.
//let map = L.map("mapid", {
  //  center: [
    //  40.7, -94.5
   // ],
   // zoom: 4
  //});

  //This method is useful when we need to add multiple
  //tile layers, or a background image of our map(s),
  //which we will do later in this module.

//----Add a Tile Layer of Our Map----
//**this is used to load & display a tile layer on the map
//TWO OPTIONS
//Option 1. 
//Option 2.

//------OPTION 1: Use the Leaflet Documentation-------

//assign titlelayer() method to variable 'streets'
//we need two URLs --> API URL w reference to access token, OpenStreetMap URL
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
   // maxZoom: 18,
    //assign id attribute to show the streets on the map.
   // id: 'mapbox.streets',
   
    //need the accessToken which is the value of our API key.
  //  accessToken: API_KEY
// Then we add our 'graymap' tile layer to our let map.
//"map" is our map object

//}).addTo(map);

//To change the map’s style, change the map id using
//the list of Mapbox ids below:

//mapbox.streets
//mapbox.light
//mapbox.dark
//mapbox.satellite
//mapbox.streets-satellite
//mapbox.wheatpaste
//mapbox.streets-basic
//mapbox.comic
//mapbox.outdoors
//mapbox.run-bike-hike
//mapbox.pirates
//mapbox.emerald
//mapbox.high-contrast

//-----------------end of option 1-----------------------

//------OPTION 2: Use the Mapbox Styles API-------
//edit the URL in the Leaflet titleLayer()
//go to Mapbox Glossary > Static Tiles API
//https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //tileSize: 512,
    //zoomOffset: -1,
    //need the accessToken which is the value of our API key.
    accessToken: API_KEY
// Then we add our 'graymap' tile layer to our let map.
//"map" is our map object
}).addTo(map);
//to change the map style go to "Static Tiles API Documentation", then click "Styles", 
//use styles given in URL
//i.e. mapbox://styles/mapbox/dark-v10, we just use "dark-v10"
//we will use Statiuc Tiles API format in the Leaflet titleLayer() method
//---------we're using Option 2! ----------
//-------WE JUST CREATED OUR FIRST MAP--------------
