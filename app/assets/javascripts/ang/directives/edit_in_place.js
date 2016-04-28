app.directive( 'editInPlace', function() {
  return {
    restrict: 'E',
    scope: { value: '=' },
    template: '<span ng-click="edit()" ng-bind="value"></span><input ng-model="value"></input>',
    link: function ( $scope, element, attrs, controllers) {
      var inputElement = angular.element( element.children()[1] );
      
      element.addClass( 'edit-in-place' );
      
      $scope.editing = false;
      
      $scope.edit = function () {
        $scope.editing = true;
        
        element.addClass( 'active' );
        
        inputElement[0].focus();
      };
      
      inputElement.prop( 'onblur', function() {
        $scope.editing = false;
        element.removeClass( 'active' );
      });
    }
  };
});