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
