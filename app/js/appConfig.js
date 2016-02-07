module.exports = function AppConfig($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  // routes
  $routeProvider
    .when("/", {
      templateUrl: "./partials/partial1.html",
      controller: "MainController"
    })
    .otherwise({
       redirectTo: '/'
    });
};
