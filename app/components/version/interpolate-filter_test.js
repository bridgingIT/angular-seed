'use strict';

describe('myApp.version module', function () {
    beforeEach(module('myApp.version'));

    describe('interpolate filter', function () {

        var filter;

        beforeEach(module(function ($provide) {
            $provide.value('version', 'TEST_VER');
        }));

        beforeEach(inject(function (interpolateFilter) {
            filter = interpolateFilter;
        }));

        it('should replace VERSION', function () {
            expect(filter('before %VERSION% after')).toEqual('before TEST_VER after');
        });

        it('should leave other text untouched', function () {
                expect(filter('other text without VERSION')).toEqual('other text without VERSION');
            }
        );
    });
});
