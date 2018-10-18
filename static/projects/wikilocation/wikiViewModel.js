var WikiViewModel = (function () {
	var map,
		xmlRequest,
		poiLayer,
		httpRequest,
		added = [],
		initialize = function(){
			initMap();
		},
		initMap = function(){
			//load the map
			map = L.map( 'mapwiki');
			MQ.mapLayer().addTo(map);
			map.setView( new L.LatLng( 47.622451, -122.352033), 15 );
			poiLayer = new L.MarkerClusterGroup({ disableClusteringAtZoom: 17 });
			updateMap();
			map.on('moveend', updateMap);
			map.on('zoomlevelschange', updateMap);
		},
		populateMap = function(data){
	    	// everything is good, the response is received
			for (var i = 0; i < data.length; i++)
			{
				var id = data[i].pageid;
				var check = jQuery.inArray(id, added);
				if (check === -1)
				{
					var lat = 	data[i].lat;
					var lng = 	data[i].lon;
					var title =	data[i].title;
					var url = 	data[i].title;
					var markerLocation = new L.LatLng(lat, lng);
					var mark = new L.Marker(markerLocation);
					var popupContent = "<a class='fancybox.iframe' href='http://en.wikipedia.org/wiki/" + url.replace(' ', '_') + "' onclick='$.fancybox(this);return false;'> " + title + "</a>";
					mark.bindPopup(popupContent);
					poiLayer.addLayer(mark);
					added.push(id);
				}
			}
			map.addLayer(poiLayer);
		},
		updateMap = function(){
			var center = map.getCenter();
			var bounds = map.getBounds();
			var radius = bounds.getSouthWest().distanceTo(bounds.getNorthEast());
			if (radius > 10000)
			{
				radius = 10000;
			}
			$.ajax({
		        type: "GET",
		        url: "http://en.wikipedia.org/w/api.php?action=query&format=json&list=geosearch&gslimit=50&gsradius=" + radius + "&gscoord=" + center.lat + "|"+ center.lng+"&callback=?",
		        contentType: "application/json; charset=utf-8",
		        async: false,
		        dataType: "json",
		        success: function (data, textStatus, jqXHR) {
		            httpRequest = data;
		            populateMap(data.query.geosearch);
		        },
		        error: function (errorMessage) {
		        }
		    });
		},
		scrollPage = function(pageSection) {
			var targetOffset = $(pageSection).offset().top - 150;
			$('html, body').animate({ scrollTop: targetOffset }, 750);
		};
	return {
		initialize: initialize,
		scrollPage: scrollPage
	}
})();

var bindingContainer = document.getElementById("wikiViewModel");
if (bindingContainer != null) {
	WikiViewModel.initialize();
	ko.applyBindings(WikiViewModel, bindingContainer);
}