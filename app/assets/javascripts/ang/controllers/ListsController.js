function ListsController($scope, $stateParams, lists){
  $scope.list = lists.lists[$stateParams.id];

  $scope.addListItem = function(){
    if($scope.title === '') {return;}
    $scope.list.list_items.push({
      title: $scope.title,
      user_id: 1, 
      location: 'nyc', 
      date: 'today', 
      description: 'Sweet event', 
      completed: false

    });
    $scope.title = '';
  };
  
}

angular
  .module('app')
  .controller('ListsController', ListsController)