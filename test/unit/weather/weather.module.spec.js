(function() {
    'use strict';

    describe('WeatherModule', function() {

        var module;

        beforeEach(function() {
            module = angular.module('WeatherModule');
        });

        it('should be registered', function() {
            expect(module.name).toBe('WeatherModule');
        });
    });
}());
