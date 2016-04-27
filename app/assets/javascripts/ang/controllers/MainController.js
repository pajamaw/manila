app.controller('MainController', MainController)
function MainController($scope, List, $location, $state, Auth){
  var ctrl = this;


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
