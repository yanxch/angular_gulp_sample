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
            
            vm.items = items;
            vm.isActiveItem = isActiveItem;

            function items() {
                return [
                    {
                        name: 'Dokumentklasse anlegen',
                        href: '#/createDocumentClass',
                        icon: 'tab'
                    },
                    {
                        name: 'Dokumentklasse suchen',
                        href: '#/searchDocumentClass',
                        icon: 'search'
                    }];
            }

            function isActiveItem(item) {
                if (item.href === ('#' + $location.url())) {
                    return true;
                }

                return false;
            }
        }
    }

})();