$(document).ready(function () {
    /*====================================
        Google Map with Street View and Navigation
    ======================================*/
    (function () {
        // Initialize the main map
        var map = new GMaps({
            el: '#myMap', // Main map container
            lat: 30.386953, // Latitude for Bhauwala, Uttarakhand
            lng: 77.921155, // Longitude for Bhauwala, Uttarakhand
            scrollwheel: true, // Enable mouse scroll zooming
            zoom: 15, // Initial zoom level
            zoomControl: true, // Enable zoom controls
            panControl: true, // Enable panning controls
            streetViewControl: true, // Enable Street View control
            mapTypeControl: true, // Enable map type switching (e.g., roadmap, satellite)
            overviewMapControl: true, // Enable mini-map
            mapType: 'roadmap' // Set the initial map type
        });

        // Add a default marker
        map.addMarker({
            lat: 30.386953,
            lng: 77.921155,
            title: "Rana Complex, Bhauwala",
            animation: google.maps.Animation.DROP
        });

        // Initialize Street View
        var panorama = GMaps.createPanorama({
            el: '#streetView', // Street View container
            lat: 30.386953,
            lng: 77.921155,
            pov: {
                heading: 90, // Camera facing direction
                pitch: 0 // Camera tilt
            },
            scrollwheel: true // Enable scrolling in Street View
        });
    })();
});
