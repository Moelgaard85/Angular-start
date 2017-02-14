// ANGULAR MODULE APP
var app = angular.module('app', [
  'ngResource', 
  'ngSanitize', 
  'ui.router',
  'flash', 
  'ngCookies',
  ]);

// ANGULAR CONFIG
app.config(['$logProvider', '$provide',
  function ($logProvider, $provide) {
  // Debug Console Log Settings (set globally in conf.js)
  var consoleLog = window.consoleLogEnabled || false;
  $logProvider.debugEnabled(consoleLog);
  console.log('Log settings are set in conf.js. Log status:', $logProvider.debugEnabled());

  // Error handler
  $provide.decorator('$exceptionHandler',
    function($delegate, $injector) {
      return function(exception, cause){
        var $rootScope = $injector.get('$rootScope');
        var $location = $injector.get('$location');
        var currentLocation = $location.path();
        
        $delegate(exception, cause);
        setTimeout(function() {
          throw exception;
        });
      };
    });
  }
]);

// ANGULAR RUN
angular.module('app').run(['$rootScope', '$log', '$location', 'Flash', '$state',
 function ($rootScope, $log, $location, Flash, $state) {
    // $stateChangeStart
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    });
  }
]);/*RUN*/


// ******* Moment
moment.locale('da');
moment.tz("Europe/Copenhagen");
moment.locale('da', {
  monthsShort : [
  "Jan", "Feb", "Mar", "Apr", "Maj", "Jun",
  "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"
  ],
  weekdays : [
  "Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"
  ],
  weekdaysShort : [
  "Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"
  ]
});
