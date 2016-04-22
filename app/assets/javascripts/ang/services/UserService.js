function UserService($http){
  this.getUser = function(id){
    return $http.get('/user/' + id);
  };
}

angular
  .module('app')
  .service('UserService',UserService) 