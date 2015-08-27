//Generates an iframe and Loads the src with the lat and long received from esri
window.onload = function(){
  getCoordinates();
  var iframe = document.createElement('iframe');
  iframe.setAttribute("src", mapsource);
  iframe.id="mapframe";
  iframe.frameBorder=0;
   // iframe.width="300px";
   // iframe.height="250px";
  document.getElementById("map").appendChild(iframe);
}
//splits the lat and long of the url
function getCoordinates() {
  var parameters = location.search.substring(1).split("&");
  var temp = parameters[0].split("=");
  lat = unescape(temp[1]);
  temp = parameters[1].split("=");
  long = unescape(temp[1]);
  mapsource = "http://fibermap.zayo.com:90/WavesPL1.0/?mapCenter="+lat+","+long+"&zoom=11";
}