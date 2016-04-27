app.controller('MainController', MainController)
function MainController($scope, List, $location, $state, Auth, uiGmapGoogleMapApi){
  var ctrl = this;

  //var areaLat      = 44.2126995
   //   areaLng      = -100.2471641,
     // areaZoom     = 3;

  uiGmapGoogleMapApi.then(function(maps) {
    $scope.map     = { center: { latitude: 40.783435, longitude: -73.966249 }, zoom: 12,
    markers: [],
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
        $scope.map.markers.push(marker);
        console.log('"lat:' + marker.coords.latitude + ', lon:' + marker.coords.longitude + '"');
        $scope.$apply();
      }
    },

    options: { scrollwheel: false }
    //debugger;
    //$scope.getpos = function(event) {
    //alert(event.latLng);
    };
  });

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
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
