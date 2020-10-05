var map;
var InfoObject = [];
var centreCoords = {
    lat: 20.5937, 
    lng: 78.9629
};

var icons = {
    destination: {
        icon: 'https://img.icons8.com/color/30/000000/sunbathe.png'
    },
    hotel: {
        icon: 'https://img.icons8.com/ultraviolet/40/000000/5-star-hotel.png'
    }
};

var markersOnMap = [
    {
    placeName: 'Gwalior Fort, Gwalior',
    latLng:
        [{lat: 24.8318, lng: 79.9199}],
        type: 'destination'},

    {
    placeName: 'Kandariya Mahadev Temple, Khajuraho',
    latLng:
        [{lat: 24.8530, lng: 79.9197}],
        type: 'destination'},

    {
    placeName: 'Dhoopgarh, Pachmarhi',
    latLng:
        [{lat: 22.4674,lng: 78.4346}],
        type: 'destination'},

    {
    placeName: 'Marble Rocks, Jabalpur',
    latLng:
       [{lat: 23.1815,lng: 79.9864}],
        type: 'destination'},

    {
    placeName: 'Kanha National Forest',
    latLng:
        [{lat: 21.6495,lng: 79.2451}],
        type: 'destination'},

    {
    placeName: 'Pench National Forest',
    latLng:
        [{lat: 22.3345,lng: 80.6115}],
        type: 'destination'},

    {
    placeName: 'Hotel - Courtyard by Marriot',
    latLng:
        [{lat: 23.2332,lng: 77.4297}],
        type: 'hotel'},

    ]

    window.onload = function () {
    initMap();
};

function addMarkerInfo() {
    for (var i = 0; i < markersOnMap.length; i++){
        var contentString = '<h3>' + markersOnMap[i].placeName + '</h3>';
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
        zoom: 5,
          });
          addMarkerInfo();
        }
