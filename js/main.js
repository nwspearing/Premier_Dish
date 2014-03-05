


var starting_latitude = 0;
var starting_longitude = 0;

var current_latitude=0;
var current_longitude=0;
var current_place;

var geocoder;
var map;

function geoFindMe() {

  var output = document.getElementById("out");
  var output2 = document.getElementById("out2");
  var output3 = document.getElementById("out3");
  var output4 = document.getElementById("out4");
  var output5 = document.getElementById("out5");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {

    if (current_latitude==0 && current_longitude==0) {
    latitude  = position.coords.latitude;
    longitude = position.coords.longitude;
    }
    else
    {
    latitude  = current_latitude;
    longitude = current_longitude;
    }

    lat2plus = latitude+.002;
    long2 = longitude;

    lat3minus = latitude-.002;
    long3 = longitude;

    lat4 = latitude;
    long4plus = longitude+.002;

    lat5 = latitude;
    long5minus = longitude-.002;

   output.innerHTML = "<iframe allowTransparency='true' frameborder='0' scrolling='no' src='http://www.foodspotting.com/widgets/sightings?background=CCC&amp;border=CCCCCC&amp;border_radius=5&amp;height=272&amp;image_border=regular&amp;image_border_width=10&amp;latitude="+latitude+"&amp;longitude="+longitude+"&amp;order=best&amp;page=1&amp;query=&amp;size=large&amp;type=place_search&amp;width=592&amp;x=3&amp;y=1' style='border:none; overflow:hidden; width:592px; height: 272px'></iframe>";

   output2.innerHTML = "<iframe allowTransparency='true' frameborder='0' scrolling='no' src='http://www.foodspotting.com/widgets/sightings?background=CCC&amp;border=CCCCCC&amp;border_radius=5&amp;height=272&amp;image_border=regular&amp;image_border_width=10&amp;latitude="+lat2plus+"&amp;longitude="+long2+"&amp;order=best&amp;page=1&amp;query=&amp;size=large&amp;type=place_search&amp;width=592&amp;x=3&amp;y=1' style='border:none; overflow:hidden; width:592px; height: 272px'></iframe>";

   output3.innerHTML = "<iframe allowTransparency='true' frameborder='0' scrolling='no' src='http://www.foodspotting.com/widgets/sightings?background=CCC&amp;border=CCCCCC&amp;border_radius=5&amp;height=272&amp;image_border=regular&amp;image_border_width=10&amp;latitude="+lat3minus+"&amp;longitude="+long3+"&amp;order=best&amp;page=1&amp;query=&amp;size=large&amp;type=place_search&amp;width=592&amp;x=3&amp;y=1' style='border:none; overflow:hidden; width:592px; height: 272px'></iframe>";

   output4.innerHTML = "<iframe allowTransparency='true' frameborder='0' scrolling='no' src='http://www.foodspotting.com/widgets/sightings?background=CCC&amp;border=CCCCCC&amp;border_radius=5&amp;height=272&amp;image_border=regular&amp;image_border_width=10&amp;latitude="+lat4+"&amp;longitude="+long4plus+"&amp;order=best&amp;page=1&amp;query=&amp;size=large&amp;type=place_search&amp;width=592&amp;x=3&amp;y=1' style='border:none; overflow:hidden; width:592px; height: 272px'></iframe>";

   output5.innerHTML = "<iframe allowTransparency='true' frameborder='0' scrolling='no' src='http://www.foodspotting.com/widgets/sightings?background=CCC&amp;border=CCCCCC&amp;border_radius=5&amp;height=272&amp;image_border=regular&amp;image_border_width=10&amp;latitude="+lat5+"&amp;longitude="+long5minus+"&amp;order=best&amp;page=1&amp;query=&amp;size=large&amp;type=place_search&amp;width=592&amp;x=3&amp;y=1' style='border:none; overflow:hidden; width:592px; height: 272px'></iframe>";
 

  };

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  };


  navigator.geolocation.getCurrentPosition(success, error);
};



function initialize() {


  geoFindMe();


  geocoder = new google.maps.Geocoder();


}





function codeAddress() {
   // alert('codeAddress begins');
  var address = document.getElementById('address').value;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      
      current_latitude = results[0].geometry.location.lat();
      current_longitude = results[0].geometry.location.lng();

      geoFindMe();
      
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}


google.maps.event.addDomListener(window, 'load', initialize);










