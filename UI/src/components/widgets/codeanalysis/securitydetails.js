(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module)
        .controller('SecurityDetailsController', SecurityDetailsController);

    SecurityDetailsController.$inject = ['$scope', '$uibModalInstance', 'SecurityResult'];
    function SecurityDetailsController($scope, $uibModalInstance, SecurityDetailsResult) {
        /*jshint validthis:true */
        var ctrl = this;
        ctrl.type = SecurityResult.type;

        ctrl.SecurityResult = SecurityDetailsResult.data;
        ctrl.close = close;

        function close() {
            $uibModalInstance.dismiss('close');
        }


        $scope.getDashStatus = function getDashStatus(level) {
            switch (level.toLowerCase()) {
                case 'blocker':
                    return 'blocker';

                case 'critical':
                    return 'critical';

                case 'major':
                    return 'major';
            }
        };

        ctrl.getDetails = function getDetails(level) {

            return 0;
        }
    }


})();