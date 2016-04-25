app.controller('MainController', MainController)
function MainController(List, $location, $state){
  var ctrl = this;

  ctrl.lists = List.query();
  ctrl.list = new List();

  ctrl.addList = function(){
    ctrl.list.$save(function(){
        success: 
        {
          ctrl.lists = List.query();
          ctrl.list = new List();
          $state.go($state.current, {}, {reload: false});
        };
    });
  };
}
