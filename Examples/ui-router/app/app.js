var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /main
    $urlRouterProvider.otherwise("/main");

    $stateProvider
        .state('main', {
            url: "/main",
            templateUrl: "app/partials/main.html",
            controller: "MainController",
            controllerAs: "vm"
        })
        .state("main.detail", {
            url: "/detail",
            templateUrl: "app/partials/main.detail.html"
        })
        .state("about", {
            url: "/about",
            templateUrl: "app/partials/about.html"
        })
});
