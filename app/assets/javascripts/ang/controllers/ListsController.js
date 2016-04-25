app.controller('ListsController', ListsController);
function ListsController(List, ListItem, $stateParams, $state, $location){
  var ctrl = this;

  ctrl.list = List.get({id: $stateParams.id});

  ctrl.list_item = new ListItem();

  ctrl.addListItem = function(list){
    //if(ctrl.list_item.location === '') {return;}
    ctrl.list_item.list_id = ctrl.list.list.id;
    ctrl.list_item.$save(function(data){
      $state.go($state.current,{}, {reload: true});

      //$location.path('lists');
    //ctrl.list = List.get();

    });
  };

};