navigator.geolocation.getCurrentPosition(
    function (position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        Init(latitude, longitude);
    }
);

function Init(latitude, longitude) {
    const CurentPosition = [longitude, latitude]
    const Kiev = [30.523132, 50.449279];

    function StartMap(){
        let map = L.map('map').setView([50.449279, 30.523132], 20);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        return map;
    }


    function AddMarker(map){
        var myIcon = L.icon({
    iconUrl: '/static/js/finish_icon_1.png',
    iconSize: [50, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
});

let mark = L.marker([50.449279, 30.523132], {icon: myIcon}).addTo(map)
         .bindPopup("<h1>Taras</h1><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus est, eum facere facilis illo ipsam iste maiores officia optio quam quibusdam quidem, sed soluta. Aperiam eveniet modi praesentium saepe sapiente.<img style='height: 200px;width: 300px' src='/static/js/kafedralnyj-sobor.jpg' > ")

    }


    function AddCircle(map){
        var circle = L.circle([50.449279, 30.523132], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.1,
            radius: 500
        }).addTo(map);
        }
    let map = StartMap();
    AddMarker(map);
    AddCircle(map);


}