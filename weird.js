//Rajwinder Singh
let url = 'https://rajwinder17900.github.io/JSLab10/products.json';


let header = document.querySelector('header');
let section = document.querySelector('section');

//using xhr object
let request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.send();
request.onload = function() {
    let products = request.response;
    populateHeader(products);
    weirdDeals(products);
};


function populateHeader(jsonObj) {
    let headerHeading = document.createElement('h1');
    headerHeading.textContent = jsonObj['companyName'];
    header.appendChild(headerHeading);
    let headerPara = document.createElement('p');
    headerPara.textContent = jsonObj['headOffice'];
    header.appendChild(headerPara);
}


//The major function showing everything
function weirdDeals(jsonObj) {
    let topDeals = jsonObj.topDeals;
    let section = document.querySelector('section');
    for (let i = 0; i < topDeals.length; i++) {
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let ul = document.createElement('ul');

        img.setAttribute('src', 'https://rajwinder17900.github.io/JSLab10/images/' + topDeals[i].image);
        img.setAttribute('alt', topDeals[i].image);
        h2.textContent = topDeals[i].name;
        p1.textContent = 'Price ' + topDeals[i].price;
        p2.textContent = 'Description ' + topDeals[i].description;
        let features = topDeals[i].features;
        for (let j = 0; j < features.length; j++) {
            let li = document.createElement('li');
            li.textContent = features[j];
            ul.appendChild(li);
        }

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(ul);
        section.appendChild(article);

    }
}

//implementing FULLSCREEN Api
function getFullScreen(){
    return document.fullscreenElement
    || document.webkitFullscreenElement
    || document.mozFullscreenElement
}

function exitFullScreen(){
    if(getFullScreen()){
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen().catch(console.log);
    }
}

document.addEventListener('dblclick', () => {
    exitFullScreen();
});


//Implementing google map api as well, means using 2 api here
//FULLSCREEN API and GOOGLE MAP API
function initMap() {
    let restPlace = {
        lat: 44.4083621,
        lng: -79.6709766
    };

    let div = document.querySelector('div');

    //create new map object
    let map = new google.maps.Map(div, {
        zoom: 14,
        center: restPlace,
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#242f3e"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#746855"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#242f3e"
                }]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#d59563"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#d59563"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#263c3f"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#6b9a76"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#38414e"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#212a37"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9ca5b3"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#746855"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#1f2835"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#f3d19c"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#2f3948"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#d59563"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#17263c"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#515c6d"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#17263c"
                }]
            }
        ]
    });

    //create new marker object
    let marker = new google.maps.Marker({
        position: restPlace,
        animation: google.maps.Animation.BOUNCE,
        map: map,
        label: {
            color: 'white',
            fontWeight: 'bold',
            text: 'MY HOUSE',
        }
    });
}

