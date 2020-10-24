var map;
var InfoObject = [];
var centreCoords = {
    lat: 22.9734, 
    lng: 78.6569
};

var icons = {
    destination: {
        icon: 'https://img.icons8.com/ios/50/000000/sunbathe.png'
    },
    hotel: {
        icon: 'https://img.icons8.com/ios-filled/50/000000/5-star-hotel--v1.png'
    }
};

var markersOnMap = [
    {
    placeName: 'Day 1 : Gwalior Fort',
    url: 'https://en.wikipedia.org/wiki/Gwalior_Fort',
        latLng:
        [{lat: 26.2313, lng: 78.1695}],
        type: 'destination'},

    {
    placeName: 'Day 2 : Kandariya Mahadev Temple, Khajuraho',
    url: 'https://en.wikipedia.org/wiki/Kandariya_Mahadeva_Temple',
    latLng:
        [{lat: 24.8530, lng: 79.9197}],
        type: 'destination'},

    {
    placeName: 'Day 3 : Dhoopgarh, Pachmarhi',
    url: 'https://en.wikipedia.org/wiki/Pachmarhi',
    latLng:
        [{lat: 22.4674,lng: 78.4346}],
        type: 'destination'},

    {
    placeName: 'Day 4 : Marble Rocks, Jabalpur',
    url: 'https://en.wikipedia.org/wiki/Marble_Rocks',
    latLng:
       [{lat: 23.1306,lng: 79.8024}],
        type: 'destination'},

    {
    placeName: 'Day 5 : Kanha National Forest',
    url: 'https://en.wikipedia.org/wiki/Kanha_Tiger_Reserve',
    latLng:
        [{lat: 22.3341,lng: 80.6112}],
        type: 'destination'},

    {
    placeName: 'Day 6: Pench National Forest',
    url: 'https://en.wikipedia.org/wiki/Pench_National_Park',
        latLng:
        [{lat: 21.6495,lng: 79.2451}],
        type: 'destination'},

    {
    placeName: 'Hotel - Courtyard by Marriot',
    url: 'https://www.marriott.com/hotels/hotel-photos/bhocy-courtyard-bhopal/',
    latLng:
        [{lat: 23.2332,lng: 77.4297}],
        type: 'hotel'},

    ]

    window.onload = function () {
    initMap();
};

function addMarkerInfo() {
    for (var i = 0; i < markersOnMap.length; i++){
        var contentString = `<h5> ${markersOnMap[i].placeName} </h5> <a href="${markersOnMap[i].url}" target="_blank"> ${markersOnMap[i].url} </a>`;
        const marker = new google.maps.Marker({
            position: markersOnMap[i].latLng[0],
            icon: icons[markersOnMap[i].type].icon,
            map: map
        });

    const infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxwidth: 200,
    }); 

    marker.addListener('click', function()
    {
    closeOtherInfo();
    infowindow.open(map, marker);
    InfoObject[0] = infowindow;
    });

}

}

    function closeOtherInfo() {
    if (InfoObject.length > 0) {
        InfoObject[0].set("marker", null);
        InfoObject[0].close();
        InfoObject[0].length = 0;
    }
}

function initMap() {
   map = new google.maps.Map(document.getElementById("map"), {
        center: centreCoords,
        zoom: 6,
          });
          addMarkerInfo();
        }
