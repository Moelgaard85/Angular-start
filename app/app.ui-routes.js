ibg.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    // Default route - Defines what state is the beginning state of the app. Since its set to a sub-state, the parent main state will automatically be loaded first.
    $urlRouterProvider.otherwise('main.dashboard');

    // Main parent state of all states. 
    $stateProvider
    .state('main', {
      templateUrl: 'app/components/main/main.html?%%GULP_INJECT_VERSION%%' ,
      controller: 'mainController'
    })
    // Sub-states of main
    .state('main.dashboard', {
      url: '/dashboard',
      controller: 'dashboardController',
      templateUrl: 'app/components/dashboard/dashboard.html?%%GULP_INJECT_VERSION%%'
    });
  }
]);/*config*/