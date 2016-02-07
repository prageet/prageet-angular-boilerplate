var angular = require('angular');
require('angular-route');
require('angular-animate');

module.export = angular.module('SampleApp', [
  'ngRoute',
  'ngAnimate'
])
.config(require('./appConfig'))
.controller('MainController', require('./controllers/mainctrl'));
