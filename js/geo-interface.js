//var apiKey = require('./../.env').apiKey;
var Map = require('./../js/geo.js').mapModule;
var x = document.getElementById("demo");

$(document).ready(function(){

  //console.log(navigator.geolocation.getCurrentPosition(showPosition));
  //console.log(parseJSON(navigator.geolocation));
  var newMap = new Map();
  var map;
  var lat;
  $.get('https://maps.googleapis.com/maps/api/streetview?size=400x400&location=40.720032,-73.988354&fov=90&heading=235&pitch=10&key=AIzaSyBStk9s-BaIB1CKNciuG_TXCvfeLQJYc6o').then(function(response) {
  //console.log(response);

    navigator.geolocation.getCurrentPosition(function(position) {
      //console.log(position.coords.latitude);
      //console.log(position.coords.longitude);
    newMap.getStreetView(position.coords.latitude, position.coords.longitude);
    });
    //newMap.initMap(49, -122);

    $("#lats").submit(function(event){
      event.preventDefault();
      var lat = parseFloat($("#latitude").val());
      var long = parseFloat($("#longitude").val());
      newMap.getStreetView(lat, long);
    });

    $("#random").click(function(){
      var random = newMap.randomCords();
      newMap.getStreetView(random[0], random[1]);
    });

  });

  $("#submit-city").submit(function(event){
    event.preventDefault();
    var city = $("#city").val();
    $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + city  + ',+' + '&key= AIzaSyDfb4v-EmKos5paWeelqEGYoOJlvuQr03w').then(function(response) {
      var lat = response.results[0].geometry.location.lat;
      var long = response.results[0].geometry.location.lng;
      console.log(lat +"Front end" + long);
      newMap.initMap(lat, long);
      });
    });



});
