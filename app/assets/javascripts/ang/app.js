angular
  .module('app', ['ui.router', 'ngResource', 'templates', 'Devise'])
    .config(function ($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('manila', {
          url: '/',
          templateUrl: 'manila.html',
          controller: 'ManilaController as ctrl'
        })
        .state('lists', {
          url: '/lists/{id}',
          templateUrl: '/lists.html',
          controller: 'ListsController'
        })
        .state('login',{
          url: '/login',
          templateUrl: 'auth/_login.html',
          controller: 'AuthController',
          onEnter: ['$state', 'Auth', function($state, Auth){
            Auth.currentUser().then(function(){
              $state.go('manila');
            })
          }]
        })
        .state('register',{
          url: '/register',
          templateUrl: 'auth/_register.html',
          controller: 'AuthController',
          onEnter: ['$state', 'Auth', function($state, Auth){
            Auth.currentUser().then(function(){
              $state.go('manila');
            })
          }]
        });


        $urlRouterProvider.otherwise('/');
    });