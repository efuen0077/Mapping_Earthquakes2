# Mapping_Earthquakes2
## NOTE: Challenge Code is in "Earthquake_Challenge_Final_Official" folder.

## Challenge
### Background
To illustrate the severity of the earthquakes in relation to the tectonic plates, you’ll need to log in to GitHub and access the tectonic plate data from this GitHub repository. (Links to an external site.) You will also need to make an API call to the tectonic plate data using d3.json(), and then add the data as an overlay to the map using the L.geoJSON() layer. In addition to the streets and satelliteStreets maps, you’ll need to add a third map style of your choosing. All map styles must be added to the base layer so that they show up on the map to allow the user to change which layers are visible.

### Goals
Use d3.json() to get tectonic plate data and add the data using the L.geoJSON() layer.
Style the tectonic plate LineString data to stand out on the map.
Add the tectonic plate data as an overlay with the earthquake data.
Add a third map style to allow the user to select from three different maps.

### Explanation of Code
The third map for our list of maps to select from is "light," which has the official style name: "light-v10." In order for this to show up on our baseMap, it needed to be added to our baseMaps variable. We want this to show up as the THIRD option. Therefore, it was necessary to ass this at the very end of out list (i.e. let baseMaps = {"Streets": streets, "Satellite": satelliteStreets, "Light": light,};).

I also needed to add the "Tectonic_Plates" layer by setting it up as a new L.layerGroup(). This variable was, then, used to set up out overlays. After that, I needed to set up out link to the tectonicData. The color "orange" stood out the best throughout ALL maps. A weight of "3" was necessary to make the lines indicating where the tectonic plates are to be thicker and, thus, more visible. This was added to the tectonicPlates layer and then added to the map so it could be used for future selection.

#### satellight
<img width="1440" alt="Earthquakes_ _tectonicPlates" src="https://user-images.githubusercontent.com/62089134/85221052-9456b280-b365-11ea-9d18-d8b049f1bdc1.png">
#### streets
<img width="1440" alt="3maps_challenge" src="https://user-images.githubusercontent.com/62089134/85221083-dda70200-b365-11ea-8e4c-8ec8c61d6eeb.png">
#### light
<img width="1440" alt="3maps_light" src="https://user-images.githubusercontent.com/62089134/85221084-ded82f00-b365-11ea-8327-6b40f92e65dc.png">

