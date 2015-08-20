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
    .module('app.core')
    .controller('NavbarController', NavbarController);

  /*@ngInject*/

  function NavbarController() {

    /*jshint validthis: true */
    var vm = this;
	
	vm.entries = getNavbarItems();
	
	function getNavbarItems(){
		return [
			{
				name: 'Suche',
				href: '#/documentSearch',
				icon: 'search',
				active: false
			},
			{
				name: 'Ablage',
				href: '#/ablage',
				icon: 'clear_all',
				active: false
			},
			{
				name: 'Arbeitskorb',
				href: '#/inbox',
				icon: 'business',
				active: false
			},
			{
				name: 'Organisationsstruktur',
				href: '#/organizational-structure',
				icon: 'assignment_ind',
				active: false
			},
			{
				name: 'User Verwaltung',
				href: '#/createUser',
				icon: 'clear_all',
				active: false
			}
		];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvcmUvY29yZS5tb2R1bGUuanMiLCJob21lL2hvbWUubW9kdWxlLmpzIiwiaG9tZS9jb25maWcvaG9tZS5yb3V0ZXIuanMiLCJob21lL2NvbnRyb2xsZXIvaG9tZS5jb250cm9sbGVyLmpzIiwiY29yZS9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29udHJvbGxlci5qcyIsImNvcmUvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsImNvcmUvbGF5b3V0L2NvbmZpZy9sYXlvdXQucm91dGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlUm9vdCI6Ii9tb2R1bGVzIn0=