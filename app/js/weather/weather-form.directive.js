(function() {
    'use strict';

    function WeatherFormDirective() {
        return {
            scope : {},
            restrict : 'E',
            controller : 'WeatherFormDirectiveController',
            controllerAs : 'ctrl',
            bindToController : true,
            replace : true,
            templateUrl : '/partials/weather/weather-form.html'
        };
    }

    function WeatherFormDirectiveController(WeatherService, $filter) {
        var vm = this;
        vm.weatherData = [];
        vm.averageTemp = 0;
        vm.cityName = 'Tallinn';

        WeatherService.forecast(vm.cityName).then(function(data) {
            vm.weatherData = vm.filterWeatherData(data);
            vm.averageTemp = vm.calculateAverageTemp(vm.weatherData);
        });

        vm.filterWeatherData = function(data) {
            var result = [];
            var weatherList = data.list;

            for (var i = 0; i < weatherList.length; i++) {
                var dateTime = $filter('date')(weatherList[i].dt * 1000, 'MMM dd HH:mm');

                if (dateTime.endsWith('14:00')) {
                    var weatherDataRow = {
                        timestamp: dateTime,
                        description: weatherList[i].weather[0].main,
                        temp: weatherList[i].main.temp
                    };
                    result.push(weatherDataRow);
                }
            }

            return result;
        };

        vm.calculateAverageTemp = function(weatherList) {
            var result = 0;

            for (var i = 0; i < weatherList.length; i++) {
                result += weatherList[i].temp;
            }

            return $filter('number')(result/weatherList.length, 2);
        };
    }

    angular.module('WeatherModule')
        .directive('weatherFrom', WeatherFormDirective)
        .controller('WeatherFormDirectiveController', WeatherFormDirectiveController);

}());

