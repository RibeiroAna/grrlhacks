
    var map;
    var layer_0;
    function initialize() {
      map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: new google.maps.LatLng(-19.72280806988829, 6.152642000000014),
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      layer_0 = new google.maps.FusionTablesLayer({
        query: {
          select: "col7",
          from: "1vYQp4N5B9jB-7X7e22UJWgqVTC7rlZY3aK3vI7n6"
        },
        map: map,
        styleId: 3,
        templateId: 3
      });
    }


    function changeMap_0() {
      var whereClause;
      var searchString = document.getElementById('search-string_0').value.replace(/'/g, "\\'");
      if (searchString != '--Select--') {
        whereClause = "'tipoproj' = '" + searchString + "'";
      }
      layer_0.setOptions({
        query: {
          select: "col7",
          from: "1vYQp4N5B9jB-7X7e22UJWgqVTC7rlZY3aK3vI7n6",
          where: whereClause
        }
      });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
  
