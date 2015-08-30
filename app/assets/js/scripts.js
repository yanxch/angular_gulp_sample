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
      .state('container_header_sidebar.home', homeLayout());
      
      function homeLayout() {
        return  {
          url: '/home',
          views: {
            'content@container_header_sidebar': {
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
	
	vm.entries = entries();
	
	function entries(){
		return [
                {
                    name: 'Search',
                    href: '#/search',
                    icon: 'search',
                    active: false
                },
                {
                    name: 'Folders',
                    href: '#/ablage',
                    icon: 'clear_all',
                    active: false
                },
                {
                    name: 'Inbox',
                    href: '#/inbox',
                    icon: 'business',
                    active: false
                },
                {
                    name: 'User Management',
                    href: '#/usermanagement',
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
        .directive('sidebar', Sidebar);

    function Sidebar() {
        return {
            restrict: 'E',
            templateUrl: 'modules/core/components/sidebar/sidebar.html',
            controller: SidebarController,
            controllerAs: 'vm',
            bindToController: true,
            scope: {}
        };

        function SidebarController($location) {
            var vm = this;
            
            vm.isActiveItem = isActiveItem;
            vm.items = [
                    {
                        name: 'User Management',
                        href: '#/entry1',
                        icon: 'group'
                    },
                    {
                        name: 'Controlling',
                        href: '#/entry2',
                        icon: 'local_florist'
                    }];

            function isActiveItem(item) {
                if (item.href === ('#' + $location.url())) {
                    return true;
                }

                return false;
            }
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
                template: '<navbar></navbar>'
            },
            'sidebar@container_header_sidebar': {
                template: '<sidebar></sidebar>'
            }  
          }
        };
      }
  }

})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvcmUvY29yZS5tb2R1bGUuanMiLCJob21lL2hvbWUubW9kdWxlLmpzIiwiaG9tZS9jb25maWcvaG9tZS5yb3V0ZXIuanMiLCJob21lL2NvbnRyb2xsZXIvaG9tZS5jb250cm9sbGVyLmpzIiwiY29yZS9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29udHJvbGxlci5qcyIsImNvcmUvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsImNvcmUvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuZGlyZWN0aXZlLmpzIiwiY29yZS9sYXlvdXQvY29uZmlnL2xheW91dC5yb3V0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZVJvb3QiOiIvbW9kdWxlcyJ9