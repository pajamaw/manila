app.controller('AuthController', function AuthController($scope, $state, Auth){
  
  $scope.login = function(){
    Auth.login($scope.user).then(function(){
      $state.go('/');
    });
  };

  $scope.register = function(){
    Auth.register($scope.user).then(function(){
      $state.go('/');
    });
  };

  
});
