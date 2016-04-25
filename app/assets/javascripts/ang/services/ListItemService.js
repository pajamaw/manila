app.factory('ListItem', ListItem);

function ListItem($resource){
  
  var ListItem = $resource('/api/lists/:list_id/list_items.json', {list_id: '@list_id'}, {
    update: {method: 'PUT'}
  });
  return ListItem;
}
