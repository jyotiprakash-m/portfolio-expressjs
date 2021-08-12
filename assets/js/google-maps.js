function initMap() {
    // Latitude and Longitude
    var myLatLng = { lat: 21.9320, lng: 86.7466 };

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 15,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Bhubaneswar,Odisha,India' // Title Location
    });
}