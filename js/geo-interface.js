var apiKey = require('./../.env').apiKey;
var Map = require('./../js/geo.js').mapModule;

$(document).ready(function(){
  var newMap = new Map();
  var map;
  $.get('https://maps.googleapis.com/maps/api/geocode/json?address=portland,+or&key=AIzaSyDfb4v-EmKos5paWeelqEGYoOJlvuQr03w').then(function(response) {
  console.log(response);
  newMap.initMap(20, 0);

  $("#lats").submit(function(event){
    event.preventDefault();
    var lat = parseInt($("#latitude").val());
    var long = parseInt($("#longitude").val());
    console.log(long);
    newMap.initMap(lat, long);
  });
      //console.log(JSON.stringify(response));
      // $("#map-display").append(response);
  });

});
