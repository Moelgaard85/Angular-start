angular.module('ibg')
.service('dashboardService', ['Flash', '$log', 'itemService',
  function (Flash, $log, itemService) {
    'use strict';

    $log.debug("dashboardService: dashboardService ready...");

    var fetchPerson = function(){
      var obj = {
        "name": "Peter Foo Bar",
        "age": 16
      }
      return obj;
    }

    var fetchCity = function(){
      var obj = {
        "title": "Copenhagen",
        "region": "Sjaelland"
      }
      return obj;
    }

    return {
      fetchPerson: fetchPerson,
      fetchCity: fetchCity
    };
  }
]);/*dashboardService*/