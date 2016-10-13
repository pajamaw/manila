app.factory('List', List);

function List($resource){


  var List = $resource('/api/lists/:id', {id: '@id'}, {
    query: {method: 'GET', isArray: true},
    update: {method: 'PUT'},
    delete: {method: 'DELETE'}
  });
  return List;
}
