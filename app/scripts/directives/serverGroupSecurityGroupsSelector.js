'use strict';

angular.module('deckApp')
  .directive('serverGroupSecurityGroupsSelector', function() {
    return {
      restrict: 'E',
      scope: {
        command: '=',
      },
      templateUrl: 'views/application/modal/serverGroup/aws/serverGroupSecurityGroupsDirective.html'
    };
  });
