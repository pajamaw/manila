app.controller('ListsController', ListsController)
function ListsController($scope, ListItem, List, $stateParams, $state, $location, $rootScope){
  var ctrl = this;

  ctrl.list = List.get({id: $stateParams.id});

  current_list_id = $stateParams.id;

  $scope.$on('keydata', function(event, key){
    key_data = key;
  });
  $scope.$on('latdata', function(event, lat){
    lat_data = lat;
  });

  $scope.$on('londata', function(event, lon){
    lon_data = lon;
  });

  ctrl.updateListItems = function (){
    List.query(function (data){
      ctrl.lists = data;
     // debugger;
    });

  };


//the whole time there were two issues. main controller wasn't saving the function, to do that i just had to explicitly list to update after the resource had saved
//and with this controller it was a case where, it wasn't talking to its parent controller, and since the main view seen is in main, i had
//to emit those changes up, through another function, and then make sure the parent controller updates its list. 

  //ctrl.removeListItem = function(newtitle){
    //ListItem.update({id:})

  //};

  ctrl.addListItem = function(newListItem){


    //if(ctrl.list_item.location === '') {return;}
    newListItem.list_id = current_list_id;
    //ctrl.list_item.$save(function(data){
      //debugger;
    newListItem.gmapkey = key_data;
    newListItem.latitude = lat_data;
    newListItem.longitude = lon_data;
    console.log(newListItem.gmapkey, newListItem.latitude, newListItem.longitude);


    ListItem.save(newListItem, function(){
     // debugger;
                       // debugger;
                        //ctrl.list_item = data here 
                        // aka they equal the resouce of 70 items
       $scope.$emit('update_parent_controller', ctrl.updateListItems());
       ctrl.list_item = new ListItem();
                        //all_list_items = 69 items
      //  debugger;
          //new_item = data.list_items[data.list_items.length -1]
          //we see ctrl.list.list.list_items is defined here and = 69
         // ctrl.list.list.list_items.push(new_item);
            //$rootScope.$apply();
          //ctrl.list_items = ListItem.query({list_id: $stateParams.id, id: data.list_items.slice(-1)[0].id});
          //debugger;
          //no longer defined at ctrl.list.list.list_items
                  //debugger;
          //ctrl.list_items = ListItem.query({list_id: new_item.list_id});
          //ctrl.list_item = new ListItem();
                           /// debugger;
                           ///ctrl.list_item = new ListItem();
          //all_list_items = data.list_items;
                        //    debugger;

          //all_list_items.push(new_item);
                            //debugger;
          //ctrl.list_items.unshift(data.list_items);

                   //    debugger;
                 // debugger;
    });


  };
  //ctrl.updateLists();
  //$scope.$emit(ctrl.updateListItems());

  //debugger;
}