app.factory('List', function List($resource){


  var List = $resource('/api/lists/:id.json', {id: '@id'}, {
    query: {method: 'GET'},
    update: {method: 'PUT'}
  });
  return List;
});
