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
