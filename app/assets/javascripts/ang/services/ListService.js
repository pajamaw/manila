function lists(){
  var o = {
    lists: []
  };
  return o;
};

angular
  .module('app', [])
  .factory('lists', lists)