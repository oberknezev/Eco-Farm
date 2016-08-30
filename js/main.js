

//FILTERIZR GALLERY FILTER
$(document).ready(function (){
    $(function() {
            //Initialize filterizr with default options
            $('.filtr-container').filterizr();
        });
});


//GOOGLE MAP
var myCenter = new google.maps.LatLng(51.487572, -0.158280);
function initialize(){
    var mapProp = {
        center: myCenter,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
        position: myCenter,
        animation:google.maps.Animation.BOUNCE
    });
    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);

//FLICKR BADGE
jsFlickrBadge(document.getElementById('flickrBadge'), {
      // your Flickr ID (find it here)
      flickrId: '143264327@N08',
      // feed type. user, group, contacts, etc.
      feed: 'user',
      // optional comma-delimited tags to filter by, only used with 'user' feed
      // number of rows to display
      rows: 2,
      // number of columns to display
      columns: 4,
      // size of each thumbnail (any bigger than 75 will cause pixelization)
      size: 70,
      // animation to use.
      // one of: vscroll, random, vscroll, shuffle, zoom, scroll, flipX, flipY
      animation: 'vscroll',
      // seconds each animation takes
      animationSpeed: 1,
      // seconds between each animation
      animationPause: 2
    });


