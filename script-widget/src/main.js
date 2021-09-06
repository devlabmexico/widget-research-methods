(function () {
    // 1. Manage resource with js and bundling tools
    const link = document.createElement( "link" );
    link.href = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";
    link.crossOrigin = "";
    link.integrity = "sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
    document.getElementsByTagName( "head" )[0].appendChild( link );

    const script = document.createElement('script')
    script.setAttribute('src','https://unpkg.com/leaflet@1.7.1/dist/leaflet.js')
    script.setAttribute('integrity','sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==')
    script.setAttribute('crossorigin','')
    document.body.appendChild(script);

    // 2. Specify the the template
    const template = "<h2>Widget injected by js</h2>" +
        '<div id="mapid" style="height: 180px"></div>' +
        ''

    document.getElementById('script-container').innerHTML = template;

    script.onload = function() {
        const mymap = L.map('mapid').setView([51.505, -0.09], 13);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1
        }).addTo(mymap);
    }


})();

