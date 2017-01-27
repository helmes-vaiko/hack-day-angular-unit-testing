(function() {
    'use strict';

    beforeEach(module('WeatherModule'));

    describe('WeatherFormDirectiveController:', function() {

        var controller, $filter;
        var WeatherService;
        var forecastDeferred;

        beforeEach(function() {
           inject(function($injector, $controller, $q) {
               $filter = $injector.get('$filter');

               forecastDeferred = $q.defer();

               WeatherService = jasmine.createSpyObj('WeatherService', [ 'forecast' ]);
               WeatherService.forecast.and.returnValue(forecastDeferred.promise);

               controller = $controller('WeatherFormDirectiveController', {
                    WeatherService: WeatherService,
                    $filter: $filter
               });
           });
        });

        it('should define calculateAverageTemp method', function() {
            expect(controller.calculateAverageTemp).toBeDefined();
        });

        it('should calculate average temperature', function() {
            var weatherData = [
                {temp: 10},
                {temp: -5},
                {temp: 5}
            ];

            var actual = controller.calculateAverageTemp(weatherData);
            expect(actual).toBe('3.33');
        });

        it('should handel empty array when calculation average temperature', function() {
            var weatherData = [];

            var actual = controller.calculateAverageTemp(weatherData);
            expect(actual).toBe('');
        });

    });

}());
