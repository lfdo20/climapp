var api = "https://api.openweathermap.org/data/2.5/weather?"
var lat;
var lon;
var temp;
var tempF;
var tempunit = "C";
var city;
var clima;
var random;
var cor;

var colors = ['#16a085', '#27ae60', '#2c3e50', '#F6B246', '#B94437', '#876694', '#FB6964', "#B67983", "#BDBB99", "#77B1A9", "#73A857"];
/*[cloudy,sunny,drizzle,snowy,thuder,rain]
var images = ['https://image.ibb.co/cxLfrv/14949053812_61931f4131_k.jpg', 'https://image.ibb.co/dFGaPF/15575722782_0a9cc45bd8_k.jpg', 'https://image.ibb.co/nHwaPF/16182185088_9f815423e4_k.jpg', 'https://image.ibb.co/nQQrya/32449571193_ac14e6af0c_k.jpg', 'https://image.ibb.co/jM5frv/35361381773_3d8a19029f_k.jpg', 'https://image.ibb.co/k1Hh4F/35504174036_13df5984cf_h.jpg']*/
var hora;

$('document').ready(function(){

    var d = new Date();
    hora = d.getHours();
    console.log(hora);


    if ("geolocation" in navigator) {

      navigator.geolocation.getCurrentPosition(function(position) {

        lat = "lat=" + position.coords.latitude;
        lon = "lon=" + position.coords.longitude;
        console.log(lat,lon);
        var urlstr = api+lat +"&"+lon+"&units=metric"+"&appid=ab82760e50ec15b32856658ebb4f51cd"

    $.getJSON(urlstr, function(data){
      console.log(urlstr);
      console.log(data);
      city = data.name +', ' + data.sys.country;
      temp = Math.round(data.main.temp)+ String.fromCharCode(176);
      tempF = Math.round(data.main.temp * 9 / 5 + 32)+ String.fromCharCode(176);
      clima = data.weather[0].main;
      $('#temp').html(temp+tempunit);
     /* $('#tempF').html(tempF+f);*/
      $('#city').html(city);
      $('#clima').html(clima);
      iconGen(data.weather[0].main);
      $('#loader').addClass("hide-loader");
    });

});

} else {
  alert("I'm sorry, but geolocation services are not supported by your browser.");
}


  function iconGen(clima) {

  var desc = clima.toLowerCase();
  switch (desc) {
    case 'drizzle':

      if (hora >= 18 || hora <= 06){
      $('#icon').addClass('wi wi-night-sprinkle');
      $('body').css("background", "url(https://image.ibb.co/dis9pQ/night_sky_hd_wallpaper.jpg)");}
      else {
      $('#icon').addClass('wi wi-sprinkle');
      $('body').css("background", "url(https://image.ibb.co/nHwaPF/16182185088_9f815423e4_k.jpg)");
        }

      break;
    case 'clouds':

      if (hora >= 18 || hora <= 06){
      $('#icon').addClass('wi wi-night-cloudy');
      $('body').css("background", "url(https://image.ibb.co/dis9pQ/night_sky_hd_wallpaper.jpg)");}
      else {
      $('#icon').addClass('wi wi-cloudy');
      $('body').css("background", "url(https://image.ibb.co/cxLfrv/14949053812_61931f4131_k.jpg)");
        }

      break;
    case 'rain':

      if (hora >= 18 || hora <= 06){
      $('#icon').addClass('wi wi-night-rain');
      $('body').css("background", "url(https://image.ibb.co/dis9pQ/night_sky_hd_wallpaper.jpg)");}
      else {
      $('#icon').addClass('wi wi-rain');
      $('body').css("background", "url(https://image.ibb.co/k1Hh4F/35504174036_13df5984cf_h.jpg)");
        }

      break;
    case 'snow':

      if (hora >= 18 || hora <= 06){
      $('#icon').addClass('wi wi-night-snow');
      $('body').css("background", "url(https://image.ibb.co/dis9pQ/night_sky_hd_wallpaper.jpg)");}
      else {
      $('#icon').addClass('wi wi-snow');
      $('body').css("background", "url(https://image.ibb.co/nQQrya/32449571193_ac14e6af0c_k.jpg)");
        }

      break;
    case 'clear':

      if (hora >= 18 || hora <= 06){
      $('#icon').addClass('wi wi-night-clear');
      $('body').css("background", "url(https://image.ibb.co/dis9pQ/night_sky_hd_wallpaper.jpg)");}
      else {
      $('#icon').addClass('wi wi-day-sunny');
      $('body').css("background", "url(https://image.ibb.co/dFGaPF/15575722782_0a9cc45bd8_k.jpg)");
        }
      break;
    case 'thunderstom':

      if (hora >= 18 || hora <= 06){
      $('#icon').addClass('wi wi-night-thunderstorm');
      $('body').css("background", "url(https://image.ibb.co/dis9pQ/night_sky_hd_wallpaper.jpg)");}
      else {
      $('#icon').addClass('wi wi-thunderstorm');
      $('body').css("background", "url(https://image.ibb.co/jM5frv/35361381773_3d8a19029f_k.jpg)");
        }

      break;
       case 'haze':
      if (hora >= 18 || hora <= 06){
      $('#icon').addClass('wi wi-night-fog');
      $('body').css("background", "url(https://image.ibb.co/dis9pQ/night_sky_hd_wallpaper.jpg)");}
      else {
      $('#icon').addClass('wi wi-smog');
      $('body').css("background", "url(https://image.ibb.co/nHwaPF/16182185088_9f815423e4_k.jpg)");
        }

      break;
    default:

  }
  }

  random = Math.floor((Math.random()*colors.length));
    cor = colors[random];

    $(".cor").animate({
          color: cor,
          borderColor: cor

       }, 1000);

  /*  $(".container").animate({
          backgroundColor: cor

       }, 1000);*/

  $('.temp').on('click', function(){
    if (tempunit === "C"){
      tempunit = "F";
     $('#temp').html(tempF+tempunit);
    }
    else if (tempunit === "F"){
     tempunit = "C";
     $('#temp').html(temp+tempunit);
    }


  });






});
