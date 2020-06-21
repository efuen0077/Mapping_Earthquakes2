//MAP 1
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

//MAP 2
// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

//MAP 3
//create light map
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

//Step 9: Create a base layer that holds ALL 3 MAPS
let baseMaps = {
  //Step 10: make streets the default map
    "Streets": streets,
    "Satellite": satelliteStreets,
    "Light": light,
  };

// Create the earthquake layer for our map.
let earthquakes = new L.layerGroup();

//Step 6: Create the Tectonic Plates layer for our map.
let tectonicPlates = new L.layerGroup();

// We define an object that contains the overlays.
// This overlay will be visible all the time.

//Step 7: Add the tectonic plate layer to the overlays so that they
//show up in the tile layer, as shown in the image below.
let overlays = {
  Tectonic_Plates: tectonicPlates,
  Earthquakes: earthquakes
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [39.5, -98.5],
  zoom: 3,
  //weight: 1,
	layers: [streets]
});


// Pass our map layers into our layers control and add the layers control to the map.
// Then we add a control to the map that will allow the user to change
// which layers are visible.
L.control.layers(baseMaps, overlays).addTo(map);

//Step 3: Use the GeoJSON/PB2002_boundaries.json data from the
//GitHub repository (Links to an external site.) for
//the tectonic plate data.
let tectonicData = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";

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
    fillColor: getColor(feature.properties.mag),
    color: "#000000",
    radius: getRadius(feature.properties.mag),
    stroke: true,
    weight: 0.5
  };
}

// This function determines the color of the circle based on the magnitude of the earthquake.
function getColor(magnitude) {
  if (magnitude > 5) {
    return "#ea2c2c";
  }
  if (magnitude > 4) {
    return "#ea822c";
  }
  if (magnitude > 3) {
    return "#ee9c00";
  }
  if (magnitude > 2) {
    return "#eecc00";
  }
  if (magnitude > 1) {
    return "#d4ee00";
  }
  return "#98ee00";
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
        style: styleInfo,

      // We create a popup for each circleMarker to display the magnitude and
    //  location of the earthquake after the marker has been created and styled.
    onEachFeature: function(feature, layer) {
      layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
    }
        }).addTo(earthquakes);

        //then we add the earthquake & tectonic plates layer to our map
        //tectonicPlates.addTo(map);
        earthquakes.addTo(map);
});

//Step 4. Place the d3.json() call with the L.geoJSON()
//layer for the tectonic plate data at the end of your
//code from your Earthquakes_past7days branch.

// Grabbing our GeoJSON data.
d3.json(tectonicData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {
  //orange stands out on ALL maps.
  color: "orange",
  fillColor: "gray",
  weight: 3,
  onEachFeature: function(feature, layer) {
   layer.bindPopup("<h3> Neighborhood: " + feature.properties.AREA_NAME);
  }
}).addTo(tectonicPlates);
//Step 8: Add the tectonic plate and earthquake
//data to the map for any map style choice.
tectonicPlates.addTo(map);
});

var legend = L.control({position: 'bottomright'});

legend.onAdd = function () {
    let div = L.DomUtil.create("div", "info legend");
    const magnitudes = [0, 1, 2, 3, 4, 5];
    const colors = [
      "#98ee00",
      "#d4ee00",
      "#eecc00",
      "#ee9c00",
      "#ea822c",
      "#ea2c2c"
    ];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < magnitudes.length; i++) {
      console.log(colors[i]);
        div.innerHTML +=
        "<i style='background: " + colors[i] + "'></i> " + 
            magnitudes[i] + (magnitudes[i + 1] ? '&ndash;' + magnitudes[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);