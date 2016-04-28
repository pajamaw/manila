app.factory('ListItem', ListItem);

function ListItem($resource){
  
  var ListItem = $resource('/api/lists/:list_id/list_items/:id', {list_id: '@list_id', id: '@id'}, {
    update: {method: 'PUT'}, 
    query: {method: 'GET'}, 
    delete: {method: 'DELETE'}
  });
  return ListItem;
}
