app.controller('ManillaController', ManillaController)

function ManillaController($scope, Auth, $location, List, ListItem) {

  //$scope.signedIn = Auth.isAuthenticated;

  var ctrl = this;


  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

    
};