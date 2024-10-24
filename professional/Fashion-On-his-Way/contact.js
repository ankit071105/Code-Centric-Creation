function initMap() {
    const iterLocation = { lat: 20.2961, lng: 85.8245 }; // Coordinates for ITER, Bhubaneswar
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: iterLocation
    });
    const marker = new google.maps.Marker({
        position: iterLocation,
        map: map,
        title: 'ITER, Bhubaneswar, Odisha'
    });
}

window.onload = initMap;
