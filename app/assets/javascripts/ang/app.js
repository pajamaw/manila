angular
  .module('app', ['ui.router', 'templates'])
  .config(function ($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");
      $stateProvider
        .state('manila', {
          url: '/',
          templateUrl: 'manila.html',
          controller: 'MainController'
        })
        .state('lists', {
          url: '/lists/{id}',
          templateUrl: 'lists/_lists.html',
          controller: 'ListsController'
        })
        .state('login',{
          url: '/login',
          templateUrl: 'auth/_login.html',
          controller: 'AuthController',
          onEnter: ['$state', 'Auth', function($state, Auth){
            Auth.currentUser().then(function(){
              $state.go('/');
            })
          }]
        })
        .state('register',{
          url: '/register',
          templateUrl: 'auth/_register.html',
          controller: 'AuthController',
          onEnter: ['$state', 'Auth', function($state, Auth){
            Auth.currentUser().then(function(){
              $state.go('/');
            })
          }]
        })
    });