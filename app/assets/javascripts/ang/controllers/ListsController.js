app.controller('ListsController', ListsController)
function ListsController(ListItem, $stateParams, $state, $location, $rootScope, $timeout){
  var ctrl = this;

  //ctrl.list = List.get({id: $stateParams.id});
  //ctrl.list_items = 

  ctrl.list_items = ListItem.query({list_id: $stateParams.id});
  ctrl.list_item = new ListItem();

  //ctrl.list.list.list_items = ListItem.query({id: ctrl.list.id});

  ctrl.addListItem = function(){
    //debugger;
    //ctrl.list_item new ListItem();;


    //if(ctrl.list_item.location === '') {return;}
    ctrl.list_item.list_id = $stateParams.id;
    //ctrl.list_item.$save(function(data){
      debugger;
    ctrl.list_item.$save(function(data){
     // debugger;
                       // debugger;
                        //ctrl.list_item = data here 
                        // aka they equal the resouce of 70 items
                        //all_list_items = 69 items
      //  debugger;
          //new_item = data.list_items[data.list_items.length -1]
          //we see ctrl.list.list.list_items is defined here and = 69
         // ctrl.list.list.list_items.push(new_item);
            //$rootScope.$apply();
          ctrl.list_items = ListItem.query({list_id: $stateParams.id, id: data.list_items.slice(-1)[0].id});
          debugger;
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

          $state.go($state.current, {}, {reload: true});
                   //    debugger;
                 // debugger;
    });

      //new_item = data.list_items[data.list_items.length -1]
      //ctrl.list = List.get({id: $stateParams.id});
      //new_item = new ListItem();
      //ctrl.list_items = ListItem.query({list_id: new_item.list_id});
      //return ctrl.list_items.push(new_item);
      //$state.go($state.current,{}, {reload: false});
    //});
    //ctrl.list.list.list_items.push(ctrl.list_item);
    //ctrl.list.list.list_items.push(ctrl.list_item);
  };
  //debugger;
}