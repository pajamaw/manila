function UserController(user) {

  this.data = user.data;
}

angular
  .module('app')
  .controller('UserController', UserController);