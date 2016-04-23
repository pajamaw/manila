app.controller('MainController', MainController)
function MainController(List, $location){
  var ctrl = this;

  ctrl.lists = List.query();
  ctrl.list =  new List();

  ctrl.addList = function(){

    ctrl.list.$save(function(){
      $location.path('lists');
    });
  };

};
