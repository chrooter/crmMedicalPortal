'use strict';

/**
 * @ngdoc overview
 * @name crmMedicalPortalApp
 * @description
 * # crmMedicalPortalApp
 *
 * Main module of the application.
 */
angular
  .module('crmMedicalPortalApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
        var routes, setRoutes;
        return routes = ["about"],
        setRoutes = function (route) {
            var config, url;
            return url = "/" + route, config = { templateUrl: "views/" + route + ".html" }, $routeProvider.when(url, config), $routeProvider
        }, routes.forEach(function (route) {
            return setRoutes(route)
        }), $routeProvider.when("/", { redirectTo: "/ui/dashboard" }).when("/404", { templateUrl: "views/pages/404.html" }).otherwise({ redirectTo: "/construction" })
  });
