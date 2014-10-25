'use strict';

angular.module('myApp.version.interpolate-filter', [])

.filter('interpolate', ['version', function(version) {
  return function(text) {
    return text;
    //return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);
