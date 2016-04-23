app.controller('ListsController', ListsController);
function ListsController(List, $stateParams){
  var ctrl = this;

  ctrl.list = List.get({id: $stateParams.id});

  ctrl.addListItem = function(){
    if(ctrl.list.location === '') {return;}
    ctrl.list.list.list_items.push({
      title: 'new title',
      location: ctrl.list.location,
      user_id: 1, 
      date: 'today', 
      description: 'Sweet event', 
      completed: false
    });
    ctrl.location = '';
  };

};