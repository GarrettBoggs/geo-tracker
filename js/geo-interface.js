var apiKey = require('./../.env').apiKey;
var Map = require('./../js/geo.js').mapModule;

$(document).ready(function(){
  var newMap = new Map();
  var map;
  $.get('https://maps.googleapis.com/maps/api/streetview?size=400x400&location=40.720032,-73.988354&fov=90&heading=235&pitch=10&key=AIzaSyBStk9s-BaIB1CKNciuG_TXCvfeLQJYc6o').then(function(response) {
  console.log(response);
  newMap.initMap(45, -122);
  newMap.getStreetView(45, -122);
  $("#lats").submit(function(event){
    event.preventDefault();
    var lat = parseInt($("#latitude").val());
    var long = parseInt($("#longitude").val());
    newMap.initMap(lat, long);
    // $.get('https://maps.googleapis.com/maps/api/streetview?size=400x400&location=40.720032,-73.988354&fov=90&heading=235&pitch=10&key=AIzaSyBStk9s-BaIB1CKNciuG_TXCvfeLQJYc6o').then(function(response2) {
    //   console.log(response2);
    // });

  });
      //console.log(JSON.stringify(response));
      // $("#map-display").append(response);
  });

});
