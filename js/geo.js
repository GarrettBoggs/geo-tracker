function Map() {

}

Map.prototype.initMap = function (newLat, newLong) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: newLat , lng: newLong},
    zoom: 8
  });
};

exports.mapModule = Map;
