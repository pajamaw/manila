app.controller('ListsController', function ListsController($scope, $stateParams, lists){

  $scope.list = lists.lists[$stateParams.id];

  $scope.addListItem = function(){
    if($scope.location === '') {return;}
    $scope.list.list_items.push({
      title: 'new title',
      location: $scope.location,
      user_id: 1, 
      date: 'today', 
      description: 'Sweet event', 
      completed: false
    });
    $scope.location = '';
  };

});