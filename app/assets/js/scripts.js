(function () {
  'use strict';

  angular.module('app', [
    /*
     * Everybody has access to these.
     * We could place these under every feature area,
     * but this is easier to maintain.
     */
    'app.core',

    /*
     * Use Case Modules
     */
    'app.home'

  ]);
})();

(function () {
  'use strict';

  angular.module('app.core', [
    
    'ui.router'
    
  ]);
  
})();

(function () {
  'use strict';

  angular.module('app.home', []);
  
})();

(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);


    /*@ngInject*/
    function HomeController() {
        var vm = this;
		vm.test = 'Test output';
        console.log('Hermann');
    }
	
})();

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

(function () {
  'use strict';

  angular
    .module('app.core')
    .controller('NavbarController', NavbarController);

  /*@ngInject*/

  function NavbarController() {

    /*jshint validthis: true */
    var vm = this;
	
	vm.entries = getNavbarItems();
	
	function getNavbarItems(){
		return [];
	} 

  }
  
})();

(function() {
'use strict';

	angular
		.module('app.core')
		.directive('navbar', NavbarDirective);
		
	function NavbarDirective() {
		return {
			restrict: 'E',
			controller: 'NavbarController',
			controllerAs: 'vm',
			templateUrl: 'modules/core/components/navbar/navbar.html',
			bindToController: true,
			link: link
		};
		
		function link(scope, element, attrs) {
	
		}
	}	
	
})();
(function () {
  'use strict';

  angular
    .module('app.core')
    .config(LayoutRouter);

  /*@ngInject*/
  function LayoutRouter($stateProvider) {
    $stateProvider
      .state('container', containerLayout())
      .state('container_header', containerHeaderLayout())
      .state('container_header_sidebar', containerHeaderSidebarLayout());
      
      function containerLayout(){
        return {
          abstract: true,
          templateUrl: 'modules/core/layout/views/container.html'
        };
      } 
      
      function containerHeaderLayout() {
        return {
          views: {
            '': {
                abstract: true,
                templateUrl: 'modules/core/layout/views/container_header.html',
            },
            'header@container_header': {
                template: '<navbar></navbar>'
            }
          }
        };
      }
      
      function containerHeaderSidebarLayout() { 
        return {
          views: {
            '': {
                abstract: true,
                templateUrl: 'modules/core/layout/views/container_header_sidebar.html'
            },
            'header@container_header_sidebar': {
                template: 'HEADER-DEFAULT'
            },
            'sidebar@container_header_sidebar': {
                template: 'SIDEBAR-DEFAULT'
            }  
          }
        };
      }
  }

})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvcmUvY29yZS5tb2R1bGUuanMiLCJob21lL2hvbWUubW9kdWxlLmpzIiwiaG9tZS9jb250cm9sbGVyL2hvbWUuY29udHJvbGxlci5qcyIsImhvbWUvY29uZmlnL2hvbWUucm91dGVyLmpzIiwiY29yZS9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29udHJvbGxlci5qcyIsImNvcmUvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsImNvcmUvbGF5b3V0L2NvbmZpZy9sYXlvdXQucm91dGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZVJvb3QiOiIvbW9kdWxlcyJ9