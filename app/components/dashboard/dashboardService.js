angular.module('app')
.service('dashboardService', ['Flash', '$log', 'itemService',
  function (Flash, $log, itemService) {
    'use strict';

    $log.debug("dashboardService: dashboardService ready...");

    var convertItems = function(items){
      return items;
    };

    return {
      convertItems: convertItems
    };
  }
]);/*dashboardService*/