if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
        if (this.parentNode) {
        this.parentNode.removeChild(this);
        }
    };
}

mapboxgl.accessToken = 'pk.eyJ1IjoiYXRvbXNwaGVyZSIsImEiOiJja2s3ZmM0am8wYzFoMm5tbzl1a2VnNjN1In0.ZmR4V7ks4h5gmrZiUhwTbA';

var bounds = [
    [-150, 15], // Southwest coordinates
    [-35, 55] // Northeast coordinates
];

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-104.9903, 39.7392],
    zoom: 6,
    maxBounds: bounds
});


var parks = {
    "type": "FeatureCollection",
    "features": [
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                -68.2733,
                44.3386
            ]
        },
        "properties": {
            "dose": "53 mrem",
            "name": "Acadia National Park",
            "state": "Maine",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                -109.5925,
                38.7331
            ]
        },
        "properties": {
            "dose": "140 mrem",
            "name": "Arches National Park",
            "state": "Utah",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                -102.3397,
                43.8554
            ]
        },
        "properties": {
            "dose": "84 mrem",
            "name": "Badlands National Park",
            "state": "South Dakota",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                -103.2502,
                29.2498
            ]
        },
        "properties": {
            "dose": "54 - 102 mrem",
            "name": "Big Bend National Park",
            "state": "Texas",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                -107.7416,
                38.5754
            ]
        },
        "properties": {
            "dose": "142 - 186 mrem",
            "name": "Black Canyon of the Gunnison National Park",
            "state": "Colorado",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                -112.1871,
                37.5930
            ]
        },
        "properties": {
            "dose": "156 - >186 mrem",
            "name": "Bryce Canyon National Park",
            "state": "Utah",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
                "coordinates": [
                    -109.9025,
                    38.2136
                ]
        },
        "properties": {
            "dose": "169 mrem",
            "name": "Canyonlands National Park",
            "state": "Utah",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                -111.1355,
                38.0877
            ]
        },
        "properties": {
            "dose": "142 mrem",
            "name": "Capitol Reef National Park",
            "state": "Utah",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    },
    {
    "type": "Feature",
    "geometry": {
            "type": "Point",
            "coordinates": [
                -112.8451,
                37.6347
            ]
        },
        "properties": {
            "dose": "125 - >186 mrem",
            "name": "Cedar Breaks National Monument",
            "state": "Utah",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    },
    {
    "type": "Feature",
    "geometry": {
            "type": "Point",
            "coordinates": [
                -119.7785,
                34.0069
            ]
        },
        "properties": {
            "dose": "58 mrem",
            "name": "Channel Islands National Park",
            "state": "California",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                -108.6939,
                39.0575
            ]
        },
        "properties": {
            "dose": "137 - 169 mrem",
            "name": "Colorado National Monument",
            "state": "Colorado",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                -80.7821,
                33.7948
            ]
        },
        "properties": {
            "dose": "51 mrem",
            "name": "Congaree National Park",
            "state": "South Carolina",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                -122.16847,
                42.86844
            ]
        },
        "properties": {
            "dose": "89 mrem",
            "name": "Crater Lake National Park",
            "state": "Oregon",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                -81.56781,
                41.28082
            ]
        },
        "properties": {
            "dose": "74 mrem",
            "name": "Cuyahoga Valley National Park",
            "state": "Ohio",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                -74.94425,
                41.10439
            ]
        },
        "properties": {
            "dose": "51 mrem",
            "name": "Delaware Water Gap National Recreation Area",
            "state": "Pennsylvania",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    },
    {
        "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                -104.7146,
                44.5902
            ]
        },
        "properties": {
            "dose": "77 - 93 mrem",
            "name": "Devils Tower National Monument",
            "state": "Wyoming",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    }

    ]
};

parks.features.forEach(function(park, i){
    park.properties.id = i;
});

map.on('load', function (e) {
    function addMarkers() {
        /* For each feature in the GeoJSON object above: */
        parks.features.forEach(function(marker) {
            /* Create a div element for the marker. */
            var el = document.createElement('div');
            /* Assign a unique `id` to the marker. */
            el.id = "marker-" + marker.properties.id;
            /* Assign the `marker` class to each marker for styling. */
            el.className = 'marker';
            
            /**
             * Create a marker using the div element
             * defined above and add it to the map.
            **/
            new mapboxgl.Marker(el, { offset: [0, -23] })
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);

            el.addEventListener('click', function(e){
                /* Fly to the point */
                flyToPark(marker);
                /* Close all other popups and display popup for clicked store */
                createPopUp(marker);
                /* Highlight listing in sidebar */
                var activeItem = document.getElementsByClassName('active');
                e.stopPropagation();
                if (activeItem[0]) {
                    let dropDown = activeItem[0].lastChild;
                    activeItem[0].classList.remove('active');
                    dropDown.style.maxHeight = null;
                }
                var listing = document.getElementById('listing-' + marker.properties.id);
                listing.scrollIntoView();
                listing.classList.add('active');
                var content = listing.lastChild;
                content.style.maxHeight = content.scrollHeight + "px";
            }); 

            var popup = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false
            });
            
            el.addEventListener('mouseenter', function(e){
                map.getCanvas().style.cursor = 'pointer';
                var coordinates = marker.geometry.coordinates.slice();
                var description = marker.properties.name;
                popup.setLngLat(coordinates).setHTML(description).addTo(map);
            });

            el.addEventListener('mouseleave', function(e) {
                map.getCanvas().style.cursor = '';
                popup.remove();
            });

        });
    }

    /* Add the data to your map as a layer */
    map.addSource('places', {
        type: 'geojson',
        data: parks
    });
    addMarkers();
    buildLocationList(parks);

    map.addSource("National_Park_Service_-_Park_-0an69k",{
        type: "vector", 
        url: "mapbox://atomsphere.cw4zue1g"
    })

    map.addLayer({
        'id': 'National_Park_Service_-_Park_',
        'type': 'fill',
        'source': "National_Park_Service_-_Park_-0an69k",
        "source-layer": "NPS_Park_Boundaries",
        'paint': {
            'fill-color': '#9edbad',
            'fill-opacity': 0.4
        },
        'filter': ['==', '$type', 'Polygon']
    });

    map.addSource("avg_val_year_2016_to_2020-8o6r2t",{
        type: "vector", 
        url: "mapbox://atomsphere.8e3tyxq6"
    })

    map.addLayer({
        'id': 'avg_val_year_2016_to_2020', 
        'type': 'circle', 
        'source': "avg_val_year_2016_to_2020-8o6r2t", 
        "source-layer": "avg_val_year_2016_to_2020-8o6r2t",
        'layout': {},
        paint: {
        'circle-color': [
            'interpolate',
            ['linear'],
            ['number', ['get', 'avg_value']],
            0, '#2DC4B2',
            30, '#3BB3C3',
            60, '#669EC4',
            90, '#8B88B6',
            120, '#A2719B',
            150, '#AA5E79'
        ],
        'circle-opacity': 0.8
        }
    });

});

