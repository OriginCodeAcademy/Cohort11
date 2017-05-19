(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$state'];

    /* @ngInject */
    function MainController($state) {
        var vm = this;
        vm.title = 'MainController';
        vm.goSomewhere = goSomewhere;

        activate();

        function activate() {

            vm.test = 'foo';

        }

        function goSomewhere() {
            $state.go('about');
        }

    }
})();
