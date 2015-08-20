(function () {
  'use strict';

  angular
    .module('app.home')
    .config(HomeRouter);

  /*@ngInject*/
  function HomeRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/home');
    $urlRouterProvider.when('/', '/home');
    
    $stateProvider
      .state('container_header.home', homeLayout());
      
      function homeLayout() {
        return  {
          url: '/home',
          views: {
            'content@container_header': {
              templateUrl: 'modules/home/views/home.html',
              controller: 'HomeController',
              controllerAs: 'vm'
            }
          }
        };
      }
  }

})();
