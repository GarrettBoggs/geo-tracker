function Map() {

}

Map.prototype.initMap = function (newLat, newLong) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: newLat , lng: newLong},
    zoom: 8
  });

  Map.prototype.getStreetView = function (newLat, newLong) {
    var panorama = new google.maps.StreetViewPanorama(
    document.getElementById('map'), {
      position: {lat: 37.869260, lng: -122.254811},
      pov: {heading: 165, pitch: 0},
      motionTracking: false
    });
  };

};


exports.mapModule = Map;
