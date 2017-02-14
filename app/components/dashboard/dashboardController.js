 angular.module('app')
 .controller('dashboardController', ['$scope', '$rootScope', 'DATA', '$log', 'dashboardService',
  function($scope, $rootScope, DATA, $log, dashboardService) {

    $scope.allItems = [];

    // Fetch People
    $scope.fetchPeople = function(){
      DATA.fetchPeople()
      .then(function(response) {
        $scope.allItems = dashboardService.convertItems(response);
        $log.debug("dashboardController: fetchPeople $scope.allItems: ", $scope.allItems);
      });
    };

    $scope.fetchPeople();


  }]);/*dashboardController*/