  require([
    "dojo/on",
    "dojo/dom",
    //"dojo/dom-class",
    //"dojo/dom-style",
    //"dojo/mouse",
    "esri/map",
    "esri/dijit/Search",
    "esri/geometry/Point",
    //"esri/SpatialReference",
    "esri/dijit/Geocoder",
    "dojo/dom-construct",
    "dojo/_base/window",
    //"dojo/domReady!"

  ], function (
        on, dom, Map, Search, Point, Geocoder, domConstruct, win)

     {

    //This loads esri geocode which allows us to get the lat and long
     var s = new Geocoder({
        autoComplete:!0,
        // map: map
     }, "search");
     s.startup();

    //  This get the lat and long once a location is selected
    s.on("select", function() {
      f=new Point(s.results[0].feature.geometry);
      var
      e=f.getLatitude();
      a=f.getLongitude();
      console.log(e);
      //Change the address location to the url where you want to send the latitude and longitude
      var addresslocation = "/solutions/global-network/network-map/?latitude="+a+"&longitude="+e;
      var search = dom.byId("search");
      domConstruct.place("<a id='gobutton' class='btn green right' href="+addresslocation+">GO!</a>", search, "before");
      });
  });

