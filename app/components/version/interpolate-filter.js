'use strict';

angular.module('myApp.version.interpolate-filter', [])

.filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text2).replace(/\%VERSION\%/mg, version);
  };
}]);
