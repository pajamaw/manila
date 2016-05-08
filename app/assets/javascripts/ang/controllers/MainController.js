app.controller('MainController', MainController)
function MainController($scope, $rootScope, List, ListItem, $location, $state, Auth, uiGmapGoogleMapApi, $filter){
  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  uiGmapGoogleMapApi.then(function(maps) {
    $scope.map = { center: { latitude: 40.783435, longitude: -73.966249 }, zoom: 12,
      tempevents: { "click" : 
      function (map, eventname, originalEventArgs) { 
        var e = originalEventArgs[0];
        var tlat = e.latLng.lat(),tlon = e.latLng.lng();
        var tmarker = {
          id: Date.now(),
          coords:{
            latitude: lat,
            longitude: tlon
          }
        };
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
        var tag = ('"' + marker.key + ',' + marker.coords.latitude + ',' + marker.coords.longitude + '"');
        console.log(tag);
        var key = marker.id;
        var lat = marker.coords.latitude;
        var lon = marker.coords.longitude;
        //console.log(key, lat, lon);
        $rootScope.$broadcast('keydata', key);
        $rootScope.$broadcast('latdata', lat);
        $rootScope.$broadcast('londata', lon);
        $scope.$apply();
        alert('Location Set!');

      }
    },
    options: { scrollwheel: true }
    //debugger;
    };
  });

  ctrl.editListItemTitle = function (list_item){
    ListItem.update({list_id: list_item.list_id, id: list_item.id, title: list_item.title});
    //debugger;
  };

  ctrl.editListItemDate = function (list_item){
    ListItem.update({list_id: list_item.list_id, id: list_item.id, date: list_item.date});
    //debugger;
  };

  ctrl.editListItemDescription = function (list_item){
    ListItem.update({list_id: list_item.list_id, id: list_item.id, description: list_item.description});
    //debugger;
  };
  ctrl.editListItemStatus = function (list_item){
    ListItem.update({list_id: list_item.list_id, id: list_item.id, completed: list_item.completed});
    //debugger;
  };

  ctrl.editListTitle = function (list){
    List.update({id: list.id, title: list.title});
    //debugger;
  };

  ctrl.removeListItem = function (index, list_item, list){

    list.list_items.splice(index, 1);
    ListItem.delete({list_id: list_item.list_id, id: list_item.id});
  };

  ctrl.removeList = function (index, list){

    ctrl.lists.lists.splice(index, 1);
    List.delete({id: list.id});
  };

  ctrl.updateLists = function(){
    List.query( function (data){
      ctrl.lists = data;
      //debugger;
    });
  };

  $scope.changeTodo = function (i) {
     console.log(i); 

    $scope.currentShow = i;
  };

  $scope.completed = [
    {value: 1, text: 'Completed!'},
    {value: 0, text: 'In Progress!'}
  ]; 

  $scope.showStatus = function(list_item) {
    var selected = $filter('filter')($scope.completed, {value: list_item.completed});
    return (list_item.completed ) ? 'Completed' : 'In Progress!';
  };


  ctrl.addList = function( newList){
    List.save(newList, function(){
          ctrl.updateLists(); 
          ctrl.list = new List();
    });
  };


  $scope.$on("update_parent_controller", function(event, message){
    ctrl.updateLists();
  });

  ctrl.updateLists();
}
