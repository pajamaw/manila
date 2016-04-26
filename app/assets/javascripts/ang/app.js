var app = angular.module('app', ['ui.router', 'templates', 'ngResource', 'Devise']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('manila', {
      url: '/',
      templateUrl: 'manila.html',
      controller: 'MainController as ctrl'//,
      //resolve: {
        //lists: function (List){
        //  return List.query();
       // }
     // }
    })
    .state('manila.listsadd', {
      url: '/lists/:id',
      templateUrl: 'manila/listsadd.html',
      controller: 'ListsController as ctrl'
      //resolve: {
      //  ListItem: 'ListItem',
      //  list_items: function(ListItem, $stateParams){
       //   return ListItem.get({list_id: $stateParams.id}).$promise;
        // }
      //}
    })
    .state('login',{
      url: 'login',
      templateUrl: 'auth/_login.html',
      controller: 'AuthController',
      onEnter: ['$state', 'Auth', function($state, Auth){
        Auth.currentUser().then(function(){
          $state.go('/');
        })
      }]
    })
    .state('register',{
      url: 'register',
      templateUrl: 'auth/_register.html',
      controller: 'AuthController',
      onEnter: ['$state', 'Auth', function($state, Auth){
        Auth.currentUser().then(function(){
          $state.go('/');
        })
      }]
    });
  $urlRouterProvider.otherwise('/');
});
