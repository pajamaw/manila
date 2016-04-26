var app = angular.module('app', ['ui.router', 'templates', 'ngResource', 'Devise']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('lists', {
      url: '/lists',
      templateUrl: 'manila/lists.html',
      controller: 'MainController as ctrl'//,
      //resolve: {
        //lists: function (List){
        //  return List.query();
       // }
     // }
    })
    .state('lists.listsadd', {
      url: '/lists/:id',
      templateUrl: 'manila/listsadd.html',
      controller: 'ListsController as ctrl'//,
      //resolve: {
      //  List: 'List',
      //  list: function(List, $stateParams){
      //    return List.get({id: $stateParams.id}).$promise;
     //    }
     // }
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
