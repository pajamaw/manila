var app = angular.module('app', ['ui.router', 'templates', 'ngResource', 'Devise', 'uiGmapgoogle-maps', 'nemLogging', 'xeditable']);
app.run(function(editableOptions){
  editableOptions.theme = 'default';
});
app.config(function(uiGmapGoogleMapApiProvider){
  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyB0TZ5OPpok9goAjVG24a30F-KuqsPvOks',
    //v: '3.17,',
    libraries: 'weather,geometry,visualization'

  });
});

app.config(function($stateProvider, $urlRouterProvider ) {

  $stateProvider
    .state('manila', {
      url: '/',
      templateUrl: 'front_page.html',
      controller: 'MainController as ctrl'
    })
    .state('manila.lists', {
      url: '/lists',
      templateUrl: 'manila/lists.html',
      controller: 'MainController as ctrl'
    })
    .state('manila.user', {
      url: '/lists',
      templateUrl: 'manila/user_lists.html',
      controller: 'MainController as ctrl'
    })
    .state('manila.user.listsadd', {
      url: '/:id',
      templateUrl: 'manila/listsadd.html',
      controller: 'ListsController as ctrl'
    })
    .state('login',{
      url: '/login',
      templateUrl: 'auth/_login.html',
      controller: 'AuthController',
      onEnter: ['$state', 'Auth', function($state, Auth){
        Auth.currentUser().then(function(){
          $state.go('manila.user');
        })
      }]
    })
    .state('register',{
      url: '/register',
      templateUrl: 'auth/_register.html',
      controller: 'AuthController',
      onEnter: ['$state', 'Auth', function($state, Auth){
        Auth.currentUser().then(function(){
          $state.go('manila.user');
        })
      }]
    });
  $urlRouterProvider.otherwise('/');
});
