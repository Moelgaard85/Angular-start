 angular.module('ibg')
 .controller('dashboardController', ['$scope', '$rootScope', 'DATA', '$log', 'dashboardService',
  function($scope, $rootScope, DATA, $log, dashboardService) {
    $scope.allItems = [];
    $scope.selectedItem = null;

    // Fetch Activities
    DATA.fetchActivities()
    .then(function(response) {
      $scope.allItems = dashboardService.convertItems(response);
      $log.debug("dashboardController: fetchActivities $scope.allItems: ", $scope.allItems);
    });

    $scope.selectActivity = function(item, index) {
      $scope.selectedItem = item;
      $scope.tabIndex = index;
    };
  }
]);/*dashboardController*/