(function() {
    'use strict';


    function WeatherService(Restangular) {
        var self = this;

        self.forecast = function(cityName) {
            if(cityName) {
                var params = {
                    q: cityName,
                    units: 'metric',
                    appid: 'c5f75ef52e0fc638aa5cfe9bc1a919f4'
                };
                return  Restangular.oneUrl('openweathermap', 'http://api.openweathermap.org/data/2.5/forecast').get(params);
            }

            return {};
        };
    }

    angular.module('WeatherModule').service('WeatherService', WeatherService);

}());
