function MainController($scope, lists) {
  $scope.lists = lists.lists
  $scope.lists = [
  {title: 'woot', list_items: [
    {title: 'listitem', location: 'nyc', date: 'today', description: 'Sweet event', completed: true}, 
    {title: 'listitem', location: 'nyc', date: 'today', description: 'Sweet event', completed: true}, 
    {title: 'listitem', location: 'nyc', date: 'today', description: 'Sweet event', completed: true}, 
    {title: 'listitem', location: 'nyc', date: 'today', description: 'Sweet event', completed: true}, 
    {title: 'listitem', location: 'nyc', date: 'today', description: 'Sweet event', completed: true}
    ]}, 
  {title: 'woot2', list_items: [
    {title: 'listitem', location: 'nyc', date: 'today', description: 'Sweet event', completed: true}, 
    {title: 'listitem', location: 'nyc', date: 'today', description: 'Sweet event', completed: true}, 
    {title: 'listitem', location: 'nyc', date: 'today', description: 'Sweet event', completed: true}, 
    {title: 'listitem', location: 'nyc', date: 'today', description: 'Sweet event', completed: true}, 
    {title: 'listitem', location: 'nyc', date: 'today', description: 'Sweet event', completed: true}
    ]}, 
  {title: 'woot3', list_items: [
    {title: 'listitem', location: 'nyc', date: 'today', description: 'Sweet event', completed: true}, 
    {title: 'listitem', location: 'nyc', date: 'today', description: 'Sweet event', completed: true}, 
    {title: 'listitem', location: 'nyc', date: 'today', description: 'Sweet event', completed: true}, 
    {title: 'listitem', location: 'nyc', date: 'today', description: 'Sweet event', completed: true}, 
    {title: 'listitem', location: 'nyc', date: 'today', description: 'Sweet event', completed: true}
    ]}

  ];

  $scope.addList = function(){
    if(!$scope.title || $scope.title === '') { return; }
    $scope.lists.push({title: $scope.title, list_items: []});
    $scope.title = '';
  };



};

angular
  .module('app', ['lists'])
  .controller('MainController', MainController);