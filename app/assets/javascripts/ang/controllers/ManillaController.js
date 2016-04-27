app.controller('ManillaController', ManillaController);

function ManillaController($scope, Auth, $location) {

  $scope.signedIn = Auth.isAuthenticated;

  var ctrl = this;

  ctrl.show = function() {
    return true;
  };

}