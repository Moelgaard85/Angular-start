angular.module('ibg')
.service('DATA', ['Flash', '$log', '$q', '$http', '$timeout',
  function (Flash, $log, $q, $http, $timeout) {
    'use strict';

    $log.debug('DATA: DATA ready...');

    // var fetchActivities = function(){
    //   $log.debug('DATA: fetchActivities called');
    //   var defer = $q.defer();

    //   $http.get(SERVER_URL_API + '/getActivities')
    //   .then(function(response) {
    //     // success
    //     $log.debug('DATA: fetchActivities: response:', response);
    //     defer.resolve(response.data);
    //   }, function(response) {
    //     // error
    //     $log.debug('DATA: fetchActivities: response:', response);
    //     Flash.create('danger', 'Fejl: Nødvendig data kunne ikke læses fra serveren!');
    //     defer.reject(response);
    //   });

    //   return defer.promise;
    // };

    return {
      // fetchActivities: fetchActivities,
    };
  }
]); /*DATA*/