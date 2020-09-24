function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
               
                center: {lat: 20.5937, lng: 78.9629},
                 zoom: 5
            });

            
            addMarker({lat: 26.2183,lng: 78.1828});
            addMarker({lat: 24.8318,lng: 79.9199});
            addMarker({lat: 22.4674,lng: 78.4346});
            addMarker({lat: 23.1815,lng: 79.9864});
            addMarker({lat: 21.6495,lng: 79.2451});
            addMarker({lat: 22.3345,lng: 80.6115});    


            function addMarker(coords){
                var marker = new google.maps.Marker({
                    position:coords,
                    map:map
                });
            }
            
        }

            
                
                
               