document.getElementById('filters').addEventListener('change', function(e) {
    var year = e.target.value;
    // update the map filter
    if (year === 'all') {
        filterYear = ['!=', ['number', ['get', 'year']], 2021];
    } else if (year === '2016') {
        filterYear = ['match', ['get', 'year'], 2016, true, false];
    } else if (year === '2017') {
        filterYear = ['match', ['get', 'year'], 2017, true, false];
    } else if (year === '2018') {
        filterYear = ['match', ['get', 'year'], 2018, true, false];
    } else if (year === '2019') {
        filterYear = ['match', ['get', 'year'], 2019, true, false];
    } else if (year === '2020') {
        filterYear = ['match', ['get', 'year'], 2020, true, false];
    } else {
        console.log('error');
    }
    map.setFilter('avg_val_year_2016_to_2020', ['all', filterYear]);
});

function buildLocationList(data) {
    data.features.forEach(function(park, i){
        /**
         * Create a shortcut for `store.properties`,
         * which will be used several times below.
        **/
        var prop = park.properties;

        /* Add a new listing section to the sidebar. */
        var listings = document.getElementById('listings');
        var listing = listings.appendChild(document.createElement('div'));
        /* Assign a unique `id` to the listing. */
        listing.id = "listing-" + data.features[i].properties.id;
        listing.coordinates = data.features[i].geometry.coordinates;
        /* Assign the `item` class to each listing for styling. */
        listing.className = 'item';

        /* Add the link to the individual listing created above. */
        var link = listing.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';
        link.id = "link-" + prop.id;
        link.innerHTML = prop.name;

        /* Add details to the individual listing. */
        var details = listing.appendChild(document.createElement('div'));
        details.innerHTML = prop.state;
        if (prop.dose) {
            details.innerHTML += ' · ' + prop.dose;
        }

        var content = listing.appendChild(document.createElement('div'));
        content.className = 'content';
        var contentDetails = content.appendChild(document.createElement('p'));
        contentDetails.innerHTML = prop.description;
        
        listing.addEventListener('click', function(e){
            for (var i = 0; i < data.features.length; i++) {
                if (this.id === "listing-" + data.features[i].properties.id) {
                    var clickedListing = data.features[i];
                    flyToPark(clickedListing);
                    createPopUp(clickedListing);
                }
            }  
            var activeItem = document.getElementsByClassName('active');
            if (activeItem[0]) {
                let dropDown = activeItem[0].lastChild;
                dropDown.style.maxHeight = null;
                activeItem[0].classList.remove('active');
            }
            this.classList.add('active');
            var content = this.lastChild;
            content.style.maxHeight = content.scrollHeight + "px"
        });

        var popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
        });
        
        listing.addEventListener('mouseenter', function(e){
            map.getCanvas().style.cursor = 'pointer';
            var description = listing.firstChild.innerHTML;
            popup.setLngLat(listing.coordinates).setHTML(description).addTo(map);
        });

        listing.addEventListener('mouseleave', function(e) {
            map.getCanvas().style.cursor = '';
            popup.remove();
        });
    });
}   

var zoomThreshold = 5;
var sidebar = document.getElementById('sidebar');
var mapPanel = document.getElementById('map');
var sortConsole = document.getElementById('sortConsole');

map.on('zoom', function () {
    if (map.getZoom() > zoomThreshold) {
        mapPanel.style.width = '75%';
        mapPanel.style.float = 'left';
        sidebar.style.width = '25%';
        sidebar.style.float = 'left';
        sidebar.style.display = 'block';
        sortConsole.style.display = 'block'
    } else {
        mapPanel.style.width = '100%';
        mapPanel.style.float = 'none';
        sidebar.style.width = '0';
        sidebar.style.display = 'none';
        sidebar.style.float = 'none';
        sortConsole.style.display = 'none';
    }
});

function flyToPark(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 9
    });
}

function createPopUp(currentFeature) {
var popUps = document.getElementsByClassName('mapboxgl-popup');
/** Check if there is already a popup on the map and if so, remove it */
if (popUps[0]) popUps[0].remove();

var popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML('<h4>' + currentFeature.properties.name + '</h4>')
    .addTo(map);
}