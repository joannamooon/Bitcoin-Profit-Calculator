var bitcoinCalculator = angular.module('bitcoinCalculator', ['nvd3ChartDirectives']);
bitcoinCalculator.controller('bitcoinController', function ($scope, $http) {
   
    $http.get("https://bitpay.com/api/rates")
    .success(function(data) {
        $scope.rates = data;
        for (var i = 0; i < data.length; i++) {
            if (data[i].code == "USD") {
                $scope.currRate = data[i].rate;
            }
        }
        $scope.init = 1000;
        $scope.sell = 1000;

        $scope.currentAmt = function(price) {
            return price / $scope.currRate * $scope.init;
        };

        $scope.sellAmt = function(price) {
            return $scope.sell * price / $scope.currRate;
        };

        $scope.profit = function(price) {
            return (price / $scope.currRate * $scope.sell) - $scope.init;
        };
  
       
    });
});
