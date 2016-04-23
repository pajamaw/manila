app.factory('List', ['$http', function($http){
  var o ={
    lists: []
  };

  o.getAll = function() {
    return $http.get('/api/lists.json').success(function(data){
      angular.copy(data, o.lists);
    });
  };
}])


//app.factory('List', List);
//function List($resource) {

 // var List = $resource('/api/lists/:id', {id: '@id'}, {
 //   update: { method: 'PUT' },
 //   delete: { method: 'DELETE' },
 // });

//  return List;
