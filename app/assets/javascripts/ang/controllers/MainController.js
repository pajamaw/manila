app.controller('MainController', MainController)
function MainController($scope, $rootScope, List, ListItem, $location, $state, Auth, uiGmapGoogleMapApi){
  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  uiGmapGoogleMapApi.then(function(maps) {
    $scope.map     = { center: { latitude: 40.783435, longitude: -73.966249 }, zoom: 12,
      tempevents: { "click" : 
      function (map, eventname, originalEventArgs) { 
        //alert(maps.latLng)
        var e = originalEventArgs[0];
        var tlat = e.latLng.lat(),tlon = e.latLng.lng();
        var tmarker = {
          id: Date.now(),
          coords:{
            latitude: lat,
            longitude: tlon
          }
        };
        alert(tmarker);
      }
    },
    events: { "click" : 
      function (map, eventname, originalEventArgs) { 
        //alert(maps.latLng)
        var e = originalEventArgs[0];
        var lat = e.latLng.lat(),lon = e.latLng.lng();
        var marker = {
          id: Date.now(),
          coords:{
            latitude: lat,
            longitude: lon
          }
        };
        //$scope.map.markers.push(marker);
        var tag = ('"' + marker.key + ',' + marker.coords.latitude + ',' + marker.coords.longitude + '"');
        console.log(tag);
        var key = marker.id;
        var lat = marker.coords.latitude;
        var lon = marker.coords.longitude;
        //console.log(key, lat, lon);
        //document.css("#location-input").text(tag.latitude);
        //$scope.list.list_item.location = tag.latitude;
        $rootScope.$broadcast('keydata', key);
        $rootScope.$broadcast('latdata', lat);
        $rootScope.$broadcast('londata', lon);
        $scope.$apply();
        alert('Location Set!');

      }
    },
    options: { scrollwheel: false }
    //debugger;
    //$scope.getpos = function(event) {
    //alert(event.latLng);
    };
  });

  ctrl.updateLists = function(){
    List.query( function (data){
      ctrl.lists = data;
    });
  };

  $scope.changeTodo = function (i) {
     console.log(i); 

    $scope.currentShow = i;
  };
  //ctrl.list = new List();

  ctrl.addList = function( newList){
    List.save(newList, function(){
        //success: 
        //{
          ctrl.updateLists(); 
          //ctrl.lists = List.query();
          ctrl.list = new List();
          //$state.go($state.current, {}, {reload: false});

        //};
    });
  };

  $scope.$on("update_parent_controller", function(event, message){
    ctrl.updateLists();
  });

  ctrl.updateLists();
}
