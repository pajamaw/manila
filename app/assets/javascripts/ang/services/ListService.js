app.factory('List', List);

function List($resource){


  var List = $resource('/api/lists/:id', {id: '@id'}, {
    query: {method: 'GET'},
    update: {method: 'PUT'}
  });
  return List;
}
