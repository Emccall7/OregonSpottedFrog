mapboxgl.accessToken = 'pk.eyJ1IjoiZWRlbm1jY2FsbCIsImEiOiJja214eTR3bGMwMGM2MnB0ZGs5dHh1eGtzIn0.S-fSav0WfGimuhXNj2ErEQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/edenmccall/clwp85vay00yo01q14qie2eva',
    center: [-122.6750, 45.5051], // longitude, latitude of initial map center
    zoom: 9
});

map.on('load', function () {
    try {
        const labels = ['place-labels', 'transit-labels', 'poi-labels', 'natural-labels', 'road-labels']; // Replace with actual IDs from your style
        labels.forEach(function(label) {
            if (map.getLayer(label)) { // Check if layer exists before trying to modify it
                map.setLayoutProperty(label, 'visibility', 'none');
            } else {
                console.warn('Layer not found:', label); // Warn if layer is not found
            }
        });
    } catch (error) {
        console.error('Error modifying layers:', error);
    }
});
