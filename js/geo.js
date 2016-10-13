function Map() {

}
var ultraArray = [[40.7127837, -74.0059413], [36.0544445,-112.1401108], [41.8902102, 12.4922309], [51.17888199999999, -1.826215], [38.279277,-81.65017]];

  Map.prototype.initMap = function (newLat, newLong) {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: newLat , lng: newLong},
      zoom: 15
    });
    console.log("[" + newLat + "," + newLong + "]");
  };


  Map.prototype.getStreetView = function (newLat, newLong) {
    var panorama = new google.maps.StreetViewPanorama(
    document.getElementById('map'), {
      position: {lat: newLat, lng: newLong},
      pov: {heading: 165, pitch: 0},
      motionTracking: false
    });
  };

  Map.prototype.randomCords = function(){
    var rando = Math.floor(Math.random()*(ultraArray.length));
    console.log(rando);
    return ultraArray[rando];
  };

exports.mapModule = Map;
//position: {lat: 37.869260, lng: -122.254811},
